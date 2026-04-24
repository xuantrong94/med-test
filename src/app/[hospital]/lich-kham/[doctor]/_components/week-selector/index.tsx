"use client";

import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  addDays,
  getDiffInWeeks,
  getCurrentDate,
  isValidYYYYMMDD,
} from "@/lib/utils/date";
import styles from "./week-selector.module.scss";

type Props = {
  selectedDate: string;
  rangeDisplay: string;
};

const LIMIT_WEEKS = 4;

export function WeekSelector({ selectedDate, rangeDisplay }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const today = getCurrentDate();

  // Calculate relative week from today
  const diffWeeks = getDiffInWeeks(today, selectedDate);
  const isFuture = parseInt(selectedDate) > parseInt(today);

  // We allow -1 week (current week context) up to +3 weeks (total 4 weeks)
  // Or more simply: diff must be <= 3 if future.
  const canGoNext = !isFuture || diffWeeks < LIMIT_WEEKS - 1;
  const canGoPrev = isFuture || diffWeeks > 0; // Can go back to current week if in future

  const handleWeekChange = (direction: "prev" | "next") => {
    const daysToAdd = direction === "next" ? 7 : -7;
    const newDate = addDays(selectedDate, daysToAdd);

    // Validate limit (approximate to 4 weeks/28 days)
    const newDiff = getDiffInWeeks(today, newDate);
    const isNewDateFuture = parseInt(newDate) > parseInt(today);

    if (isNewDateFuture && newDiff >= LIMIT_WEEKS) {
      console.warn("::: [WeekSelector] Limit reached");
      return;
    }

    if (!isValidYYYYMMDD(newDate)) {
      console.error("::: [WeekSelector] Invalid date generated:", newDate);
      return;
    }

    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    params.set("date", newDate);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.weekSelector}>
      <div className={styles.rangeInfo}>
        <span className={styles.label}>Lịch khám tuần:</span>
        <span className={styles.value}>{rangeDisplay}</span>
      </div>

      <div className={styles.controls}>
        <button
          className={`${styles.btn} ${!canGoPrev ? styles.disabled : ""}`}
          onClick={() => canGoPrev && handleWeekChange("prev")}
          disabled={!canGoPrev}
        >
          <span>&larr;</span> Tuần trước
        </button>
        <button
          className={`${styles.btn} ${styles.active} ${!canGoNext ? styles.disabled : ""}`}
          onClick={() => canGoNext && handleWeekChange("next")}
          disabled={!canGoNext}
        >
          Tuần sau <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
