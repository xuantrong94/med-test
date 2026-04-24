import React from "react";
import { ProcessedWeeklyDay } from "../_api/types";
import { WeeklyWorkScheduleCell } from "./weekly-work-schedule-cell";
import styles from "./general-schedule-table/general-schedule-table.module.scss";

type Props = {
  days: ProcessedWeeklyDay[];
  partnerId: string;
  doctorId: string;
};

/**
 * Optimized Desktop layout for Weekly Schedule.
 * Distributes shifts across a grid row for each day.
 */
export function WeeklyDesktopScheduleTable({
  days,
  partnerId,
  doctorId,
}: Props) {
  return (
    <div className={styles.desktopGrid}>
      <div className={styles.gridHeader}>
        <div className={styles.headerCell}>Thứ</div>
        <div className={styles.headerCell}>Ca</div>
        <div className={styles.headerCell}>Giờ khám</div>
        <div className={styles.headerCell}>Phòng</div>
        <div className={styles.headerCell}>Dịch vụ & Giá</div>
        <div className={styles.headerCell}>Thao tác</div>
      </div>

      {days.map(day => {
        if (!day.shifts || day.shifts.length === 0) return null;

        return (
          <div
            key={day.date}
            className={styles.gridRow}
          >
            <div
              className={`${styles.cell} ${styles.dayOfWeek}`}
              data-label='Thứ'
            >
              {day.dayOfWeek}
              <div
                style={{
                  fontSize: "12px",
                  color: "#8c8c8c",
                  fontWeight: "normal",
                  marginTop: "4px",
                }}
              >
                {day.displayDate}
              </div>
            </div>

            <div
              className={styles.cell}
              data-label='Ca'
            >
              <WeeklyWorkScheduleCell
                shifts={day.shifts}
                displayType='shift'
                partnerId={partnerId}
                doctorId={doctorId}
                timemiliseconds={day.timemiliseconds}
              />
            </div>

            <div
              className={styles.cell}
              data-label='Giờ khám'
            >
              <WeeklyWorkScheduleCell
                shifts={day.shifts}
                displayType='time'
                partnerId={partnerId}
                doctorId={doctorId}
                timemiliseconds={day.timemiliseconds}
              />
            </div>

            <div
              className={styles.cell}
              data-label='Phòng'
            >
              <WeeklyWorkScheduleCell
                shifts={day.shifts}
                displayType='room'
                partnerId={partnerId}
                doctorId={doctorId}
                timemiliseconds={day.timemiliseconds}
              />
            </div>

            <div
              className={styles.cell}
              data-label='Dịch vụ & Giá'
            >
              <WeeklyWorkScheduleCell
                shifts={day.shifts}
                displayType='service'
                partnerId={partnerId}
                doctorId={doctorId}
                timemiliseconds={day.timemiliseconds}
              />
            </div>

            <div
              className={styles.cell}
              data-label='Thao tác'
            >
              <WeeklyWorkScheduleCell
                shifts={day.shifts}
                displayType='action'
                partnerId={partnerId}
                doctorId={doctorId}
                timemiliseconds={day.timemiliseconds}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
