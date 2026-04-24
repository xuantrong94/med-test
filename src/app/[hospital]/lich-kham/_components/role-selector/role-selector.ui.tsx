import { FunctionComponent, useMemo } from "react";
import Select from "antd/es/select";
import ConfigProvider from "antd/es/config-provider";
import styles from "./role-selector.module.scss";
import { useTranslations } from "next-intl";

type RoleOption = {
  value: string;
  label: string;
};

export type RoleSelectorUIProps = {
  selectedValue: string;
  onChange: (_value: string) => void;
  options?: { id: string; type: string; name: string }[];
  isPending?: boolean;
};

export const RoleSelectorUI: FunctionComponent<RoleSelectorUIProps> = ({
  selectedValue,
  onChange,
  options = [],
  isPending,
}) => {
  const t = useTranslations("common");

  const roleOptions = useMemo<RoleOption[]>(
    () => [
      { value: "", label: t("all") },
      ...options.map(opt => ({ value: opt.name, label: opt.name })),
    ],
    [t, options]
  );

  return (
    <div className={styles.selectorWrapper}>
      <h2 className={styles.title}>{t("academicDegree")}</h2>
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
          className={styles.picker}
          style={{ width: "100%" }}
          value={selectedValue}
          onChange={onChange}
          options={roleOptions}
          loading={isPending}
          aria-label={t("selectAcademicDegree")}
          placeholder={t("selectAcademicDegree")}
        />
      </ConfigProvider>
    </div>
  );
};
