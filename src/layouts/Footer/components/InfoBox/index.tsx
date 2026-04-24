import styles from "../../Footer.module.scss";
import Image from "next/image";
import { MEDPRO_INFO } from "../../content";
import { useTranslations } from "next-intl";

export default function InfoBox() {
  const t = useTranslations("common");

  return (
    <div className={styles.infoBox}>
      <Image
        src={MEDPRO_INFO.LOGO}
        alt={t("logoAlt", { fallback: "MedPro Logo" })}
      />
      {/*<p>*/}
      {/*  <strong>{t("address")}: </strong>*/}
      {/*  <span>{MEDPRO_INFO.ADDRESS}</span>*/}
      {/*</p>*/}
      <p>
        <strong>{t("website")}: </strong>
        <span>{MEDPRO_INFO.WEBSITE}</span>
      </p>
      <p>
        <strong>{t("email")}: </strong>
        <span>{MEDPRO_INFO.EMAIL}</span>
      </p>
      {/*<Link href={MEDPRO_INFO.PHONE_HREF}>*/}
      {/*  <strong>{t("phone")}: </strong>*/}
      {/*  <span>{MEDPRO_INFO.PHONE}</span>*/}
      {/*</Link>*/}
    </div>
  );
}
