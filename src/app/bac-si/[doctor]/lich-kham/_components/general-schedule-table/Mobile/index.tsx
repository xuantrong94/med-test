import React, { Suspense } from "react";
import { BookingTreeChild } from "@/app/[hospital]/lich-kham/_types";
import { DoctorCta } from "@/types/doctor";
import { WorkScheduleCell } from "../../work-schedule-cell";
import styles from "../general-schedule-table.module.scss";

type Props = {
  services: BookingTreeChild[];
  bookingCta: DoctorCta;
  weekDays: any[];
  buildBookingUrl: (cta: DoctorCta, serviceId?: string) => string;
};

export default function MobileScheduleTable({
  services,
  bookingCta,
  weekDays,
  buildBookingUrl,
}: Props) {
  return (
    <div className={styles.mobileOnly}>
      {weekDays.map(day => {
        const apiDate = day.fullDate!.replace(/-/g, "");

        return (
          <Suspense
            key={apiDate}
            fallback={<MobileRowSkeleton />}
          >
            <div className={styles.mobileDayGroup}>
              <div className={styles.mobileDayHeader}>
                <span className={styles.dayLabel}>{day.dateOfWeek}</span>
                <span className={styles.dateLabel}>{day.fullDate}</span>
              </div>
              <div className={styles.mobileCardsWrapper}>
                <WorkScheduleCell
                  doctorId={bookingCta.doctorId || ""}
                  services={services}
                  subjectId={bookingCta.subjectId || ""}
                  partnerId={bookingCta.partnerId}
                  treeId={bookingCta.treeId || "DOCTOR"}
                  date={apiDate}
                  displayType='full'
                  buildBookingUrl={(sId: string) =>
                    buildBookingUrl(bookingCta, sId)
                  }
                />
              </div>
            </div>
          </Suspense>
        );
      })}
    </div>
  );
}
function MobileRowSkeleton() {
  return (
    <div className={styles.mobileDayGroup}>
      <div className={styles.mobileDayHeader}>
        <div
          style={{
            height: "20px",
            width: "80px",
            background: "#f0f0f0",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            height: "16px",
            width: "100px",
            background: "#f5f5f5",
            borderRadius: "4px",
          }}
        />
      </div>
      <div
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "12px",
          height: "140px",
          border: "1px solid #f0f0f0",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            height: "20px",
            width: "40%",
            background: "#f0f0f0",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            height: "20px",
            width: "80%",
            background: "#f5f5f5",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            height: "40px",
            width: "100%",
            background: "#f0f0f0",
            borderRadius: "8px",
            marginTop: "auto",
          }}
        />
      </div>
    </div>
  );
}
