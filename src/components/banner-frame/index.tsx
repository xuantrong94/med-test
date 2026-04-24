"use client";

import React, { useEffect, useState } from "react";
import { StrapiBanner } from "@/types/banner";
import { useDevice } from "@/lib/hooks/useDevice";
import styles from "./banner-frame.module.scss";
import { env } from "@/config";

interface BannerFrameProps {
  banner: StrapiBanner;
}

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BannerFrame({ banner }: BannerFrameProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const device = useDevice(1024); // Use 1024px breakpoint to match project convention
  const t = useTranslations("common");

  // Get appropriate image based on device type
  const currentImage =
    device === "mobile" && banner.imageMobile
      ? banner.imageMobile
      : banner.imageDesktop;

  useEffect(() => {
    if (!banner.isActive) return;

    // Remove the fake delay, render immediately when mounted on client
    setShouldRender(true);
    setIsVisible(true);
  }, [banner.isActive]);

  const handleClose = () => {
    setIsVisible(false);
    // Remove from DOM after animation
    setTimeout(() => setShouldRender(false), 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleBannerClick = () => {
    if (banner.link) {
      window.open(banner.link, "_blank", "noopener,noreferrer");
    }
  };

  if (!banner.isActive || !shouldRender) {
    return null;
  }
  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.visible : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={`${styles.banner} ${isVisible ? styles.show : ""}`}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label={t("close")}
        >
          ×
        </button>

        <div
          className={styles.content}
          onClick={handleBannerClick}
          style={{ cursor: banner.link ? "pointer" : "default" }}
        >
          <div className={styles.imageContainer}>
            <Image
              src={(env.strapi.url || "") + (currentImage.formats?.medium?.url || currentImage.url)}
              alt={currentImage.alternativeText || banner.title}
              width={currentImage.formats?.medium?.width || currentImage.width}
              height={currentImage.formats?.medium?.height || currentImage.height}
              className={styles.image}
              fetchPriority='high'
              loading='eager'
            />
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>{banner.title}</h2>
            {banner.subtitle && (
              <p className={styles.subtitle}>{banner.subtitle}</p>
            )}
            {banner.link && (
              <span className={styles.ctaText}>{t("viewDetails")} →</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
