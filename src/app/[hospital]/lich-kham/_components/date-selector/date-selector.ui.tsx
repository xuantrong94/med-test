import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import ConfigProvider from "antd/es/config-provider";
import type { Dayjs } from "dayjs";

const DatePicker = dynamic(() => import("antd/es/date-picker"), {
  ssr: false,
}) as any;
import styles from "./date-selector.module.scss";
import { useTranslations } from "next-intl";

export type DateSelectorUIProps = {
  picker?: "date" | "week";
  value: Dayjs | null;
  onChange: (_date: Dayjs | null) => void;
  format?: string;
  placeholder?: string;
  weekInfo?: {
    weekNumber: number;
    year: number;
    startDate: string;
    endDate: string;
  } | null;
  showDebugInfo?: boolean;
};

export const DateSelectorUI: FunctionComponent<DateSelectorUIProps> = ({
  picker = "week",
  value,
  onChange,
  format,
  placeholder,
  weekInfo,
  showDebugInfo = false,
}) => {
  const t = useTranslations("common");
  const defaultFormat =
    picker === "week" ? `${t("weekPrefix")} ww, YYYY` : "DD/MM/YYYY";
  const defaultPlaceholder =
    picker === "week" ? t("selectExamWeek") : t("selectExamDate");

  return (
    <div className={styles.dateSelector}>
      <h2 className={styles.title}>{t("examTime")}</h2>
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              controlHeight: 44,
              borderRadius: 12,
              colorBorder: "#e5e7eb",
              colorBgContainer: "#f9fafb",
              activeBorderColor: "#1da1f2",
              hoverBorderColor: "#1da1f2",
              activeShadow: "0 0 0 4px rgba(29, 161, 242, 0.1)",
            },
          },
          token: {
            colorText: "#1f2937",
            colorTextPlaceholder: "#6b7280",
            fontSize: 14,
          },
        }}
      >
        <DatePicker
          picker={picker}
          className={`${styles.picker} picker`}
          value={value}
          onChange={onChange}
          format={format || defaultFormat}
          style={{ width: "100%" }}
          placeholder={placeholder || defaultPlaceholder}
          allowClear
        />
      </ConfigProvider>

      {showDebugInfo && weekInfo && (
        <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
          {t("weekPrefix")} {weekInfo.weekNumber}, {weekInfo.year}:{" "}
          {weekInfo.startDate} - {weekInfo.endDate}
        </div>
      )}
    </div>
  );
};
