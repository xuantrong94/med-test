"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown } from "lucide-react";
import styles from "../specialty-detail.module.scss";
import { useTranslations } from "next-intl";

interface ExpandableWrapperProps {
  children: React.ReactNode;
  maxHeight?: number;
}

const ExpandableWrapper: React.FC<ExpandableWrapperProps> = ({
  children,
  maxHeight = 400,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("specialty.detail");

  useLayoutEffect(() => {
    if (contentRef.current) {
      if (contentRef.current.scrollHeight > maxHeight) {
        setShowButton(true);
      }
    }
  }, [maxHeight]);

  const handleToggle = () => {
    if (isExpanded && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - 100;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div ref={wrapperRef} className={styles.cont_wrapper}>
      <div
        ref={contentRef}
        className={`${styles.cont_container} ${isExpanded ? styles.cont_isExpanded : ""}`}
        style={{ maxHeight: isExpanded ? "none" : `${maxHeight}px`, overflow: "hidden" }}
      >
        {children}
      </div>
      {showButton && (
        <div
          className={`${styles.cont_fadeOverlay} ${isExpanded ? styles.cont_fadeOut : ""}`}
        />
      )}
      {showButton && (
        <button className={styles.cont_expandButton} onClick={handleToggle}>
          <span>{isExpanded ? t("showLess") : t("showMore")}</span>
          <ChevronDown
            className={`${styles.cont_icon} ${isExpanded ? styles.cont_iconRotate : ""}`}
            size={16}
          />
        </button>
      )}
    </div>
  );
};

export default ExpandableWrapper;
