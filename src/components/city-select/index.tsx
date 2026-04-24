"use client";

import React, { useState, useEffect, useTransition } from "react";
import Select from "antd/es/select";
import ConfigProvider from "antd/es/config-provider";
import { CITIES, DISTRICTS_MAP } from "@/shared/constants/cities";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import styles from "./city-select.module.scss";
import normalize from "@/lib/utils/normalize";

/**
 * CitySelect Component
 * Shared component to filter by city across the application.
 * Updates the 'city' search parameter in the URL.
 */
export default function CitySelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const currentCitySlug = searchParams.get("city") || "";
  const currentDistrictSlug = searchParams.get("district") || "";

  // Find current city object to get its ID for district lookup
  const currentCity = CITIES.find(c => c.slug === currentCitySlug);
  const districtOptions = currentCity
    ? DISTRICTS_MAP[currentCity.id] || []
    : [];

  const handleCityChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("city", value);
    } else {
      params.delete("city");
    }

    // Always reset district and page when city changes
    params.delete("district");
    params.delete("page");

    const newPath = `${pathname}?${params.toString()}`;
    startTransition(() => {
      router.push(newPath, { scroll: false });
    });
  };

  const handleDistrictChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("district", value);
    } else {
      params.delete("district");
    }

    params.delete("page");

    const newPath = `${pathname}?${params.toString()}`;
    startTransition(() => {
      router.push(newPath, { scroll: false });
    });
  };

  if (!isMounted) {
    return (
      <div className={styles.citySelectContainer}>
        <div className={styles.selectPlaceholder}>Tất cả tỉnh/thành phố</div>
        <div
          className={styles.selectPlaceholder}
          style={{ marginLeft: 8 }}
        >
          Tất cả quận/huyện
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.citySelectContainer}
      style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
    >
      <ConfigProvider
        theme={{
          components: {
            Select: {
              controlHeight: 36,
              borderRadius: 8,
              colorBorder: "#e5e7eb",
              colorTextPlaceholder: "#9ca3af",
              optionSelectedBg: "#f3f3f5",
              optionActiveBg: "#f3f3f5",
              paddingSM: 16,
              fontSize: 14,
              colorText: "#343a40",
            },
          },
          token: {
            controlOutline: "rgba(2, 132, 199, 0.1)",
          },
        }}
      >
        <Select
          showSearch={{
            filterOption: (input, option) =>
              normalize(option?.label ?? "").includes(normalize(input)),
          }}
          placeholder='Tất cả tỉnh/thành phố'
          aria-label='Chọn tỉnh/thành phố'
          value={currentCitySlug || undefined}
          onChange={handleCityChange}
          className={styles.select}
          allowClear={true}
          loading={isPending}
          suffixIcon={
            <ChevronDown
              size={14}
              className={styles.chevronIcon}
            />
          }
          options={CITIES.map(city => ({
            label: city.name,
            value: city.slug,
          }))}
        />

        <Select
          showSearch={{
            filterOption: (input, option) =>
              normalize(option?.label ?? "").includes(normalize(input)),
          }}
          placeholder='Tất cả quận/huyện'
          aria-label='Chọn quận/huyện'
          value={currentDistrictSlug || undefined}
          onChange={handleDistrictChange}
          className={styles.select}
          allowClear={true}
          disabled={!currentCitySlug}
          loading={isPending}
          suffixIcon={
            <ChevronDown
              size={14}
              className={styles.chevronIcon}
            />
          }
          options={districtOptions.map(district => ({
            label: district.name,
            value: district.slug,
          }))}
        />
      </ConfigProvider>
    </div>
  );
}
