"use client";

import Image from "next/image";
import styles from "../specialty-detail.module.scss";
import { IconHeaderLogo } from "@/assets/icons/header";
import { IconLocation } from "@/assets/icons/common";
import { BLUR_DATA_URL } from "@/shared/constants/images";
import Link from "next/link";
import { navigateToHospital } from "../_helpers/navigateToHospital";
import { useTranslations } from "next-intl";

/**
 * HospitalCard Component
 * Focused specifically on displaying Hospital information as the primary entity.
 */
export default function HospitalCard({
  partner,
  hospitalAddress,
  cta,
  searchKey,
}: {
  partner: {
    name: string;
    slug: string;
    address: string;
    circleLogo: string;
  };
  hospitalAddress: string;
  cta: any;
  searchKey: string;
}) {
  const t = useTranslations("common");
  const tSpecialty = useTranslations("specialty.detail");
  return (
    <div className={styles.card_hospitalCard}>
      <div className={styles.card_mainContent}>
        <div className={styles.card_logoWrapper}>
          <Image
            src={partner.circleLogo ?? IconHeaderLogo}
            alt={partner.name}
            width={64}
            height={64}
            className={styles.card_image}
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
            unoptimized
            loading='eager'
          />
        </div>
        <div className={styles.card_infoWrapper}>
          <h3 className={styles.card_name}>{partner.name}</h3>
          <div className={styles.card_infoLine}>
            <Image
              src={IconLocation}
              alt=''
              width={16}
              height={16}
              aria-hidden='true'
            />
            <p>{hospitalAddress || partner.address}</p>
          </div>
        </div>
      </div>

      <div className={styles.card_footer}>
        <Link
          href={`https://medpro.vn/${partner.slug}`}
          className={styles.card_detailButton}
        >
          {t("viewDetails")}
        </Link>
        <Link
          href={navigateToHospital(cta, searchKey)}
          className={styles.card_bookButton}
          target='_blank'
          rel='noreferrer nofollow'
        >
          {tSpecialty("bookAppointment")}
        </Link>
      </div>
    </div>
  );
}
