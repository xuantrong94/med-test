"use client";

import React from "react";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";
import { useDrawer } from "./DrawerProvider";
import styles from "@/layouts/Header/Header.module.scss";

interface DrawerTriggerProps {
  label: string;
}

export function DrawerTrigger({ label }: DrawerTriggerProps) {
  const { isOpen, toggle } = useDrawer();

  return (
    <button
      className={styles.mb_toggleButton}
      aria-label={label}
      aria-expanded={isOpen}
      onClick={toggle}
    >
      <MenuOutlined />
    </button>
  );
}
