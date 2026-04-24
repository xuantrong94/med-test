"use client";

import dynamic from "next/dynamic";

// Dynamic import for Ant Design Select component
const DynamicSelectComponent = dynamic(() => import("./SelectComponent"), {
  loading: () => (
    <div
      style={{
        width: "120px",
        height: "32px",
        backgroundColor: "#f5f5f5",
        border: "1px solid #d9d9d9",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "11px",
        fontSize: "14px",
        color: "#bfbfbf",
      }}
    >
      Loading...
    </div>
  ),
  ssr: false,
});

interface CustomSelectProps {
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  defaultValue?: string;
  handleChange: (value: string) => void;
}

export default function CustomSelect(props: CustomSelectProps) {
  return <DynamicSelectComponent {...props} />;
}
