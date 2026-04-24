import { ProcessedWeeklyDay } from "../_api/types";
import { WeeklyWorkScheduleCell } from "./weekly-work-schedule-cell";
import styles from "./general-schedule-table/general-schedule-table.module.scss";

type Props = {
  days: ProcessedWeeklyDay[];
  partnerId: string;
  doctorId: string;
  feature?: string;
  subjectId: string;
};

export function WeeklyMobileScheduleTable({
  days,
  partnerId,
  doctorId,
  feature,
  subjectId,
}: Props) {
  return (
    <div className={styles.mobileOnly}>
      {days.map(day => {
        if (!day.shifts || day.shifts.length === 0) return null;

        return (
          <div
            key={day.date}
            className={styles.mobileDayGroup}
          >
            <div className={styles.mobileDayHeader}>
              <span className={styles.dayLabel}>{day.dayOfWeek}</span>
              <span className={styles.dateLabel}>{day.displayDate}</span>
            </div>
            <div className={styles.mobileCardsWrapper}>
              <WeeklyWorkScheduleCell
                shifts={day.shifts}
                displayType='full'
                partnerId={partnerId}
                doctorId={doctorId}
                timemiliseconds={day.timemiliseconds}
                date={day.date}
                feature={feature}
                subjectId={subjectId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
