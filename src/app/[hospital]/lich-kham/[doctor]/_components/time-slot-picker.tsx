"use client";

import React, { useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Spin from "antd/es/spin";
import { ProcessedWeeklyShift } from "../_api/types";
import { isPastTimeSlot } from "@/lib/utils/date/basic";
import styles from "./general-schedule-table/general-schedule-table.module.scss";

type Props = {
  shifts: ProcessedWeeklyShift[];
  date: string; // DDMMYYYY
};

export const TimeSlotPicker: React.FC<Props> = ({ shifts, date }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const activeTimeId = searchParams.get("timeId");
  const [isPending, startTransition] = useTransition();

  const handleTimeSelect = (
    timeId: string,
    status: string,
    startTime: string
  ) => {
    // Disable selection 30 minutes before slot starts
    if (status !== "AVAILABLE" || isPastTimeSlot(date, startTime, 30)) return;

    if (timeId === activeTimeId) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("timeId", timeId);

    // Update URL without scrolling to top
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <Spin spinning={isPending}>
      <div className={styles.timeSlotPicker}>
        {shifts.map(shift => {
          const isPast = isPastTimeSlot(date, shift.startTime, 30);
          const isFull = shift.status === "FULL";
          const isOff = shift.status === "OFF";
          const isDisabled = isPast || isFull || isOff;
          const isActive = activeTimeId === shift.timeId;

          return (
            <div
              key={shift.timeId}
              className={`${styles.timeChip} ${isActive ? styles.active : ""} ${
                isDisabled ? styles.disabled : ""
              }`}
              onClick={() =>
                handleTimeSelect(shift.timeId, shift.status, shift.startTime)
              }
              title={
                isPast
                  ? "Giờ khám đã qua"
                  : isFull
                    ? "Đã hết chỗ"
                    : isOff
                      ? "Ngưng nhận"
                      : ""
              }
            >
              {shift.startTime}
            </div>
          );
        })}
      </div>
    </Spin>
  );
};
