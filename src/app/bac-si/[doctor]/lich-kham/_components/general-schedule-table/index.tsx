import React, { Suspense } from "react";
import { BookingTreeChild } from "@/app/[hospital]/lich-kham/_types";
import { DoctorCta } from "@/types/doctor";
import { getWeekDays } from "@/lib/utils/date/getWeekDays";
import styles from "./general-schedule-table.module.scss";
import { DoctorScheduleFallback } from "../doctor-schedule-skeleton";
import DesktopScheduleTable from "./Desktop";
import MobileScheduleTable from "./Mobile";

type Props = {
  services: BookingTreeChild[];
  bookingCta: DoctorCta;
};

export function GeneralScheduleTable({ services, bookingCta }: Props) {
  if (!services || services.length === 0) {
    return null;
  }

  const today = new Date();
  const todayStr = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;
  const weekDays = getWeekDays(todayStr, {
    includeFullDate: true,
    shortDayName: true,
  });

  const buildBookingUrl = (cta: DoctorCta, serviceId?: string) => {
    const params = new URLSearchParams();
    params.set("feature", `booking.${cta.treeId}`);
    params.set("partnerId", cta.partnerId);
    if (cta.doctorId) params.set("doctorId", cta.doctorId);
    if (cta.subjectId) params.set("subjectId", cta.subjectId);
    if (serviceId || cta.serviceId)
      params.set("serviceId", serviceId || cta.serviceId || "");
    params.set("step", "chon-ho-so");
    return `https://medpro.vn/chon-lich-kham?${params.toString()}`;
  };

  const commonProps = {
    services,
    bookingCta,
    weekDays,
    buildBookingUrl,
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bảng giá dịch vụ và lịch khám</h3>

      {/* 
          We render both but control visibility via CSS to preserve Server Component 
          capabilities (async/await) in Desktop/Mobile subcomponents 
      */}
      <div className={styles.desktopOnly}>
        <DesktopScheduleTable {...commonProps} />
      </div>
      <div className={styles.mobileOnly}>
        <MobileScheduleTable {...commonProps} />
      </div>
    </div>
  );
}
