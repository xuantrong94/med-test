"use client";

import React from "react";
import { SearchX } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "../specialty-detail.module.scss";

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleReset = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("city");
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.empty_container}>
      <div className={styles.empty_content}>
        <div className={styles.empty_iconWrapper}>
          <SearchX className={styles.empty_icon} />
        </div>
        <h3 className={styles.empty_title}>{message || t("noResultsFound")}</h3>
        {searchParams.get("city") && (
          <button
            onClick={handleReset}
            className={styles.empty_resetButton}
          >
            {t("resetFilter")}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
