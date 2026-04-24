import { cache } from "react";
import {
  WeeklyScheduleResponse,
  ProcessedWeeklyDay,
  ProcessedWeeklyShift,
} from "./types";
import { WEEKLY_SCHEDULE_MOCK } from "./mock-data/weekly_schedule_data";

const USE_MOCK = true;

/**
 * Parse DDMMYYYY string to Date object.
 * API trả về date dạng "06042026" (DDMMYYYY), cần parse chính xác.
 */
function parseDDMMYYYY(ddmmyyyy: string): Date {
  const day = parseInt(ddmmyyyy.substring(0, 2), 10);
  const month = parseInt(ddmmyyyy.substring(2, 4), 10) - 1;
  const year = parseInt(ddmmyyyy.substring(4, 8), 10);
  return new Date(year, month, day);
}

/**
 * Convert DDMMYYYY to YYYYMMDD for stable internal sorting/comparison.
 * "06042026" -> "20260406"
 */
function ddmmyyyyToYYYYMMDD(ddmmyyyy: string): string {
  return (
    ddmmyyyy.substring(4, 8) +
    ddmmyyyy.substring(2, 4) +
    ddmmyyyy.substring(0, 2)
  );
}

/**
 * Utility to transform Service-oriented API response to Day-oriented UI structure.
 * Flattens: Service -> TreeIds -> Day -> Shift into Day[] with enriched shifts.
 *
 * Logic phẳng hóa: Duyệt qua từng Service → từng Tree → từng Day → từng Shift,
 * gom tất cả shifts vào một daysMap theo key = date (DDMMYYYY).
 */
export function transformWeeklyResponseToDays(
  response: WeeklyScheduleResponse
): ProcessedWeeklyDay[] {
  const daysMap: Record<string, ProcessedWeeklyDay> = {};

  if (!response?.services) return [];

  response.services.forEach(svc => {
    if (!svc.treeIds) return;

    svc.treeIds.forEach(tree => {
      if (!tree.days) return;

      tree.days.forEach(day => {
        // Use DDMMYYYY as key (original format from API)
        if (!daysMap[day.date]) {
          daysMap[day.date] = {
            date: day.date,
            displayDate: day.displayDate,
            dayOfWeek: day.dayOfWeek,
            timemiliseconds: day.timemiliseconds,
            shifts: [],
          };
        }

        if (day.shifts) {
          day.shifts.forEach(shift => {
            const processedShift: ProcessedWeeklyShift = {
              ...shift,
              service: {
                id: tree.id,
                name: tree.name,
                price: tree.price,
              },
              treeId: tree.treeId,
            };
            daysMap[day.date].shifts.push(processedShift);
          });
        }
      });
    });
  });

  // Sort dates: DDMMYYYY → YYYYMMDD for correct chronological order
  const sortedDays = Object.values(daysMap).sort((a, b) => {
    return ddmmyyyyToYYYYMMDD(a.date).localeCompare(ddmmyyyyToYYYYMMDD(b.date));
  });

  return sortedDays;
}

/**
 * Fetch unified weekly schedule for a doctor.
 * Reduced from 30+ calls to ONE single call.
 */
export const getDoctorWeeklySchedule = cache(
  async (
    doctorId: string,
    partnerId: string,
    subjectId: string,
    _fromDate: string,
    _toDate: string
  ): Promise<WeeklyScheduleResponse> => {
    if (USE_MOCK) {
      console.log(
        "::: [Weekly API] Fetching mock schedule (Service-oriented) for Doctor:",
        doctorId
      );
      // Simulate slow API behavior for testing Suspense
      await new Promise(resolve => setTimeout(resolve, 800));
      return WEEKLY_SCHEDULE_MOCK;
    }

    // Real API Implementation will go here later
    return {
      doctorId,
      partnerId,
      subjectId,
      services: [],
    };
  }
);
