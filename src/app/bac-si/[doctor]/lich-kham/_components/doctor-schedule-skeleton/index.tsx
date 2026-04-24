import React from "react";
import styles from "./doctor-schedule-skeleton.module.scss";
import Link from "next/link";

export const DoctorScheduleFallback = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        textAlign: "center",
        margin: "40px auto",
        maxWidth: "600px",
      }}
    >
      <div style={{ fontSize: "64px", marginBottom: "24px", lineHeight: 1 }}>
        📅
      </div>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#1a1a1a",
          marginBottom: "12px",
        }}
      >
        Thông tin đang được cập nhật
      </h2>
      <p
        style={{
          fontSize: "16px",
          color: "#595959",
          marginBottom: "32px",
          lineHeight: 1.6,
        }}
      >
        Rất tiếc, thông tin lịch khám hiện không thể hiển thị ngay lúc này. Vui
        lòng quay lại sau hoặc liên hệ tổng đài để được hỗ trợ.
      </p>
      <Link
        href='/'
        style={{
          height: "44px",
          padding: "0 32px",
          fontWeight: 600,
          borderRadius: "8px",
          background: "#00b5f1",
          color: "#fff",
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        Quay về trang chủ
      </Link>
    </div>
  );
};

export const DoctorScheduleSkeleton = ({
  showBreadcrumb = true,
}: {
  showBreadcrumb?: boolean;
}) => {
  const rows = [1, 2, 3];

  return (
    <div className={styles.container}>
      {/* Breadcrumb Skeleton */}
      {showBreadcrumb && (
        <div className={styles.breadcrumbSkeleton}>
          <div className={`${styles.skeletonItem} ${styles.breadcrumbLine}`} />
        </div>
      )}

      {/* Doctor Card Skeleton */}
      <div className={styles.doctorCardSkeleton}>
        <div className={`${styles.skeletonItem} ${styles.avatar}`} />
        <div className={styles.content}>
          <div className={`${styles.skeletonItem} ${styles.lineLarge}`} />
          <div className={`${styles.skeletonItem} ${styles.lineMedium}`} />
          <div className={`${styles.skeletonItem} ${styles.lineSmall}`} />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className={styles.tableSkeleton}>
        <div className={`${styles.skeletonItem} ${styles.tableTitle}`} />

        {/* Header Simulation */}
        <div className={styles.headerRow}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className={`${styles.skeletonItem} ${styles.cell}`}
            />
          ))}
        </div>

        {/* Rows Simulation */}
        {rows.map(row => (
          <div
            key={row}
            className={styles.row}
          >
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div
                key={i}
                className={`${styles.skeletonItem} ${styles.cell}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
