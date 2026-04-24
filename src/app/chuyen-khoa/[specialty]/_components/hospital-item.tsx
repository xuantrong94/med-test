import Image from "next/image";
import styles from "../specialty-detail.module.scss";
import { ResultItem } from "@/types/result.item";
import { IconHeaderLogo } from "@/assets/icons/header";
import { IconHospital, IconLocation } from "@/assets/icons/common";
import { BLUR_DATA_URL } from "@/shared/constants/images";
import Link from "next/link";
import { navigateToHospital } from "../_helpers/navigateToHospital";

export default function HospitalItem({
  title,
  desc2,
  hospitalAddress,
  partner,
  cta,
  searchKey,
}: ResultItem & { searchKey: string }) {
  return (
    <Link
      href={navigateToHospital(cta, searchKey)}
      className={styles.card_hospitalItem}
      aria-label={partner.name}
      target='_blank'
      rel='noreferrer nofollow'
    >
      <div className={styles.card_hospitalHeader}>
        <div className={styles.card_logoWrapper}>
          <Image
            src={partner.circleLogo ?? IconHeaderLogo}
            alt={partner.name}
            width={64}
            height={64}
            className={styles.card_hospitalImage}
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
            unoptimized
            loading='eager'
          />
        </div>
        <div className={styles.card_hospitalMeta}>
          <p className={styles.card_hospitalName}>{partner.name}</p>
          <div className={styles.card_specialtyTag}>
            <Image
              src={IconHospital}
              alt='Specialty Icon'
              width={14}
              height={14}
            />
            <span>{title}</span>
          </div>
        </div>
      </div>

      <div className={styles.card_hospitalBody}>
        <div className={styles.card_infoLine}>
          <Image
            src={IconLocation}
            alt='Location'
            width={16}
            height={16}
          />
          <p>{hospitalAddress || partner.address}</p>
        </div>
        {desc2 && (
          <div className={styles.card_infoLine}>
            <div className={styles.card_dotSeparator} />
            <p className={styles.card_truncateLine}>{desc2}</p>
          </div>
        )}
      </div>

      <div className={styles.card_hospitalFooter}>
        <button className={styles.card_bookButton}>Đặt khám ngay</button>
      </div>
    </Link>
  );
}
