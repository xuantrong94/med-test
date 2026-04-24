"use client";

import React from "react";
import Tabs from "./tabs";
import styles from "../specialty-detail.module.scss";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface TabbedInterfaceProps {
  children: React.ReactNode;
  activeTab: string;
}

const TabbedInterface: React.FC<TabbedInterfaceProps> = ({
  children,
  activeTab,
}) => {
  const t = useTranslations("specialty.detail");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const tabItems = [
    { id: "hospitals", label: t("hospitalList") },
    { id: "subjects", label: t("subjects") },
    { id: "related", label: t("relatedPosts") },
  ];

  const handleTabChange = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", id);
    // When changing tabs, we usually want to reset pagination
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.tabbedInterface}>
      <div className={styles.tabsWrapper}>
        <Tabs
          items={tabItems}
          activeId={activeTab}
          onChange={handleTabChange}
          className={styles.pageTabs}
        />
      </div>

      <div className={styles.tabContent}>
        <div
          role='tabpanel'
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default TabbedInterface;
