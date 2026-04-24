"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/layouts/Header/Header.module.scss";
import Link from "next/link";
import { HEADER_MENU } from "@/shared/constants/urls";
import Image from "next/image";
import IconHeaderLogo from "@/assets/icons/header/header_logo.svg";
import IconHotline from "@/assets/icons/header/hotline.svg";
import { SOCIALS } from "../content";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

// Dynamic import for Ant Design components
import MobileOutlined from "@ant-design/icons/lib/icons/MobileOutlined";
import { BLUR_DATA_URL } from "@/shared/constants/images";
import NavItem from "./components/NavItem";
const AuthSection = dynamic(() => import("./components/AuthSection"), {
  ssr: false,
  loading: () => (
    <div className={styles.authBox} style={{ opacity: 0.5, minWidth: 130 }}>
      <span className={styles.loaderIcon}>⏳</span>
    </div>
  ),
});
import FlagSelect from "../FlagSelect";
import { usePathname } from "next/navigation";
import { removeFirstUrlSlash } from "@/lib/utils/remove-first-url-slash";
import { HeaderSearchbar } from "../components/header-searchbar";

export const SHOW_SEARCH_URLS = ["chuyen-khoa"];

export const SHOW_SEARCH = false;

const LayoutHeaderDesktop: React.FC = () => {
  const pathname = usePathname();
  const cleanPathname = removeFirstUrlSlash(pathname);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const tCommon = useTranslations("common");
  const tNav = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // At the top, show topBar
        setIsTopBarVisible(true);
      } else if (currentScrollY > 100) {
        // Scrolled over 100px, hide topBar
        setIsTopBarVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.dk_container}>
      <div
        className={`${styles.dk_wrapper} ${!isTopBarVisible ? styles.scrolled : ""}`}
      >
        <header className={styles.dk_header}>
          <Link
            href='/'
            className={styles.dk_logo}
          >
            <Image
              src={IconHeaderLogo.src}
              alt={tNav("logoAlt")}
              width={184}
              height={55}
              fetchPriority='high'
              decoding='sync'
              loading='eager'
            />
          </Link>
          <div className={styles.dk_info}>
            <div
              className={`${styles.topBar} ${isTopBarVisible ? "" : styles.hidden}`}
            >
              <div className={styles.socials}>
                {/* <div className={styles.socialContact}>
                  <Image
                    src={IconHotline}
                    alt='hotline'
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className={styles.contactInfo}>
                    <Link
                      href='tel:19002115'
                      className={styles.phone}
                    >
                      1900 2115
                    </Link>
                  </div>
                </div> */}
                {SOCIALS.map(item => (
                  <Link
                    key={item.key}
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.socialItem}
                  >
                    <Image
                      src={item.icon}
                      alt={item.key}
                      blurDataURL={BLUR_DATA_URL}
                    />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
              <div className={styles.features}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#1da1f2'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={`${styles.bellIcon} lucide lucide-bell-icon lucide-bell`}
                >
                  <path d='M10.268 21a2 2 0 0 0 3.464 0' />
                  <path d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326' />
                </svg>
                <button className={styles.downloadApp}>
                  <MobileOutlined />
                  {tNav("installApp")}
                </button>
                <AuthSection />
                <FlagSelect />
              </div>
            </div>
            <div className={styles.bottomBar}>
              {SHOW_SEARCH_URLS.includes(cleanPathname) ? (
                <HeaderSearchbar />
              ) : (
                <div className={styles.contact}>
                  <Image
                    src={IconHotline}
                    alt='hotline'
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className={styles.contactInfo}>
                    <span className={styles.label}>
                      {tCommon("consultationLabel")}
                    </span>
                    <Link
                      href='tel:19002115'
                      className={styles.phone}
                    >
                      1900 2115
                    </Link>
                  </div>
                </div>
              )}
              <nav className={styles.dk_nav}>
                {HEADER_MENU.map(item => (
                  <NavItem
                    key={item.key}
                    item={item}
                  />
                ))}
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default LayoutHeaderDesktop;
