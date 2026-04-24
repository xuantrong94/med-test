import { FunctionComponent } from "react";
import styles from "./schedule-manager.module.scss";
// import { buildTableData } from "../../_helpers";
import { DateCard } from "../calendar-tab/date-card";
import Link from "next/link";
import { ScheduleData } from "../../_types/schedule.types";

interface ScheduleManagerProps {
  schedules: ScheduleData[];
  date: string;
}

export const ScheduleManager: FunctionComponent<ScheduleManagerProps> = ({
  schedules,
  date,
}) => {
  // const { columns, rows } = buildTableData(schedules, date);
  return (
    <div className={styles.scheduleManager}>
      {/* <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.subjectHeader}>
              <div>Chuyên khoa/Thứ</div>
            </th>
            {columns.map((column, index) => {
              return (
                <th key={index}>
                  <DateCard {...column} />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className={styles.subjectCell}>
                <p className={styles.subject}>{row.subject.name}</p>
              </td>
              {row.days.map((day, idx) => (
                <td key={idx}>
                  <div className={styles.dayContent}>
                    {day.doctors.length > 0 ? (
                      day.doctors.map(doctor => (
                        <Link
                          href={`/bac-si/${doctor.id}`}
                          key={doctor.id}
                          className={styles.doctorLink}
                        >
                          {doctor.title}
                        </Link>
                      ))
                    ) : (
                      <span className={styles.emptyState}>Đang cập nhật</span>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};
