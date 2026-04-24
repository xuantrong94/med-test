import Select from "antd/es/select";
import styles from "./doctor-selector.module.scss";
import { Doctor } from "@/types/doctor";
import normalize from "@/lib/utils/normalize";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

export type DoctorSelectorUIProps = {
  doctors: Doctor[];
  selectedDoctor: string;
  onDoctorChange: (doctor: string) => void;
  placeholder?: string;
  showDebugInfo?: boolean;
};

export const DoctorSelectorUI = ({
  doctors,
  selectedDoctor,
  onDoctorChange,
  placeholder,
  showDebugInfo,
}: DoctorSelectorUIProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const t = useTranslations("common");

  const options = useMemo(() => {
    return [
      {
        label: t("all"),
        value: "",
      },
      ...doctors.map(doctor => ({
        label: doctor.title,
        value: doctor.id,
      })),
    ];
  }, [doctors, t]);

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
    <div className={styles.doctorFilter}>
      <h2 className={styles.title}>{t("doctor")}</h2>
      <Select
        allowClear
        showSearch={{
          onSearch: handleSearch,
          filterOption: false,
        }}
        style={{ width: "100%" }}
        placeholder={placeholder}
        value={selectedDoctor}
        onChange={onDoctorChange}
        options={filteredOptions}
        maxTagCount='responsive'
      />

      {showDebugInfo &&
        selectedDoctor.length > 0 &&
        selectedDoctor[0] !== "all" && (
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
            {t("selectedDoctors", { count: selectedDoctor.length })}
          </div>
        )}
    </div>
  );
};
