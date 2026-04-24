"use client";

import React, { useState, useEffect } from "react";
import { env } from "@/config";
import styles from "./screen-width-display.module.scss";

type ScreenWidthDisplayProps = {
  className?: string;
};

const ScreenWidthDisplay: React.FC<ScreenWidthDisplayProps> = ({
  className,
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    updateScreenWidth();

    // Add event listener for resize
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  // Don't render on server side to avoid hydration mismatch
  if (screenWidth === 0) {
    return null;
  }

  return (
    <div
      className={`${styles.screenWidthDisplay} ${className || ""} #${env.isDevelopment ? styles.dev : styles.prod}`}
    >
      <div className={styles.content}>
        <span className={styles.label}>Width:</span>
        <span className={styles.value}>{screenWidth}px</span>
      </div>
    </div>
  );
};

export default ScreenWidthDisplay;
