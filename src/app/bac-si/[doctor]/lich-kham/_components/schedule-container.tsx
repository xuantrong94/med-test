import React from "react";
import { getDoctorSchedule } from "../_api/getDoctorSchedule.api";
import { MainContent } from "./main-content";
import { DoctorCta, DoctorDetailSchedule } from "@/types/doctor";
import { getDDMMYYYY } from "@/lib/utils/date";
import { Service } from "@/types/service";
import { searchBookingTreeDynamic } from "@/app/[hospital]/lich-kham/_api/searchBookingTreeDynamic";
import { Partner } from "@/types/partner";
import searchMock from "../_api/mock-data/search_booking_tree.json";
import {
  getDoctorWeeklySchedule,
  transformWeeklyResponseToDays,
} from "../_api/getWeeklySchedule.api";

// Define it here or import if exported from api file
const USE_MOCK = true;
const USE_WEEKLY_API_V2 = true; // TOGGLE FOR NEW 1-API METHOD

type Props = {
  doctorId: string;
  services?: Service[];
  subjectId: string;
  date?: string;
  partnerId: string;
  doctorDetailSchedule: DoctorDetailSchedule;
  cta: DoctorCta;
  popupContent?: string;
  partnerInfo?: Partner;
  backUrl?: string;
};

export async function ScheduleContainer({
  doctorId,
  subjectId,
  date,
  partnerId,
  doctorDetailSchedule,
  cta,
  popupContent,
  partnerInfo,
  backUrl,
}: Props) {
  const currentDate = getDDMMYYYY();

  // 1. Fetch Weekly Schedule (NEW OPTIMIZED METHOD)
  let weeklyDays = null;
  if (USE_WEEKLY_API_V2) {
    try {
      const resp = await getDoctorWeeklySchedule(
        doctorId,
        partnerId,
        subjectId,
        "", // fromDate (managed by mock for now)
        "" // toDate
      );
      // Transform Service-oriented API to Day-oriented UI model
      weeklyDays = transformWeeklyResponseToDays(resp);
    } catch (err) {
      console.error("::: ~ Error fetching weekly data:", err);
    }
  }

  // 2. Original Single Day API (Legacy - kept for stability)
  let schedule = null;
  try {
    schedule = await getDoctorSchedule({
      doctorId,
      serviceId: "",
      subjectId,
      treeId: "DOCTOR",
      date: date || currentDate,
      partnerId,
    });
  } catch (error) {
    console.error("::: ~ ScheduleContainer error fetching schedule:", error);
  }

  let search = null;
  try {
    if (USE_MOCK) {
      search = searchMock as any;
      console.log("::: ScheduleContainer using MOCK for searchBookingTree");
    }

    if (!search) {
      search = await searchBookingTreeDynamic(partnerId, "DOCTOR", doctorId);
    }
  } catch (error) {
    console.error(
      "::: ~ ScheduleContainer error fetching searchBookingTree:",
      error
    );
  }

  const fetchedPopupContent = search?.bookingTree?.popupContent || popupContent;
  const generalScheduleServices = search?.bookingTree?.children || [];

  return (
    <MainContent
      doctor={doctorDetailSchedule}
      schedule={schedule as unknown as any}
      popupContent={fetchedPopupContent}
      bookingCta={cta}
      generalScheduleServices={generalScheduleServices as any}
      partnerInfo={partnerInfo}
      weeklyDays={weeklyDays as any}
      backUrl={backUrl}
    />
  );
}
