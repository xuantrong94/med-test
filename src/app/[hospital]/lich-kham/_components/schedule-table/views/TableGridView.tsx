import { FunctionComponent, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { DoctorSchedule } from "@/types/doctor";

import styles from "../schedule-table.module.scss";
import { ScheduleRow } from "../types";
import { formatDate, getDayLabel } from "../utils";
import { sanitizeId, createDoctorSlug } from "../../../_helpers";

import dayjs from "dayjs";

export const TableGridView: FunctionComponent<{
  rows: ScheduleRow[];
  dates: string[];
  featureName: string;
  selectedDate?: string;
}> = ({ rows, dates, featureName, selectedDate }) => {
  const params = useParams();
  const hospitalId = params.hospital as string;

  const todayKey = useMemo(() => dayjs().format("MM-DD"), []);

  const targetDateKey = useMemo(() => {
    if (!selectedDate) return null;
    const parsed = dayjs(selectedDate, "YYYYMMDD");
    return parsed.isValid() ? parsed.format("MM-DD") : null;
  }, [selectedDate]);

  const { tableData, labelOrder } = useMemo(() => {
    const map = new Map<
      string,
      { dateMap: Map<string, DoctorSchedule[]>; subjectId?: string | null }
    >();
    const order: string[] = [];

    for (const row of rows) {
      if (!map.has(row.label)) {
        map.set(row.label, { dateMap: new Map(), subjectId: row.subjectId });
        order.push(row.label);
      }
      const { dateMap } = map.get(row.label)!;
      const existing = dateMap.get(row.date) ?? [];
      dateMap.set(row.date, [...existing, ...row.doctors]);
    }
    return { tableData: map, labelOrder: order };
  }, [rows]);

  const dateHeaders = useMemo(() => {
    return dates.map(d => ({
      key: d,
      dayLabel: getDayLabel(d),
      dateValue: formatDate(d),
      isToday: d === todayKey,
      isSelected: d === targetDateKey,
    }));
  }, [dates, todayKey, targetDateKey]);

  return (
    <>
      <h2 className={styles.featureTitle}>{featureName}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th className={styles.labelHeader}>Phân loại</th>
              {dateHeaders.map(d => (
                <th
                  key={d.key}
                  className={`${styles.dateHeader} ${
                    d.isToday ? styles.today : ""
                  } ${d.isSelected ? styles.selected : ""}`}
                >
                  <span className={styles.dayLabel}>{d.dayLabel}</span>
                  <span className={styles.dateValue}>{d.dateValue}</span>
                  {d.isToday && (
                    <span className={styles.todayIndicator}>Hôm nay</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labelOrder.map(label => {
              const { dateMap, subjectId } = tableData.get(label)!;
              return (
                <tr key={label}>
                  <td className={styles.labelCell}>
                    <div className={styles.labelCellInner}>
                      <span className={styles.subjectName}>{label}</span>
                      {/* {subjectId && (
                        <span className={styles.subjectId}>
                          ID: {subjectId}
                        </span>
                      )} */}
                    </div>
                  </td>
                  {dates.map(d => {
                    const doctors = dateMap.get(d);
                    const isToday = d === todayKey;
                    const isSelected = d === targetDateKey;
                    return (
                      <td
                        key={d}
                        className={`${styles.doctorCell} ${
                          isToday ? styles.today : ""
                        } ${isSelected ? styles.selected : ""}`}
                      >
                        {doctors && doctors.length > 0 ? (
                          <div className={styles.doctorList}>
                            {doctors.map((doc, idx) => {
                              return (
                                <Link
                                  key={sanitizeId(doc.id, `doctor-${idx}`)}
                                  href={`/${hospitalId}/lich-kham/${doc.id}`}
                                  className={styles.doctorLink}
                                >
                                  {doc.role} {doc.title.toLowerCase()}
                                </Link>
                              );
                            })}
                          </div>
                        ) : (
                          <span className={styles.emptyPlaceholder}>—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableGridView;
