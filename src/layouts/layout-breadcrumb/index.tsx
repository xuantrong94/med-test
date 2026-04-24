import styles from "./layout-breadcrumb.module.scss";
import React from "react";

export function BreadcrumbSkeleton() {
  return (
    <div className={styles.layoutBreadcrumb}>
      <nav className={styles.breadcrumbWrapper}>
        <div className='container'>
          <div className={styles.skeletonBreadcrumbList}>
            <div
              className={styles.skeletonItem}
              style={{ width: 80, height: 20 }}
            />
            <span className={styles.separator}>›</span>
            <div
              className={styles.skeletonItem}
              style={{ width: 120, height: 20 }}
            />
            <span className={styles.separator}>›</span>
            <div
              className={styles.skeletonItem}
              style={{ width: 100, height: 20 }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function LayoutBreadcrumb({
  children,
  items,
  bg,
}: {
  children: React.ReactNode;
  items: {
    title: React.ReactNode;
  }[];
  bg?: string;
}) {
  return (
    <div
      className={styles.layoutBreadcrumb}
      style={{ backgroundColor: bg }}
    >
      <nav
        className={styles.breadcrumbWrapper}
        aria-label='Breadcrumb'
      >
        <div className='container'>
          <ol className={styles.breadcrumbList}>
            {items.map((item, index) => (
              <li
                key={index}
                className={styles.breadcrumbItem}
              >
                {item.title}
                {index < items.length - 1 && (
                  <span className={styles.separator}>{"›"}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
      {children}
    </div>
  );
}
