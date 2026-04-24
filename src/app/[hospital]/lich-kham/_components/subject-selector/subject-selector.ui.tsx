import { FunctionComponent, useMemo, useState } from "react";
import Select from "antd/es/select";
import ConfigProvider from "antd/es/config-provider";
import styles from "./subject-selector.module.scss";
import { Subject } from "@/types/subject";
import normalize from "@/lib/utils/normalize";
import { useTranslations } from "next-intl";

export type SubjectSelectorUIProps = {
  subjects: { id: string; name: string; imageUrl?: string | null }[];
  selectedValue: string;
  onChange: (_value: string) => void;
  placeholder?: string;
  showDebugInfo?: boolean;
  isPending?: boolean;
};

export const SubjectSelectorUI: FunctionComponent<SubjectSelectorUIProps> = ({
  subjects,
  selectedValue,
  onChange,
  placeholder,
  showDebugInfo,
  isPending,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const t = useTranslations("common");

  const options = useMemo(() => {
    return [
      {
        label: t("all"),
        value: "",
      },
      ...subjects.map(subject => ({
        label: subject.name,
        value: subject.id,
      })),
    ];
  }, [subjects, t]);

  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options;
    return options.filter(option =>
      normalize(option.label).includes(normalize(searchTerm))
    );
  }, [options, searchTerm]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className={styles.subjectSelector}>
      <h2 className={styles.title}>{t("specialty")}</h2>
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
            fontSize: 14,
            controlOutline: "rgba(29, 161, 242, 0.1)",
          },
        }}
      >
        <Select
          allowClear
          loading={isPending}
          showSearch={{
            onSearch: handleSearch,
            filterOption: false,
          }}
          className={`${styles.picker} picker`}
          style={{ width: "100%" }}
          placeholder={placeholder || t("selectSpecialty")}
          value={selectedValue}
          onChange={onChange}
          options={filteredOptions}
          aria-label={t("selectSpecialty")}
        />
      </ConfigProvider>

      {showDebugInfo &&
        selectedValue &&
        selectedValue !== "" &&
        selectedValue !== "all" && (
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
            {t("selectedCount", { count: 1 })}
          </div>
        )}
    </div>
  );
};
