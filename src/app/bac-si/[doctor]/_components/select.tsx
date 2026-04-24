import CaretDownOutlined from "@ant-design/icons/lib/icons/CaretDownOutlined";
import ConfigProvider from "antd/es/config-provider";
import Select from "antd/es/select";

export default function CustomSelect({
  options,
  handleChange,
  defaultValue = "",
}: {
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  defaultValue?: string;
  handleChange: (value: string) => void;
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            /* Các token dành riêng cho Select */
            colorPrimary: "#1890ff", // Màu khi focus
            colorBorder: "#d9d9d9", // Màu border mặc định
            borderRadius: 99, // Độ bo góc
            controlHeight: 40, // Chiều cao của thanh chọn
            optionSelectedBg: "#ebf9fd", // Màu nền của option khi được chọn
            selectorBg: "#f5f5f5",
            optionHeight: 40,
            optionPadding: "8px 16px",
          },
        },
      }}
    >
      <Select
        style={{
          width: 240,
          minWidth: 120,
          height: 48,
          border: "none",
          background: "#ebf9fd",
          fontWeight: 700,
          fontSize: "16px",
          color: "#1da1f2",
          paddingLeft: "16px",
        }}
        suffixIcon={
          <CaretDownOutlined
            style={{
              fontSize: 16,
              color: "#1da1f2",
            }}
          />
        }
        defaultValue={defaultValue}
        onChange={handleChange}
        options={options}
        showSearch={{
          filterOption: (input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
        }}
      />
    </ConfigProvider>
  );
}
