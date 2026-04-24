"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./image-with-skeleton.module.scss";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  overrideSrc?: string;
  fetchPriority?: "high" | "low" | "auto";
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className,
  overrideSrc,
  fetchPriority = "high",
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div
      className={`${styles.imageWrapper} ${className || ""}`}
      style={{ width, height }}
    >
      {isLoading && (
        <div className={styles.skeleton}>
          <div className={styles.shimmer}></div>
        </div>
      )}
      <Image
        src={hasError ? overrideSrc || "/logo.svg" : src}
        alt={alt}
        width={width}
        height={height}
        className={`${styles.image} ${isLoading ? styles.loading : styles.loaded} ${hasError ? styles.fallbackImage : ""}`}
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={fetchPriority}
        loading='eager'
      />
    </div>
  );
}
