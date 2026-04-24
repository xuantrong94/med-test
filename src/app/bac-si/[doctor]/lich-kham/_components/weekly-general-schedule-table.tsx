import React from "react";
import { ProcessedWeeklyDay } from "../_api/types";
import styles from "./general-schedule-table/general-schedule-table.module.scss";
import { WeeklyDesktopScheduleTable } from "./weekly-desktop-schedule-table";
import { WeeklyMobileScheduleTable } from "./weekly-mobile-schedule-table";

type Props = {
  days: ProcessedWeeklyDay[];
  partnerId: string;
  doctorId: string;
};

/**
 * Re-structured GeneralScheduleTable that uses pre-fetched unified weekly data.
 * One API call at the container level feeds this entire table.
 */
export function WeeklyGeneralScheduleTable({
  days,
  partnerId,
  doctorId,
}: Props) {
  if (!days || days.length === 0) {
    return null;
  }

  const commonProps = {
    days,
    partnerId,
    doctorId,
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bảng giá dịch vụ và lịch khám</h3>

      {/* 
          Maintains original strategy of rendering both but controlling via CSS 
          to avoid hydration flashes, but logic is now shared and minimal.
      */}
      <div className={styles.desktopOnly}>
        <WeeklyDesktopScheduleTable {...commonProps} />
      </div>
      <div className={styles.mobileOnly}>
        <WeeklyMobileScheduleTable {...commonProps} />
      </div>
    </div>
  );
}
