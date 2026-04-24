import React from "react";
import { getDoctorSchedule } from "../_api/getDoctorSchedule.api";
import { BookingTreeChild } from "@/app/[hospital]/lich-kham/_types";
import { Shift, Day } from "@/types/schedule";
import Link from "next/link";

interface Props {
  doctorId: string;
  services: BookingTreeChild[]; // Changed from single serviceId to list
  subjectId: string;
  partnerId: string;
  treeId: string;
  date: string; // The specific date (DDMMYYYY)
  displayType: "time" | "room" | "service" | "action" | "full" | "shift"; // Added 'shift'
  buildBookingUrl: (serviceId: string) => string;
}

export async function WorkScheduleCell({
  doctorId,
  services,
  subjectId,
  partnerId,
  treeId,
  date,
  displayType,
  buildBookingUrl,
}: Props) {
  // 1. Fetch all services for THIS SPECIFIC DATE concurrently
  const results: {
    shift: Shift;
    serviceName: string;
    price: number;
    serviceId: string;
  }[] = [];
  let isError = false;

  try {
    const schedules = await Promise.all(
      services.map(s =>
        getDoctorSchedule({
          doctorId,
          serviceId: s.id ?? "",
          subjectId,
          treeId: treeId || "DOCTOR",
          date,
          partnerId,
        })
      )
    );

    // 2. Extract and Flatten shifts (Phases)
    schedules.forEach((scheduleObj, index) => {
      const service = services[index];
      const validDays = scheduleObj?.days || [];

      validDays.forEach((dayData: Day) => {
        const shifts = dayData.shifts || [];
        shifts.forEach((shift: Shift) => {
          results.push({
            shift,
            serviceName: service.detail?.name || "N/A",
            price: service.detail?.price || 0,
            serviceId: service.id ?? "",
          });
        });
      });
    });
  } catch (error) {
    console.error("::: ~ WorkScheduleCell error for date:", date, error);
    isError = true;
  }

  // 3. Process Result (Sorting & Merging)
  // Sort by startTime to ensure Morning (Sáng) is before Afternoon (Chiều)
  const sortedResults = [...results].sort((a, b) => {
    const startA = a.shift.startTime || "00:00";
    const startB = b.shift.startTime || "00:00";
    return startA.localeCompare(startB);
  });

  let mergedResults = sortedResults;
  if (displayType !== "action") {
    // Don't merge actions if they need specific time slots, though currently we link by serviceId
    const grouped: typeof results = [];
    sortedResults.forEach(item => {
      const prev = grouped[grouped.length - 1];
      const { shift, serviceId } = item;
      const room = shift.roomShift || shift.roomName || shift.roomId;

      if (
        prev &&
        prev.serviceId === serviceId &&
        (prev.shift.roomShift || prev.shift.roomName || prev.shift.roomId) ===
          room &&
        prev.shift.endTime === shift.startTime
      ) {
        // Merge time
        prev.shift.endTime = shift.endTime;
      } else {
        grouped.push({ ...item, shift: { ...item.shift } }); // Clone shift for deep modification
      }
    });
    mergedResults = grouped;
  }

  // 4. Render
  if (isError) {
    return <span style={{ color: "#ff4d4f", fontSize: "14px" }}>Lỗi tải</span>;
  }

  if (mergedResults.length === 0) {
    return null; // Return null so parent can hide the entire day row
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {mergedResults.map((item, i) => {
        const { shift, serviceName, price, serviceId } = item;
        const timeStr =
          shift.startTime && shift.endTime
            ? `${shift.startTime} - ${shift.endTime}`
            : shift.shiftName || "N/A";

        // Safely handle roomShift which could be string or array
        let roomStr = "Theo lịch BS";
        if (typeof shift.roomShift === "string") {
          roomStr = shift.roomShift;
        } else if (
          Array.isArray(shift.roomShift) &&
          shift.roomShift.length > 0
        ) {
          roomStr = shift.roomShift.join(", ");
        } else if (shift.roomName) {
          roomStr = shift.roomName;
        } else if (shift.roomId) {
          roomStr = shift.roomId;
        }

        if (displayType === "full") {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "16px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                border: "1px solid #f0f0f0",
                marginBottom: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#595959",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      backgroundColor: "#fafafa",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      border: "1px solid #f0f0f0",
                    }}
                  >
                    {shift.shiftName}
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#1a1a1a",
                      fontWeight: 700,
                    }}
                  >
                    {timeStr}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#595959",
                    backgroundColor: "#f5f5f5",
                    padding: "2px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {roomStr}
                </span>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    color: "#262626",
                    fontWeight: 500,
                  }}
                >
                  {serviceName}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    color: "#00b5f1",
                    fontWeight: 700,
                  }}
                >
                  {new Intl.NumberFormat("vi-VN").format(price)}đ
                </span>
              </div>

              <Link
                href={buildBookingUrl(serviceId)}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "14px",
                  color: "#fff",
                  backgroundColor: "#00b5f1",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "block",
                  boxShadow: "0 4px 12px rgba(0, 181, 241, 0.2)",
                }}
              >
                Đặt khám ngay
              </Link>
            </div>
          );
        }

        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom:
                i === mergedResults.length - 1 ? "none" : "1px dashed #e0e0e0",
              padding: "8px 0",
              minHeight: "56px",
              width: "100%",
            }}
          >
            {displayType === "shift" && (
              <span
                style={{
                  fontSize: "13px",
                  color: "#595959",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  backgroundColor: "#fafafa",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  border: "1px solid #f0f0f0",
                }}
              >
                {shift.shiftName || "N/A"}
              </span>
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
                {roomStr}
              </span>
            )}

            {displayType === "service" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ fontSize: "14px", color: "#1a1a1a" }}>
                    {serviceName}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#00b5f1",
                      fontWeight: 600,
                    }}
                  >
                    ({new Intl.NumberFormat("vi-VN").format(price)}đ)
                  </span>
                </div>
              </div>
            )}

            {displayType === "action" && (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Link
                  href={buildBookingUrl(serviceId)}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    padding: "6px 16px",
                    fontSize: "13px",
                    color: "#00b5f1",
                    border: "1px solid #00b5f1",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 600,
                    display: "inline-block",
                    backgroundColor: "transparent",
                    transition: "all 0.2s",
                  }}
                >
                  Đặt khám
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
