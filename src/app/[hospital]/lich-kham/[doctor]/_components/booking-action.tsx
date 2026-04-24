"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { BookingButton } from "./booking-button";
import styles from "./general-schedule-table/general-schedule-table.module.scss";
import { ProcessedWeeklyShift } from "../_api/types";
import { isPastTimeSlot } from "@/lib/utils/date/basic";

type Props = {
  originalShifts: ProcessedWeeklyShift[];
  partnerId: string;
  doctorId: string;
  timemiliseconds: string;
  date: string; // YYYYMMDD or DDMMYYYY
};

export const BookingAction: React.FC<Props> = ({
  originalShifts,
  partnerId,
  doctorId,
  timemiliseconds,
  date,
}) => {
  const searchParams = useSearchParams();
  const activeTimeId = searchParams.get("timeId");

  // Find if the currently active timeId belongs to this row (set of shifts)
  const activeShift = originalShifts.find(s => s.timeId === activeTimeId);
  const isSelectedInThisRow = !!activeShift;

  // Validation: Check if all slots in this specific row are in the past
  const allSlotsInRowExpired = originalShifts.every(s =>
    isPastTimeSlot(date, s.startTime, 30)
  );

  // Determine if the action should show as 'Expired'
  // If a slot is selected, we check that specific slot.
  // If no slot is selected, we show 'Expired' only if NO valid slots remain in the row.
  const isExpired = activeShift
    ? isPastTimeSlot(date, activeShift.startTime, 30)
    : allSlotsInRowExpired;

  if (isExpired) {
    return (
      <div className={styles.bookingActionWrapper}>
        <button
          className={`${styles.bookButton} ${styles.disabled}`}
          disabled
        >
          Quá hạn đặt khám
        </button>
      </div>
    );
  }

  if (!isSelectedInThisRow) {
    return (
      <div className={styles.bookingActionWrapper}>
        <button
          className={`${styles.bookButton} ${styles.disabled}`}
          disabled
        >
          Chọn giờ khám
        </button>
      </div>
    );
  }

  // Active state: The timeId in the URL belongs to this row
  return (
    <div className={styles.bookingActionWrapper}>
      <BookingButton
        partnerId={partnerId}
        doctorId={doctorId}
        serviceId={activeShift.service.id}
        timeId={activeShift.timeId}
        timemiliseconds={timemiliseconds}
        treeId={activeShift.treeNodeId}
        feature={activeShift.treeId}
        subjectId={activeShift.subjectId}
        isOff={activeShift.status === "OFF"}
      >
        Đăng ký
      </BookingButton>
    </div>
  );
};
