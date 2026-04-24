import Select from "antd/es/select";
import CaretDownOutlined from "@ant-design/icons/lib/icons/CaretDownOutlined";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { ConfigProvider } from "antd";

interface FlagOptionData {
  value: string;
  label: React.ReactElement;
  flag: StaticImageData | React.ElementType;
  country: string;
}

interface FlagSelectComponentProps {
  options: FlagOptionData[];
  onChange: (_value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
}

export default function FlagSelectComponent({
  options,
  onChange,
  defaultValue = "vi",
  disabled = false,
}: FlagSelectComponentProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorPrimary: "#1da1f2",
            colorPrimaryHover: "#1da1f2",
            borderRadius: 0,
            colorBorder: "transparent",
            controlHeight: 38,
            optionSelectedBg: "#dbeafe",
            optionActiveBg: "#ffffff",
            colorText: "#1e3a8a",
            colorTextPlaceholder: "#1e3a8a",
          },
        },
      }}
    >
      <Select
        value={defaultValue}
        style={{ width: 72 }}
        options={options}
        onChange={onChange}
        labelInValue={false}
        variant='borderless'
        placement='bottomRight'
        labelRender={(props: { value: string | number; label: React.ReactNode }) => {
          const option = options.find(opt => opt.value === props.value);
          if (!option) return null;
          const Flag = option.flag;
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "38px",
                width: "100%",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {typeof Flag === "function" ? (
                <Flag style={{ height: "38px", width: "auto" }} />
              ) : (
                <Image
                  src={Flag as StaticImageData}
                  alt={option.country}
                  width={38}
                  height={38}
                  style={{ height: "38px", width: "auto" }}
                />
              )}
            </div>
          );
        }}
        styles={{
          popup: {
            root: {
              backgroundColor: "#f0f9ff",
              padding: "6px",
              borderRadius: "12px",
              minWidth: "160px",
            },
          },
        }}
        aria-label='Select language'
        suffixIcon={<CaretDownOutlined style={{ color: "#000" }} />}
        disabled={disabled}
      />
    </ConfigProvider>
  );
}
