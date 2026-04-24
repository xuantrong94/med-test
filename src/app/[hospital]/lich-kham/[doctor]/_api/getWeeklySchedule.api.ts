import { cache } from "react";
import {
  WeeklyScheduleResponse,
  ProcessedWeeklyDay,
  ProcessedWeeklyShift,
  WeeklyShift,
  WeeklyService,
  WeeklyDay,
  WeeklyTree,
} from "./types";
import { api } from "@/lib/fetch/client";
import { WEEKLY_SCHEDULE_MOCK } from "./mock-data/weekly_schedule_data";

const USE_MOCK = false;

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
 * Convert Date object back to DDMMYYYY string.
 */
function dateToDDMMYYYY(d: Date): string {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}${month}${year}`;
}

/**
 * Utility to transform Service-oriented API response to Day-oriented UI structure.
 * Flattens: Service -> TreeIds -> Day -> Shift into Day[] with enriched shifts.
 *
 * Logic phẳng hóa: Duyệt qua từng Service → từng Tree → từng Day → từng Shift,
 * gom tất cả shifts vào một daysMap theo key = date (DDMMYYYY).
 */
import { getWeekDays } from "@/lib/utils/date/getWeekDays";

export function transformWeeklyResponseToDays(
  response: any, // Allow any to handle both direct and enveloped responses
  baseDate?: string, // Monday of the week (YYYYMMDD)
  subjectId?: string
): ProcessedWeeklyDay[] {
  const actualResponse = (response?.data || response) as WeeklyScheduleResponse;
  const daysMap: Record<string, ProcessedWeeklyDay> = {};

  // If baseDate is provided, pre-fill all 7 days of the week using standard utility
  if (baseDate) {
    const weekDays = getWeekDays(baseDate, { includeYear: true });
    weekDays.forEach(wd => {
      // Build DDMMYYYY key for consistency with API format
      const ddmmyyyy = `${wd.date}${wd.month}${wd.year}`;
      daysMap[ddmmyyyy] = {
        date: ddmmyyyy,
        displayDate: `${wd.date}/${wd.month}/${wd.year}`,
        dayOfWeek: wd.dateOfWeek,
        timemiliseconds: "",
        shifts: [],
      };
    });
  }

  if (!actualResponse?.services) return Object.values(daysMap);

  actualResponse.services.forEach(svc => {
    if (!svc.treeIds) return;

    svc.treeIds.forEach(tree => {
      if (!tree.days) return;

      tree.days.forEach(day => {
        if (!daysMap[day.date]) {
          daysMap[day.date] = {
            date: day.date,
            displayDate: day.displayDate,
            dayOfWeek: day.dayOfWeek,
            timemiliseconds: day.timemiliseconds,
            shifts: [],
          };
        }

        // Fill timemiliseconds if it was empty (from pre-filled week)
        if (!daysMap[day.date].timemiliseconds && day.timemiliseconds) {
          daysMap[day.date].timemiliseconds = String(day.timemiliseconds);
        }

        if (day.shifts) {
          day.shifts.forEach(shift => {
            const processedShift: ProcessedWeeklyShift = {
              ...shift,
              service: {
                id: svc.id,
                name: tree.name,
                price: tree.price,
              },
              treeId: tree.treeId,
              treeNodeId: tree.id,
              subjectId: subjectId || "",
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
    date: string,
    options: { caller?: string } = {}
  ): Promise<WeeklyScheduleResponse> => {
    const caller = options.caller || "getDoctorWeeklySchedule";
    if (USE_MOCK) {
      console.log(
        `::: [Weekly API] Fetching mock schedule for Doctor: ${doctorId}, Date: ${date}`
      );

      // --- MOCK TRANSFORMATION LOGIC (to simulate 4 distinct weeks) ---
      // MOCK_BASE_DATE matches the first date in our mock data (DDMMYYYY)
      const MOCK_BASE_DATE = "06042026";

      const d1 = parseDDMMYYYY(MOCK_BASE_DATE);
      // `date` param comes as YYYYMMDD from schedule-container
      const d2 = new Date(
        parseInt(date.substring(0, 4)),
        parseInt(date.substring(4, 6)) - 1,
        parseInt(date.substring(6, 8))
      );

      const diffDays = Math.round(
        (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)
      );

      const weekIndex = Math.floor(diffDays / 7);

      /**
       * Transform dates in mock data by applying the day offset.
       * Input/output in DDMMYYYY format.
       */
      const transformDate = (originalDDMMYYYY: string) => {
        const dateObj = parseDDMMYYYY(originalDDMMYYYY);
        dateObj.setDate(dateObj.getDate() + diffDays);

        const resDDMMYYYY = dateToDDMMYYYY(dateObj);
        const resDay = String(dateObj.getDate()).padStart(2, "0");
        const resMonth = String(dateObj.getMonth() + 1).padStart(2, "0");
        const resYear = dateObj.getFullYear();
        const resDisplay = `${resDay}/${resMonth}/${resYear}`;

        return { resDDMMYYYY, resDisplay };
      };

      const transformedMock: WeeklyScheduleResponse = {
        ...WEEKLY_SCHEDULE_MOCK,
        services: WEEKLY_SCHEDULE_MOCK.services
          .filter((svc: WeeklyService) => {
            // Week 2 (index 2): Only show "Khám chuyên gia"
            if (weekIndex === 2) return svc.name === "Khám chuyên gia";
            return true;
          })
          .map(
            (svc: WeeklyService): WeeklyService => ({
              ...svc,
              treeIds: svc.treeIds.map(
                (tree: WeeklyTree): WeeklyTree => ({
                  ...tree,
                  days: tree.days.map((day: WeeklyDay): WeeklyDay => {
                    const { resDDMMYYYY, resDisplay } = transformDate(day.date);

                    // Week 1 (index 1): Mark Monday and Tuesday shifts as FULL
                    const modifiedShifts = day.shifts.map(
                      (shift: WeeklyShift): WeeklyShift => {
                        if (
                          weekIndex === 1 &&
                          (day.dayOfWeek === "Thứ 2" ||
                            day.dayOfWeek === "Thứ 3")
                        ) {
                          return {
                            ...shift,
                            status: "FULL" as const,
                            availableSlot: 0,
                          };
                        }

                        // Week 3 (index 3): Reduce all slots to 1 and change room
                        if (weekIndex === 3) {
                          return {
                            ...shift,
                            availableSlot: 1,
                            roomName: "Phòng VIP - Đang bận",
                          };
                        }

                        return shift;
                      }
                    );

                    return {
                      ...day,
                      date: resDDMMYYYY,
                      displayDate: resDisplay,
                      shifts: modifiedShifts,
                    };
                  }),
                })
              ),
            })
          ),
      };

      // Simulate network latency for testing Suspense
      await new Promise(resolve => setTimeout(resolve, 1000));
      return transformedMock;
    }

    // Real API Implementation
    const url = `https://api-hotfix.medpro.com.vn/his-gateway/doctor-schedule/weekly?partnerId=${partnerId}&date=${date}&subjectId=${subjectId}&doctorId=${doctorId}`;
    const result = await api.get<any>(url, { caller });
    return (result?.data || result) as WeeklyScheduleResponse;
  }
);
