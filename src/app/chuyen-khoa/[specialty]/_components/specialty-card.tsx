"use client";

import Image from "next/image";
import styles from "../specialty-detail.module.scss";
import { ResultItem } from "@/types/result.item";
import { IconHeaderLogo } from "@/assets/icons/header";
import { IconHospital } from "@/assets/icons/common";
import { BLUR_DATA_URL } from "@/shared/constants/images";
import Link from "next/link";
import { navigateToHospital } from "../_helpers/navigateToHospital";
import { useTranslations } from "next-intl";

/**
 * SpecialtyCard Component
 * Focused specifically on displaying Specialty information as the primary entity.
 */
export default function SpecialtyCard({
  title,
  partner,
  cta,
  searchKey,
}: ResultItem & { searchKey: string }) {
  const t = useTranslations("specialty.detail");
  return (
    <Link
      href={navigateToHospital(cta, searchKey)}
      className={styles.spec_specialtyCard}
      aria-label={title}
      target='_blank'
      rel='noreferrer nofollow'
    >
      <div className={styles.spec_header}>
        <div className={styles.spec_logoWrapper}>
          <Image
            src={partner.circleLogo ?? IconHeaderLogo}
            alt={title}
            width={56}
            height={56}
            className={styles.spec_image}
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
            unoptimized
            loading='eager'
          />
        </div>
        <h3 className={styles.spec_specialtyTitle}>{title}</h3>
      </div>

      <div className={styles.spec_body}>
        <div className={styles.spec_atHospital}>
          <Image
            src={IconHospital}
            alt=''
            width={16}
            height={16}
            aria-hidden='true'
          />
          <p>{partner.name}</p>
        </div>
      </div>

      <div className={styles.spec_footer}>
        <div className={styles.spec_bookButton}>{t("bookNow")}</div>
      </div>
    </Link>
  );
}
