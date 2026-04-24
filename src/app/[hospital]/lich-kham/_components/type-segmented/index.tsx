"use client";

import { FunctionComponent, useCallback } from "react";
import dynamic from "next/dynamic";
import ConfigProvider from "antd/es/config-provider";
const Segmented = dynamic(() => import("antd/es/segmented"), {
  ssr: false,
}) as any;
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import AppstoreOutlined from "@ant-design/icons/lib/icons/AppstoreOutlined";
import styles from "./type-segmented.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TypeSegmentedProps {
  type?: "doctor" | "feature";
}

export const TypeSegmented: FunctionComponent<TypeSegmentedProps> = ({
  type = "feature",
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChangeType = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("type", value);
      } else {
        params.delete("type");
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            trackBg: "#fff",
            itemSelectedBg:
              "linear-gradient(98.96deg, #00b5f1 40.75%, #00e0ff 129.57%)",
            itemSelectedColor: "#ffffff",
            itemColor: "#9ca3af",
            itemHoverColor: "#1da1f2",
            itemHoverBg: "rgba(29, 161, 242, 0.05)",
            controlHeight: 48,
            borderRadius: 8,
            trackPadding: 6,
            fontFamily: "var(--font-roboto)",
          },
        },
      }}
    >
      <Segmented
        block
        className={styles.segmented}
        options={[
          {
            label: (
              <span>
                <UserOutlined /> Bác sĩ
              </span>
            ),
            value: "doctor",
          },
          {
            label: (
              <span>
                <AppstoreOutlined /> Chuyên khoa
              </span>
            ),
            value: "feature",
          },
        ]}
        onChange={onChangeType}
        value={type}
      />
    </ConfigProvider>
  );
};
