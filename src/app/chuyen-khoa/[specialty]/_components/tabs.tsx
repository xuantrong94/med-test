"use client";

import React from "react";
import styles from "../specialty-detail.module.scss";

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (_id: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onChange,
  className = "",
}) => {
  const activeIndex = items.findIndex(item => item.id === activeId);

  return (
    <div
      className={`${styles.tab_tabsContainer} ${className}`}
      role='tablist'
      aria-label='Specialty sections'
      style={
        {
          "--active-index": activeIndex,
          "--tabs-count": items.length,
        } as React.CSSProperties
      }
    >
      <div className={styles.tab_activeIndicator} />
      {items.map(item => (
        <button
          key={item.id}
          id={`tab-${item.id}`}
          className={`${styles.tab_tabButton} ${activeId === item.id ? styles.tab_isActive : ""}`}
          onClick={() => onChange(item.id)}
          type='button'
          role='tab'
          aria-selected={activeId === item.id}
          aria-controls={`panel-${item.id}`}
          tabIndex={activeId === item.id ? 0 : -1}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
