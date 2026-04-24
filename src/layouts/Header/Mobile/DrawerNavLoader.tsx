"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "@/layouts/Header/Header.module.scss";

// We move the dynamic import here (Client Component) 
// to satisfy Next.js Server Component constraints.
const DrawerNavContent = dynamic(() => import("./DrawerNavContent"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: "40px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
       <span className={styles.loaderIcon}>⏳</span>
    </div>
  ),
});

export default function DrawerNavLoader() {
  return <DrawerNavContent />;
}
