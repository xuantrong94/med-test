"use client";

import Link from "next/link";
import { NAV_MENU } from "../../content";
import styles from "../../Footer.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const hrefToTranslationKey: Record<string, string> = {
  "/": "home",
  "https://medpro.vn/huong-dan/cong-dong-hoi-dap-kham-chua-benh": "qnaCommunityShort",
  "/user?key=bills": "bills",
  "/user?key=notifications": "notifications",
  "/user?key=records": "records",
  "https://medpro.vn/user?key=bills": "bills",
  "https://medpro.vn/user?key=notifications": "notifications",
  "https://medpro.vn/user?key=records": "records",
};

export default function NavMenu() {
  const pathname = usePathname();
  const t = useTranslations("navigation");

  return (
    <ul className={styles.navMenu}>
      {NAV_MENU.map(item => {
        const translationKey = hrefToTranslationKey[item.href];
        const translatedText = translationKey
          ? t(translationKey as Parameters<typeof t>[0]) || item.text
          : item.text;

        return (
          <li
            key={item.href}
            className={styles.navMenuLi}
          >
            <Link
              href={item.href}
              className={styles.navMenuItem}
              prefetch={false}
            >
              {pathname === item.href ? (
                <Image
                  src={item.iconActive}
                  alt={item.text}
                  className=''
                />
              ) : (
                <Image
                  src={item.icon}
                  alt={item.text}
                  className=''
                />
              )}
              <span>{translatedText}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
