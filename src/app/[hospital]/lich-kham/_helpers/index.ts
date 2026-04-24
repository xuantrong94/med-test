// import { getWeekDays } from "@/lib/utils/date/getWeekDays";

// export const buildTableData = (schedules: Schedule[], date: string) => {
//   const weekDays = getWeekDays(date, {
//     includeFullDate: true,
//     includeYear: true,
//   });

//   const rows = schedules.map(schedule => {
//     // Map existing schedule days by date string for quick lookup
//     const scheduleDaysMap = new Map(
//       (schedule.days || []).map(d => [d.date, d])
//     );

//     // Create a new days array matching weekDays order, filling in gaps
//     const filledDays = weekDays.map(wd => {
//       // safe fallback if fullDate is somehow undefined, though it shouldn't be with option true
//       const dateKey = wd.fullDate || `${wd.date}-${wd.month}-${wd.year}`;

//       if (scheduleDaysMap.has(dateKey)) {
//         return scheduleDaysMap.get(dateKey)!;
//       }

//       // Return empty day structure if no schedule exists for this date
//       return {
//         date: dateKey,
//         doctors: [],
//       };
//     });

//     return {
//       subject: schedule.subject,
//       days: filledDays,
//     };
//   });

//   return { columns: [...weekDays], rows };
// };

export const sanitizeId = (id: string | null | undefined, fallback: string) => {
  if (!id || id.trim() === "") return fallback;
  return id;
};

export function createDoctorSlug(
  hospitalId: string,
  role: string | undefined,
  title: string | undefined
) {
  if (!title) return "";
  const fullTitle = role ? `${role} ${title}` : title;
  const normalizedTitle = (fullTitle || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return `${hospitalId}-${normalizedTitle}`;
}

/**
 * Standardizes the feature parameter for Medpro booking URLs.
 * Ensures the format "booking.[treeId]" (e.g., booking.DOCTOR).
 */
export function formatBookingFeature(treeId?: string) {
  if (!treeId) return "booking.DOCTOR";
  if (treeId.startsWith("booking.")) return treeId;
  if (treeId.includes(",")) {
    const treeIds = treeId.split(",");
    return `booking.${treeIds[1]}`;
  }
  // Prefix the dynamic treeId directly without splitting
  return `booking.${treeId}`;
}
