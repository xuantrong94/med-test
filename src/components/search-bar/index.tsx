"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./search-bar.module.scss";

// Static placeholder giữ chỗ khi SSR / chunk loading → tránh layout shift
const SearchBarPlaceholder = () => (
  <div className={styles.placeholder}>
    <span className={styles.placeholderIcon}>🔍</span>
    <span className={styles.placeholderText}>Tìm kiếm...</span>
  </div>
);

// Dynamic imports for Ant Design components
const Input = dynamic(() => import("antd/es/input"), {
  ssr: false,
  loading: () => <SearchBarPlaceholder />,
});
const SearchOutlined = dynamic(
  () => import("@ant-design/icons/lib/icons/SearchOutlined"),
  { ssr: false, loading: () => <span /> }
);

interface SearchbarProps {
  readonly placeholder?: string;
  readonly onSearchChange: (value: string) => void; // Thêm prop này
}

import { useTranslations } from "next-intl";

export default function Searchbar({
  placeholder,
  onSearchChange,
}: SearchbarProps) {
  const [value, setValue] = useState("");
  const t = useTranslations("common");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(value);
    }, 300); // Debounce 300ms để tránh filter liên tục khi gõ

    return () => clearTimeout(timer);
  }, [value, onSearchChange]);

  return (
    <div className={styles.searchbar}>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder || t("searchPlaceholder")}
        size='large'
        prefix={<SearchOutlined style={{ fontSize: 24, color: "#d9d9d9" }} />}
        allowClear
        style={{ height: 50 }}
      />
    </div>
  );
}
