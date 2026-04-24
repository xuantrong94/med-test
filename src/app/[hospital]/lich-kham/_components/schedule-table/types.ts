import { DoctorSchedule } from "@/types/doctor";

export type ScheduleRow = {
  date: string; // e.g. '02-23'
  label: string; // phase name OR subject name
  labelType: "phase" | "subject"; // distinguishes the two kinds
  subjectId?: string | null;
  doctors: DoctorSchedule[];
};
