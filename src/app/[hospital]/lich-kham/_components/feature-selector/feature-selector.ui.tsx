import { FunctionComponent, useMemo } from "react";
import Select from "antd/es/select";
import ConfigProvider from "antd/es/config-provider";
import styles from "./feature-selector.module.scss";
import { useTranslations } from "next-intl";
import { Feature } from "@/types/feature";

type FeatureOption = {
  value: string;
  label: string;
};

export type FeatureSelectorUIProps = {
  selectedValue: string;
  onChange: (_value: string) => void;
  features: Feature[];
};

export const FeatureSelectorUI: FunctionComponent<FeatureSelectorUIProps> = ({
  selectedValue,
  onChange,
  features,
}) => {
  const t = useTranslations("common");

  const featureOptions = useMemo<FeatureOption[]>(
    () => [
      { value: "", label: t("all") },
      ...features.map(feature => ({
        value: feature.id,
        label: feature.name,
      })),
    ],
    [t, features]
  );

  return (
    <div className={styles.selectorWrapper}>
      <h2 className={styles.title}>{t("examType")}</h2>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              controlHeight: 44,
              borderRadius: 12,
              colorBorder: "#e5e7eb",
              colorBgContainer: "#f9fafb",
              activeBorderColor: "#1da1f2",
              hoverBorderColor: "#1da1f2",
              paddingSM: 12,
            },
          },
          token: {
            colorText: "#1f2937",
            colorTextPlaceholder: "#6b7280",
            fontSize: 16,
            controlOutline: "rgba(29, 161, 242, 0.1)",
          },
        }}
      >
        <Select
          className={styles.picker}
          style={{ width: "100%" }}
          value={selectedValue}
          onChange={onChange}
          options={featureOptions}
          aria-label={t("selectExamType")}
          placeholder={t("selectExamType")}
        />
      </ConfigProvider>
    </div>
  );
};
