"use client";
import { FunctionComponent } from "react";
import { useDateSelector } from "@/components/date-selector/useDateSelector";
import styles from "./calendar-picker.module.scss";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/vi";
import dynamic from "next/dynamic";
import Button from "antd/es/button";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import React from "react";
import type { CalendarProps } from "antd/es/calendar";
import { Dayjs } from "dayjs";

const Calendar = dynamic(() => import("antd/es/calendar"), {
  ssr: false,
}) as React.FC<CalendarProps<Dayjs>>;

dayjs.extend(isoWeek);
dayjs.extend(weekday);
dayjs.locale("vi");

export const CalendarPicker: FunctionComponent = () => {
  // Use shared logic with DDMMYYYY format
  const { selectedDate, handleDateChange } = useDateSelector(
    "date",
    "DDMMYYYY"
  );

  const onSelect = (date: dayjs.Dayjs) => {
    handleDateChange(date);
  };

  return (
    <div className={styles.calendarPicker}>
      <Calendar
        fullscreen={false}
        value={selectedDate || dayjs()}
        onSelect={onSelect}
        headerRender={({ value, onChange }) => {
          const current = value.clone();
          const month = value.format("MMMM");

          return (
            <div className={styles.header}>
              <Button
                type='text'
                size='small'
                icon={<LeftOutlined />}
                onClick={() => {
                  const now = current.add(-1, "month");
                  onChange(now);
                }}
              />
              <span className={styles.monthTitle}>
                {month}, {value.year()}
              </span>

              <Button
                type='text'
                size='small'
                icon={<RightOutlined />}
                onClick={() => {
                  const now = current.month(current.month() + 1);
                  onChange(now);
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};
