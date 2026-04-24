import React from "react";
import { ProcessedWeeklyShift } from "../_api/types";
import styles from "./general-schedule-table/general-schedule-table.module.scss";
import { TimeSlotPicker } from "./time-slot-picker";
import { BookingAction } from "./booking-action";
import { normalizeRoomName } from "@/lib/utils/room";

type DisplayType = "shift" | "time" | "room" | "service" | "action" | "full";

interface MergedShift {
  timeId: string;
  shiftNames: string[]; // Aggregated unique session names
  timeRange: string;
  roomName: string;
  roomId: string;
  status: "AVAILABLE" | "FULL" | "OFF";
  maxSlot: number;
  availableSlot: number;
  services: { id: string; name: string; price: number }[];
  treeId: string;
  subjectId: string;
  originalShifts: ProcessedWeeklyShift[];
  displayShifts: ProcessedWeeklyShift[]; // Deduplicated by timeId for display
}

function mergeConsecutiveShifts(shifts: ProcessedWeeklyShift[]): MergedShift[] {
  if (!shifts || shifts.length === 0) return [];

  // 1. Pre-normalize room names
  const normalizedShifts = shifts.map(s => ({
    ...s,
    normalizedRoomName: normalizeRoomName(s.roomName),
  }));

    // 2. Group STRICTLY by room + service
    // This ensures each service gets its own row and button as requested.
    const groups: Record<string, MergedShift> = {};
  
    normalizedShifts.forEach(shift => {
      const key = `${shift.normalizedRoomName}-${shift.service.id}`;

    if (!groups[key]) {
      groups[key] = {
        timeId: shift.timeId,
        shiftNames: [shift.shiftName],
        timeRange: `${shift.startTime} - ${shift.endTime}`,
        roomName: shift.normalizedRoomName,
        roomId: shift.roomId,
        status: shift.status,
        maxSlot: shift.maxSlot,
        availableSlot: shift.availableSlot,
        services: [{ ...shift.service }],
        treeId: shift.treeId,
        subjectId: shift.subjectId,
        originalShifts: [{ ...shift }],
        displayShifts: [{ ...shift }],
      };
    } else {
      const g = groups[key];

      // Aggregate Shift Name
      if (!g.shiftNames.includes(shift.shiftName)) {
        g.shiftNames.push(shift.shiftName);
      }

      // Aggregate Service
      if (!g.services.find(s => s.id === shift.service.id)) {
        g.services.push({ ...shift.service });
      }

      // Aggregate Original Shifts
      g.originalShifts.push({ ...shift });

      // Deduplicate Display Shifts by START TIME (to avoid duplicate chips)
      if (!g.displayShifts.find(s => s.startTime === shift.startTime)) {
        g.displayShifts.push({ ...shift });
      }

      // Update status and slots
      if (shift.status === "AVAILABLE" && g.status !== "AVAILABLE") {
        g.status = "AVAILABLE";
      }
      g.availableSlot = Math.min(g.availableSlot, shift.availableSlot);
      g.maxSlot = Math.max(g.maxSlot, shift.maxSlot);
    }
  });

  // Sort groups by time (using the first shift's start time)
  return Object.values(groups)
    .map(g => ({
      ...g,
      displayShifts: [...g.displayShifts].sort((a, b) =>
        a.startTime.localeCompare(b.startTime)
      ),
    }))
    .sort((a, b) =>
      a.displayShifts[0].startTime.localeCompare(b.displayShifts[0].startTime)
    );
}

type Props = {
  shifts: ProcessedWeeklyShift[];
  displayType: DisplayType;
  partnerId: string;
  doctorId: string;
  timemiliseconds: string;
  date: string; // YYYYMMDD
  feature?: string;
  subjectId: string;
};

export function WeeklyWorkScheduleCell({
  shifts,
  displayType,
  partnerId,
  doctorId,
  timemiliseconds,
  date,
  feature,
  subjectId,
}: Props) {
  if (!shifts || shifts.length === 0) return null;

  const mergedShifts = mergeConsecutiveShifts(shifts);
  const dateProp = date || "";

  // Analysis for Smart Merging (Desktop Only)
  const isRoomUnified = new Set(mergedShifts.map((s) => s.roomName)).size === 1;
  const isShiftUnified =
    new Set(mergedShifts.map((s) => s.shiftNames.sort().join(","))).size === 1;

  return (
    <div className={styles.cellContentWrapper}>
      {mergedShifts.map((shift, idx) => {
        const key = `${shift.subjectId}-${shift.roomName}-${idx}`;

        if (displayType === "full") {
          return (
            <div
              key={key}
              className={styles.mobileScheduleCard}
            >
              <div className={styles.cardHeader}>
                <span className={styles.shiftBadge}>
                  {shift.shiftNames.join(", ")}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceRow}>
                  <div className={styles.serviceList}>
                    {shift.services.map((svc) => (
                      <span key={svc.id}>
                        {svc.name} (
                        {new Intl.NumberFormat("vi-VN").format(svc.price)}
                        đ)
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.roomRow}>{shift.roomName}</div>
              </div>
              <div className={styles.cardFooter}>
                <TimeSlotPicker
                  shifts={shift.displayShifts}
                  date={dateProp}
                />
                <BookingAction
                  originalShifts={shift.originalShifts}
                  partnerId={partnerId}
                  doctorId={doctorId}
                  timemiliseconds={timemiliseconds}
                  date={dateProp}
                />
              </div>
            </div>
          );
        }

        // Smart Merging for Room type
        if (displayType === "room" && isRoomUnified) {
          if (idx > 0) return null; // Only render once
          return (
            <div
              key="unified-room"
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                padding: "12px 0", // Added padding for better height balance
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  color: "#595959",
                }}
              >
                {shift.roomName}
              </span>
            </div>
          );
        }

        // Smart Merging for Shift type
        if (displayType === "shift" && isShiftUnified) {
          if (idx > 0) return null; // Only render once
          return (
            <div
              key="unified-shift"
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                padding: "12px 0",
              }}
            >
              <span style={{ fontWeight: 500 }}>
                {shift.shiftNames.join(", ")}
              </span>
            </div>
          );
        }

        return (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "56px",
              width: "100%",
              justifyContent:
                displayType === "time" ? "flex-start" : "center",
              flex: 1,
              padding: displayType === "time" ? "0 12px" : "0",
            }}
          >
            {displayType === "shift" && (
              <span style={{ fontWeight: 500, textAlign: "center" }}>
                {shift.shiftNames.join(", ")}
              </span>
            )}

            {displayType === "time" && (
              <TimeSlotPicker
                shifts={shift.displayShifts}
                date={dateProp}
              />
            )}

            {displayType === "room" && (
              <span
                style={{
                  fontSize: "14px",
                  color: "#595959",
                  textAlign: "center",
                }}
              >
                {shift.roomName}
              </span>
            )}

            {displayType === "service" && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  justifyContent: "center",
                  padding: "0 12px",
                  textAlign: "center",
                }}
              >
                {shift.services.map((svc) => (
                  <span
                    key={svc.id}
                    style={{ fontSize: "14px" }}
                  >
                    <span style={{ color: "#1a1a1a", fontWeight: 500 }}>
                      {svc.name}
                    </span>
                    <span style={{ color: "#00b5f1", fontWeight: 600 }}>
                      {" "}
                      ({new Intl.NumberFormat("vi-VN").format(svc.price)}
                      đ)
                    </span>
                  </span>
                ))}
              </div>
            )}

            {displayType === "action" && (
              <BookingAction
                originalShifts={shift.originalShifts}
                partnerId={partnerId}
                doctorId={doctorId}
                timemiliseconds={timemiliseconds}
                date={dateProp}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
