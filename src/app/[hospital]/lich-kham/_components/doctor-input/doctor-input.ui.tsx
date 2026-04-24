"use client";

import React, { FunctionComponent } from "react";
import Input from "antd/es/input";
import ConfigProvider from "antd/es/config-provider";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined";
import styles from "./doctor-input.module.scss";
import { useTranslations } from "next-intl";

type DoctorInputUIProps = {
  value: string;
  onChange: (_value: string) => void;
  onSearch: () => void;
  onClear: () => void;
  onKeyDown: (_e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isPending?: boolean;
};

export const DoctorInputUI: FunctionComponent<DoctorInputUIProps> = ({
  value,
  onChange,
  onSearch,
  onClear,
  onKeyDown,
  placeholder,
  isPending,
}) => {
  const t = useTranslations("common");
  return (
    <div className={styles.doctorInputContainer}>
      <h2 className={styles.title}>{t("doctor")}</h2>
      <div className={styles.inputWrapper}>
        <ConfigProvider
          theme={{
            components: {
              Input: {
                controlHeight: 44,
                borderRadius: 12,
                colorBorder: "#e5e7eb",
                colorBgContainer: "#f9fafb",
                activeBorderColor: "#1da1f2",
                hoverBorderColor: "#1da1f2",
                activeShadow: "0 0 0 4px rgba(29, 161, 242, 0.1)",
                paddingInline: 12,
              },
            },
            token: {
              colorText: "#1f2937",
              colorTextPlaceholder: "#6b7280",
              fontSize: 14,
            },
          }}
        >
          <Input
            placeholder={placeholder || t("searchPlaceholderDoctor")}
            aria-label={t("searchPlaceholderDoctor")}
            value={value}
            disabled={isPending}
            onChange={e => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            suffix={
              <div className={styles.suffixIcons}>
                {value && (
                  <CloseCircleOutlined
                    className={styles.clearIcon}
                    onClick={onClear}
                  />
                )}
                <div className={styles.divider} />
                <SearchOutlined
                  className={styles.searchIcon}
                  onClick={onSearch}
                />
              </div>
            }
          />
        </ConfigProvider>
      </div>
    </div>
  );
};
