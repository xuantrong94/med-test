"use client";

import { FunctionComponent, useCallback, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Button from "antd/es/button";
import ConfigProvider from "antd/es/config-provider";
import ReloadOutlined from "@ant-design/icons/lib/icons/ReloadOutlined";
import { getCurrentDate } from "@/lib/utils/date";
import styles from "./clear-filters.module.scss";

import { useTranslations } from "next-intl";

export const ClearFilters: FunctionComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const t = useTranslations("common");
  const [isPending, startTransition] = useTransition();

  const handleClear = useCallback(() => {
    const params = new URLSearchParams();

    // Giữ lại partnerId nếu có trong URL hiện tại
    const partnerId = searchParams.get("partnerId");
    if (partnerId) {
      params.set("partnerId", partnerId);
    }

    const type = searchParams.get("type");
    if (type) {
      params.set("type", type);
    }

    // Luôn đặt date về currentDate
    const currentDate = getCurrentDate();
    params.set("date", currentDate);

    // Điều hướng về URL mới (giữ nguyên pathname, chỉ thay searchParams)
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, [pathname, router, searchParams]);

  return (
    <div className={styles.clearFiltersContainer}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorText: "#ffffff",
              fontWeight: 600,
              fontSize: 14,
              paddingInline: 8,
              controlHeight: 44,
            },
          },
        }}
      >
        <Button
          type='text'
          icon={<ReloadOutlined className={styles.icon} />}
          onClick={handleClear}
          loading={isPending}
          className={styles.clearButton}
          aria-label={t("resetFilter")}
        >
          {t("resetFilter")}
        </Button>
      </ConfigProvider>
    </div>
  );
};
