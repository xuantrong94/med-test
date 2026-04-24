"use client";
import { useDevice } from "@/lib/hooks/useDevice";
import { useEffect, useState, ComponentType } from "react";

type ImportFunction<T = Record<string, unknown>> = () => Promise<{
  default?: ComponentType<T>;
  [key: string]: unknown;
}>;

interface UseResponsiveComponentReturn<T = Record<string, unknown>> {
  Component: ComponentType<T> | null;
  loading: boolean;
  isMobile: boolean;
}

function useResponsiveComponent<T = Record<string, unknown>>(
  mobileImport: ImportFunction<T>,
  desktopImport: ImportFunction<T>,
  breakpoint: number = 768
): UseResponsiveComponentReturn<T> {
  const device = useDevice(breakpoint);
  const isMobile = device === "mobile";
  const [Component, setComponent] = useState<ComponentType<T> | null>(null);

  useEffect(() => {
    let isMounted = true;

    const importComponent = async () => {
      try {
        // Import component phù hợp
        const importedModule = isMobile
          ? await mobileImport()
          : await desktopImport();

        if (isMounted) {
          // Lấy default export hoặc named export
          const ComponentToSet =
            importedModule.default ||
            (importedModule as unknown as ComponentType<T>);

          // Ensure we're setting a proper component reference
          setComponent(() => ComponentToSet);
        }
      } catch (error) {
        console.error("Error loading component:", error);
        if (isMounted) {
          setComponent(null);
        }
      }
    };

    importComponent();

    return () => {
      isMounted = false;
    };
  }, [isMobile, mobileImport, desktopImport]);

  const loading = Component === null;

  return { Component, loading, isMobile };
}

export default useResponsiveComponent;
