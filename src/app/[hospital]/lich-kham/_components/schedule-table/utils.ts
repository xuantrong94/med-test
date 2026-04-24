// import normalize from "@/lib/utils/normalize";

// ─── Formats "02-23" → "23/02" for display ──── //
export function formatDate(dateKey: string): string {
  const [month, day] = dateKey.split("-");
  return `${day}/${month}`;
}

// ─── Day-of-week label (Mon, Tue …) ──── //
const DAY_LABELS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
export function getDayLabel(dateKey: string): string {
  // Assume current year 2026
  const [month, day] = dateKey.split("-");
  const d = new Date(2026, parseInt(month, 10) - 1, parseInt(day, 10));
  return DAY_LABELS[d.getDay()];
}

// ─── Moved createDoctorSlug to _helpers/index.ts ──── //
