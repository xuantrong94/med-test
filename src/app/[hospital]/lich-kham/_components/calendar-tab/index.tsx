"use client";
import React, { FunctionComponent } from "react";
import styles from "./calendar-tab.module.scss";
import { DateCard } from "@/app/[hospital]/lich-kham/_components/calendar-tab/date-card";
import { useSearchParams } from "next/navigation";
import { getCurrentDate } from "@/lib/utils/date";
import { getWeekDays } from "@/lib/utils/date/getWeekDays";

export const CalendarTab: FunctionComponent = () => {
  const searchParams = useSearchParams();
  const date: string = searchParams.get("date") ?? getCurrentDate();
  const weekDays = getWeekDays(date, {
    markToday: true,
    markInput: true,
  });

  return (
    <div className={styles.wrapper}>
      {weekDays.map(item => (
        <React.Fragment key={item.date}>
          <DateCard
            dateOfWeek={item.dateOfWeek}
            date={item.date}
            month={item.month}
            isToday={item.isToday}
            isInput={item.isInput}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
