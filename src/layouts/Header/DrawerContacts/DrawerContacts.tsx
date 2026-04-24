import { HEADER_SUPPORTS } from "@/layouts/Header/content";
import styles from "@/layouts/Header/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/shared/constants/images";
import { useTranslations } from "next-intl";

const keyToTranslation: Record<string, string> = {
  facebook: "supportFacebook",
  zalo: "supportZalo",
  hotline: "supportHotline",
  email: "supportEmail",
};

export default function DrawerContacts() {
  const t = useTranslations("navigation");

  return (
    <div>
      {HEADER_SUPPORTS.map(item => (
        <Link
          key={item.key}
          className={styles.dc_item}
          href={item.url}
        >
          <div className={styles.header}>
            <div className={styles.icon}>
              <Image
                src={item.icon}
                alt={item.key}
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <span className={styles.link}>
              {keyToTranslation[item.key]
                ? t(keyToTranslation[item.key] as Parameters<typeof t>[0])
                : item.label}
            </span>
          </div>
        </Link>
      ))}
      <div className={styles.dc_spacer} />
    </div>
  );
}
