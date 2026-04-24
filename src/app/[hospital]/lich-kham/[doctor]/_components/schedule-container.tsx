import React from "react";
import { getDoctorSchedule } from "../_api/getDoctorSchedule.api";
import { MainContent } from "./main-content";
import { DoctorCta, DoctorDetailSchedule } from "@/types/doctor";
import { getCurrentDate } from "@/lib/utils/date";
import { getWeekDays } from "@/lib/utils/date/getWeekDays";
import { Service } from "@/types/service";
import { searchBookingTreeDynamic } from "@/app/[hospital]/lich-kham/_api/searchBookingTreeDynamic";
import { Partner } from "@/types/partner";
import searchMock from "../_api/mock-data/search_booking_tree.json";
import {
  getDoctorWeeklySchedule,
  transformWeeklyResponseToDays,
} from "../_api/getWeeklySchedule.api";
import { ProcessedWeeklyDay } from "../_api/types";
import { pruneWeeklyDays } from "@/app/[hospital]/lich-kham/_helpers/pruning";

// Define it here or import if exported from api file
const USE_MOCK = false;
const USE_WEEKLY_API_V2 = true; // TOGGLE FOR NEW 1-API METHOD

type Props = {
  doctorId: string;
  services?: Service[];
  subjectId: string;
  feature?: string;
  date?: string;
  partnerId: string;
  doctorDetailSchedule: DoctorDetailSchedule;
  cta: DoctorCta;
  popupContent?: string;
  partnerInfo?: any;
  backUrl?: string;
  caller?: string;
};

export async function ScheduleContainer({
  doctorId,
  subjectId,
  feature,
  date,
  partnerId,
  doctorDetailSchedule,
  cta,
  popupContent,
  partnerInfo,
  backUrl,
  caller,
}: Props) {
  const currentDate = getCurrentDate();
  const weekDays = getWeekDays(date || currentDate, { includeYear: true });
  const normalizedDate = `${weekDays[0].year}${weekDays[0].month}${weekDays[0].date}`;

  const logPrefix = caller ? `${caller}:` : "";

  // 1. Fetch Weekly Schedule (ALL SUBJECTS IN PARALLEL)
  let weeklyDays: ProcessedWeeklyDay[] | null = null;
  if (USE_WEEKLY_API_V2) {
    try {
      const subjects = doctorDetailSchedule.subjects || [];
      const responses = await Promise.all(
        subjects.map(s =>
          getDoctorWeeklySchedule(doctorId, partnerId, s.id, normalizedDate, {
            caller: `${logPrefix}getDoctorWeeklySchedule`,
          })
        )
      );

      const allSubjectsDays = responses.map((resp, idx) =>
        transformWeeklyResponseToDays(
          resp,
          normalizedDate,
          subjects[idx]?.id || ""
        )
      );

      // Merge multiple Day arrays into one unified Day array
      const mergedMap: Record<string, ProcessedWeeklyDay> = {};

      allSubjectsDays.forEach(subjectDays => {
        subjectDays.forEach(day => {
          if (!mergedMap[day.date]) {
            mergedMap[day.date] = { ...day, shifts: [...day.shifts] };
          } else {
            // Append shifts from other subjects for the same date
            mergedMap[day.date].shifts.push(...day.shifts);
          }
        });
      });

      // Sort and finalize
      weeklyDays = Object.values(mergedMap).sort((a, b) => {
        // Simple string comparison for YYYYMMDD normalization if needed,
        // but transformWeeklyResponseToDays already returns sorted days.
        return a.date.localeCompare(b.date);
      });
    } catch (err) {
      console.error("::: ~ Error fetching unified weekly data:", err);
    }
  }

  // 2. Original Single Day API (Legacy - kept for stability)

  let search = null;
  try {
    if (USE_MOCK) {
      search = searchMock as any;
      console.log("::: ScheduleContainer using MOCK for searchBookingTree");
    }

    if (!search) {
      search = await searchBookingTreeDynamic(partnerId, "DOCTOR", doctorId, {
        caller: `${logPrefix}searchBookingTreeDynamic`,
      });
    }
  } catch (error) {
    console.error(
      "::: ~ ScheduleContainer error fetching searchBookingTree:",
      error
    );
  }

  const fetchedPopupContent = search?.bookingTree?.popupContent || popupContent;
  const generalScheduleServices = search?.bookingTree?.children || [];

  const prunedWeeklyDays = pruneWeeklyDays(weeklyDays || []);

  return (
    <MainContent
      doctor={doctorDetailSchedule}
      subjectId={subjectId}
      feature={feature}
      popupContent={fetchedPopupContent}
      bookingCta={cta}
      generalScheduleServices={generalScheduleServices as any}
      partnerInfo={partnerInfo}
      weeklyDays={prunedWeeklyDays as any}
      selectedDate={date || currentDate}
      backUrl={backUrl}
    />
  );
}
