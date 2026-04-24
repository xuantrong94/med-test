import { ImgDCMA } from "@/assets/images/footer";
import Image from "next/image";
import styles from "../../Footer.module.scss";
import { COPYRIGHT_TEXT } from "../../content";
import { useTranslations } from "next-intl";

export default function DcmaBox() {
  const t = useTranslations("common");

  return (
    <div className={styles.dcmaBox}>
      {/* Assuming there is a "copyright" key, otherwise fallback to existing text */}
      <p>{t("copyright", { fallback: COPYRIGHT_TEXT })}</p>
      <Image
        src={ImgDCMA}
        alt='DCMA'
        className={styles.image}
      />
    </div>
  );
}
