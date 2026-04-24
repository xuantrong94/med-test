"use client";

import { FunctionComponent } from "react";
import styles from "./schedule-table.module.scss";

const SkeletonDoc: FunctionComponent = () => (
  <div className={`${styles.doctorCard} ${styles.skeletonCard}`}>
    <div className={`${styles.doctorAvatar} ${styles.skeleton}`} />
    <div
      className={styles.doctorInfo}
      style={{ width: "100%" }}
    >
      <div
        className={`${styles.skeleton} ${styles.skeletonText}`}
        style={{ width: "80%", height: "14px", marginBottom: "4px" }}
      />
      <div
        className={`${styles.skeleton} ${styles.skeletonText}`}
        style={{ width: "50%", height: "12px" }}
      />
    </div>
  </div>
);

export const TableSkeleton: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div
        className={`${styles.skeleton} ${styles.skeletonText}`}
        style={{ width: "200px", height: "24px", marginBottom: "20px" }}
      />
      <div className={styles.tableWrapper}>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th className={styles.labelHeader}>
                <div
                  className={`${styles.skeleton} ${styles.skeletonText}`}
                  style={{ width: "60%" }}
                />
              </th>
              {[1, 2, 3, 4, 5].map(i => (
                <th
                  key={i}
                  className={styles.dateHeader}
                >
                  <div
                    className={`${styles.skeleton} ${styles.skeletonText}`}
                    style={{
                      width: "40%",
                      height: "10px",
                      margin: "0 auto 4px",
                    }}
                  />
                  <div
                    className={`${styles.skeleton} ${styles.skeletonText}`}
                    style={{ width: "70%", height: "14px", margin: "0 auto" }}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map(row => (
              <tr key={row}>
                <td className={styles.labelCell}>
                  <div
                    className={`${styles.skeleton} ${styles.skeletonText}`}
                    style={{
                      width: "80px",
                      height: "24px",
                      borderRadius: "6px",
                    }}
                  />
                </td>
                {[1, 2, 3, 4, 5].map(col => (
                  <td
                    key={col}
                    className={styles.doctorCell}
                  >
                    <div className={styles.doctorList}>
                      <SkeletonDoc />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const MobileSkeleton: FunctionComponent = () => {
  return (
    <div className={styles.cardViewContainer}>
      {[1, 2].map(group => (
        <div
          key={group}
          className={styles.dateGroup}
        >
          <div className={styles.dateGroupHeader}>
            <div
              className={`${styles.skeleton} ${styles.skeletonText}`}
              style={{ width: "40px", height: "12px" }}
            />
            <div
              className={`${styles.skeleton} ${styles.skeletonText}`}
              style={{ width: "80px", height: "14px" }}
            />
          </div>
          <div className={styles.dateGroupCards}>
            {[1, 2].map(card => (
              <div
                key={card}
                className={styles.stackedCard}
              >
                <div
                  className={styles.stackedCardHeader}
                  style={{ marginBottom: "12px" }}
                >
                  <div
                    className={`${styles.skeleton} ${styles.skeletonText}`}
                    style={{
                      width: "60px",
                      height: "20px",
                      borderRadius: "6px",
                    }}
                  />
                  <div
                    className={`${styles.skeleton} ${styles.skeletonText}`}
                    style={{ width: "40px", height: "12px" }}
                  />
                </div>
                <div className={styles.stackedDoctorList}>
                  <SkeletonDoc />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ScheduleSkeleton: FunctionComponent = () => {
  return (
    <>
      <div className={styles.desktopOnly}>
        <TableSkeleton />
      </div>
      <div className={styles.mobileOnly}>
        <MobileSkeleton />
      </div>
    </>
  );
};
