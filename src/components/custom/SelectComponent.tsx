import Select from "antd/es/select";

interface SelectComponentProps {
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  defaultValue?: string;
  handleChange: (value: string) => void;
}

export default function SelectComponent({
  options,
  handleChange,
  defaultValue = "",
}: SelectComponentProps) {
  return (
    <Select
      style={{
        width: "120px",
      }}
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
      showSearch={{
        filterOption: (input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
      }}
    />
  );
}
