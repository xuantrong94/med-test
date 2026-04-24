import React from "react";
import { ProcessedWeeklyDay } from "../_api/types";
import styles from "./general-schedule-table/general-schedule-table.module.scss";
import { WeeklyDesktopScheduleTable } from "./weekly-desktop-schedule-table";
import { WeeklyMobileScheduleTable } from "./weekly-mobile-schedule-table";
import { WeekSelector } from "./week-selector";

type Props = {
  days: ProcessedWeeklyDay[];
  partnerId: string;
  doctorId: string;
  selectedDate: string;
  feature?: string;
  subjectId: string;
};

/**
 * Re-structured GeneralScheduleTable that uses pre-fetched unified weekly data.
 * One API call at the container level feeds this entire table.
 */
export function WeeklyGeneralScheduleTable({
  days,
  partnerId,
  doctorId,
  selectedDate,
  feature,
  subjectId,
}: Props) {
  if (!days || days.length === 0) {
    return null;
  }

  const commonProps = {
    days,
    partnerId,
    doctorId,
    feature,
    subjectId,
  };

  const rangeDisplay =
    days.length > 0
      ? `${days[0].displayDate} - ${days[days.length - 1].displayDate}`
      : "";

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bảng giá dịch vụ và lịch khám</h3>

      <WeekSelector
        selectedDate={selectedDate}
        rangeDisplay={rangeDisplay}
      />

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
