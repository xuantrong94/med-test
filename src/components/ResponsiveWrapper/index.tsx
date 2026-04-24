// typescript
"use client";

import React, { ComponentType, useEffect, useState } from "react";

interface ResponsiveWrapperProps<P = any> {
  mobileImport: () => Promise<
    { default?: ComponentType<P> } | ComponentType<P>
  >;
  desktopImport: () => Promise<
    { default?: ComponentType<P> } | ComponentType<P>
  >;
  breakpoint?: number;
  loadingComponent?: React.ReactNode;
  props?: P; // Added props for dynamic component
}

export const ResponsiveWrapper = <P extends object>({
  mobileImport,
  desktopImport,
  breakpoint = 768,
  loadingComponent = (
    <div
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      Loading...
    </div>
  ),
  props,
}: ResponsiveWrapperProps<P>) => {
  const [Component, setComponent] = useState<ComponentType<P> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  // Handle window resize to detect orientation changes
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < breakpoint;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      };
    }
  }, [breakpoint, isMobile]);

  // Load appropriate component when isMobile changes
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setComponent(null);

    const importer = isMobile ? mobileImport : desktopImport;

    // add small timeout guard (optional)
    const timeoutMs = 10000;
    const timeoutId = setTimeout(() => {
      if (!cancelled) {
        console.error("ResponsiveWrapper: import timeout");
        setLoading(false);
        setError(new Error("import timeout"));
      }
    }, timeoutMs);

    importer()
      .then((mod: any) => {
        if (cancelled) return;
        clearTimeout(timeoutId);

        // support both `export default` and direct component export
        const Comp: ComponentType<P> | undefined =
          mod && (mod.default || (typeof mod === "function" ? mod : undefined));
        if (!Comp) {
          throw new Error(
            "Loaded module does not contain a React component as default export"
          );
        }
        setComponent(() => Comp);
        setLoading(false);
      })
      .catch((err: any) => {
        if (cancelled) return;
        clearTimeout(timeoutId);
        console.error("ResponsiveWrapper import error:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      });

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isMobile, mobileImport, desktopImport]);

  if (loading) {
    return <>{loadingComponent}</>;
  }

  if (error) {
    // optional: render nothing on error to avoid infinite loading UI
    return null;
  }

  if (!Component) {
    return null;
  }

  return <Component {...(props as P)} />;
};

export const createResponsiveComponent = <P extends object>(
  mobileImport: () => Promise<{ default: ComponentType<P> }>,
  desktopImport: () => Promise<{ default: ComponentType<P> }>,
  breakpoint?: number
) => {
  const ResponsiveComponent: React.FC<P> = (props: P) => (
    <ResponsiveWrapper
      mobileImport={mobileImport}
      desktopImport={desktopImport}
      breakpoint={breakpoint}
      props={props}
    />
  );

  ResponsiveComponent.displayName = "ResponsiveComponent";

  return ResponsiveComponent;
};

export default ResponsiveWrapper;
