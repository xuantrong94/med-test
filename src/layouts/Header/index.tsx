import React from "react";
import DesktopHeader from "./Desktop/Desktop";
import MobileHeader from "./Mobile";
import HeaderAuthInit from "./components/HeaderAuthInit";
import styles from "@/layouts/Header/Header.module.scss";

export default function Header() {
  return (
    <>
      <HeaderAuthInit />
      <div className={styles.header_desktopOnly}>
        <DesktopHeader />
      </div>
      <div className={styles.header_mobileOnly}>
        <MobileHeader />
      </div>
    </>
  );
}
