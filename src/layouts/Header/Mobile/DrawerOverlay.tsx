"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDrawer } from "./DrawerProvider";
import styles from "@/layouts/Header/Header.module.scss";

interface DrawerOverlayProps {
  children: React.ReactNode;
  closeLabel: string;
}

export function DrawerOverlay({ children, closeLabel }: DrawerOverlayProps) {
  const { isOpen, close } = useDrawer();

  useEffect(() => {
    if (!isOpen) return;

    // Lock scroll
    document.body.style.overflow = "hidden";

    // Keyboard handler
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = ""; // Reset to original or empty
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  // Use Portal to render outside the main layout landmark
  // We check for document to avoid SSR issues
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`${styles.mb_backdrop} ${isOpen ? styles.show : ""}`}
        onClick={close}
        aria-label={closeLabel}
      />

      {/* Drawer Content Container */}
      <div
        className={`${styles.dr_container} ${isOpen ? styles.show : styles.hide}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </>,
    document.body
  );
}
