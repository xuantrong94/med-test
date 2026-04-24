"use client";

import dynamic from "next/dynamic";
import { getSelectOptions } from "../content";
import { useTransition } from "react";
import { setUserLocale } from "@/services/locale";
import { useLocale } from "next-intl";

// Dynamic import for Ant Design Select and icons
const DynamicFlagSelectComponent = dynamic(
  () => import("./FlagSelectComponent"),
  {
    loading: () => (
      <div
        style={{
          width: "72px",
          height: "32px",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "16px",
            backgroundColor: "#f0f0f0",
            borderRadius: "2px",
          }}
        />
      </div>
    ),
    ssr: false,
  }
);

export default function FlagSelect() {
  const options = getSelectOptions();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const onChange = (value: string) => {
    startTransition(() => {
      setUserLocale(value);
    });
  };

  return (
    <div>
      <DynamicFlagSelectComponent
        defaultValue={locale}
        disabled={isPending}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}
