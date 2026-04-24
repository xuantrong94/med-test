import React from "react";
import { ProcessedWeeklyShift } from "../_api/types";
import styles from "./general-schedule-table/general-schedule-table.module.scss";
import { BookingButton } from "./booking-button";

type DisplayType = "shift" | "time" | "room" | "service" | "action" | "full";

type Props = {
  shifts: ProcessedWeeklyShift[];
  displayType: DisplayType;
  partnerId: string;
  doctorId: string;
  timemiliseconds: string;
};

export function WeeklyWorkScheduleCell({
  shifts,
  displayType,
  partnerId,
  doctorId,
  timemiliseconds,
}: Props) {
  if (!shifts || shifts.length === 0) return null;

  return (
    <div className={styles.cellContentWrapper}>
      {shifts.map(shift => {
        const {
          timeId,
          shiftName,
          startTime,
          endTime,
          roomName,
          service,
          status,
        } = shift;
        const timeStr = `${startTime} - ${endTime}`;
        const isOff = status === "OFF";

        // Full mode for Mobile (Card style)
        if (displayType === "full") {
          return (
            <div
              key={`${timeId}-${service.id}`}
              className={styles.mobileScheduleCard}
            >
              <div className={styles.cardHeader}>
                <span className={styles.shiftBadge}>{shiftName}</span>
                <span className={styles.timeLabel}>{timeStr}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceRow}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.servicePrice}>
                    {new Intl.NumberFormat("vi-VN").format(service.price)}đ
                  </span>
                </div>
                <div className={styles.roomRow}>Phòng: {roomName}</div>
              </div>
              <div className={styles.cardFooter}>
                <BookingButton
                  partnerId={partnerId}
                  doctorId={doctorId}
                  serviceId={service.id}
                  timeId={timeId}
                  timemiliseconds={timemiliseconds}
                  isOff={isOff}
                >
                  {isOff ? "Ngưng nhận bệnh" : "Đăng ký khám"}
                </BookingButton>
              </div>
            </div>
          );
        }

        // Columnar modes for Desktop
        return (
          <div
            key={`${timeId}-${service.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 0",
              minHeight: "56px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {displayType === "shift" && (
              <span style={{ fontWeight: 500 }}>{shiftName}</span>
            )}

            {displayType === "time" && (
              <span
                style={{ fontSize: "14px", color: "#1a1a1a", fontWeight: 500 }}
              >
                {timeStr}
              </span>
            )}

            {displayType === "room" && (
              <span style={{ fontSize: "14px", color: "#595959" }}>
                {roomName}
              </span>
            )}

            {displayType === "service" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#1a1a1a" }}>{service.name}</span>
                <span
                  style={{
                    color: "#00b5f1",
                    fontWeight: 600,
                  }}
                >
                  ({new Intl.NumberFormat("vi-VN").format(service.price)}đ)
                </span>
              </div>
            )}

            {displayType === "action" && (
              <div
                style={{ display: "flex", width: "100%", alignItems: "center" }}
              >
                <BookingButton
                  partnerId={partnerId}
                  doctorId={doctorId}
                  serviceId={service.id}
                  timeId={timeId}
                  timemiliseconds={timemiliseconds}
                  isOff={isOff}
                >
                  {isOff ? "Ngưng nhận" : "Đăng ký"}
                </BookingButton>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
