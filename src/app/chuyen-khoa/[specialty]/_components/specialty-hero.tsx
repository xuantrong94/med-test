import { getSearchKey } from "@/shared/constants/specialties";
import Image from "next/image";
import styles from "../specialty-detail.module.scss";
import type { StrapiMediaV5 } from "@/types/strapi";
import { getTranslations } from "next-intl/server";

interface SpecialtyHeroProps {
  specialty: string;
  heroTag?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: StrapiMediaV5;
}

export default async function SpecialtyHero({
  specialty,
  heroTag,
  heroTitle,
  heroDescription,
  heroImage,
}: SpecialtyHeroProps) {
  const [searchKey, t] = await Promise.all([
    getSearchKey(specialty),
    getTranslations("specialty.detail"),
  ]);

  // Resolve hero image source
  const FALLBACK_IMAGE = "/images/specialty-dermatology.png";
  const FALLBACK_SIZE = 700;

  const imageSrc = heroImage?.url
    ? heroImage.url.startsWith("http")
      ? heroImage.url
      : `https://dev-strapi.medpro.com.vn${heroImage.url}`
    : FALLBACK_IMAGE;

  const imageAlt =
    heroImage?.alternativeText || t("specialtyPrefix", { name: searchKey });

  return (
    <div className={styles.det_hero}>
      <div className={styles.det_heroContent}>
        <div className={styles.det_heroText}>
          <div className={styles.det_heroTag}>{heroTag || t("heroTag")}</div>
          <h1 className={styles.det_heroTitle}>
            {heroTitle || t("specialtyPrefix", { name: searchKey })}
          </h1>
          <p className={styles.det_heroDescription}>
            {heroDescription || t("heroFallbackDesc")}
          </p>
          <div className={styles.det_heroActions}>
            <button className={styles.det_btnPrimary}>{t("bookSchedule")}</button>
            <button className={styles.det_btnSecondary}>{t("learnMore")}</button>
          </div>
        </div>
        <div className={styles.det_heroImage}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={heroImage?.width || FALLBACK_SIZE}
            height={heroImage?.height || FALLBACK_SIZE}
            priority
            className={styles.det_image}
          />
        </div>
      </div>
    </div>
  );
}
