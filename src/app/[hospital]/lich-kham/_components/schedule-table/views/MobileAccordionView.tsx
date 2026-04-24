"use client";

import { FunctionComponent, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "../schedule-table.module.scss";
import { ScheduleRow } from "../types";
import { StackedCardAccordion } from "../stacked-card-accordion";
import { formatDate, getDayLabel } from "../utils";
import { sanitizeId, createDoctorSlug } from "../../../_helpers";

import dayjs from "dayjs";

import { ChevronRight } from "lucide-react";

const StackedCardView: FunctionComponent<{
  rows: ScheduleRow[];
  selectedDate?: string;
  standardizedDates: string[];
}> = ({ rows, selectedDate, standardizedDates }) => {
  const params = useParams();
  const hospitalId = params.hospital as string;

  const todayKey = useMemo(() => dayjs().format("MM-DD"), []);

  const targetDateKey = useMemo(() => {
    if (!selectedDate) return null;
    const parsed = dayjs(selectedDate, "YYYYMMDD");
    return parsed.isValid() ? parsed.format("MM-DD") : null;
  }, [selectedDate]);

  const dateGroups = useMemo(() => {
    const grouped = new Map<string, ScheduleRow[]>();
    for (const row of rows) {
      const list = grouped.get(row.date) ?? [];
      list.push(row);
      grouped.set(row.date, list);
    }

    return standardizedDates.map(date => ({
      date,
      dayLabel: getDayLabel(date),
      dateValue: formatDate(date),
      rows: grouped.get(date) ?? [],
      isToday: date === todayKey,
      isSelected: date === targetDateKey,
    }));
  }, [rows, standardizedDates, todayKey, targetDateKey]);

  return (
    <div className={styles.cardViewContainer}>
      {dateGroups.map(group => (
        <div
          key={group.date}
          className={`${styles.dateGroup} ${
            group.isToday ? styles.todayGroup : ""
          } ${group.isSelected ? styles.highlightedGroup : ""}`}
        >
          <div className={styles.dateGroupHeader}>
            <span className={styles.dateGroupDay}>{group.dayLabel}</span>
            <span className={styles.dateGroupDate}>{group.dateValue}</span>
          </div>

          <div className={styles.dateGroupCards}>
            {group.rows.map((row, idx) => (
              <div
                key={`${group.date}-${row.label}-${idx}`}
                className={styles.stackedCard}
              >
                <div className={styles.stackedCardHeader}>
                  <div className={styles.stackedCardInfo}>
                    <span
                      className={`${styles.labelBadge} ${
                        row.labelType === "phase"
                          ? styles.phaseBadge
                          : styles.subjectBadge
                      }`}
                    >
                      {row.label}
                    </span>
                    {/* {row.subjectId && (
                      <span className={`${styles.subjectId} ${styles.mobile}`}>
                        ID: {row.subjectId}
                      </span>
                    )} */}
                  </div>
                  <span className={styles.doctorCount}>
                    {row.doctors.length} bác sĩ
                  </span>
                </div>
                <div className={styles.stackedDoctorList}>
                  {row.doctors.map((doc, idx) => (
                    // WSSEO-1699: Remove <TableDoctorCard /> for simple layout request
                    <Link
                      key={sanitizeId(doc.id, `doctor-${idx}`)}
                      href={`/${hospitalId}/lich-kham/${doc.id}`}
                      className={styles.doctorLink}
                    >
                      <span className={styles.doctorName}>
                        {doc.role} {doc.title.toLowerCase()}
                      </span>
                      <ChevronRight
                        size={16}
                        className={styles.chevronIcon}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const MobileAccordionView: FunctionComponent<{
  rows: ScheduleRow[];
  featureId: string;
  featureName: string;
  openFeatureId?: string | null;
  onToggleFeature?: (_id: string | null) => void;
  selectedDate?: string;
  standardizedDates: string[];
}> = ({
  rows,
  featureId,
  featureName,
  openFeatureId,
  onToggleFeature,
  selectedDate,
  standardizedDates,
}) => {
  return (
    <StackedCardAccordion
      openId={openFeatureId}
      onToggle={onToggleFeature}
      items={[
        {
          id: featureId,
          featureName: (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "4px",
                  height: "1.25em",
                  borderRadius: "2px",
                  background: "linear-gradient(180deg, #00b5f1, #00e0ff)",
                }}
              />
              <span>{featureName}</span>
            </div>
          ),
          children: (
            <StackedCardView
              rows={rows}
              selectedDate={selectedDate}
              standardizedDates={standardizedDates}
            />
          ),
        },
      ]}
    />
  );
};

export default MobileAccordionView;
