"use client";

import React from "react";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import { useDrawer } from "./DrawerProvider";
import styles from "@/layouts/Header/Header.module.scss";

interface Props {
  label: string;
}

export function DrawerCloseButton({ label }: Props) {
  const { close } = useDrawer();

  return (
    <button
      className={styles.dt_toggleButton}
      aria-label={label}
      onClick={close}
    >
      <CloseOutlined />
    </button>
  );
}
