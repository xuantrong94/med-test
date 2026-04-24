import { DoctorSchedule } from "@/types/doctor";
import { Subject } from "@/types/subject";

type ScheduleByDate = {
  [date: string]: {
    phase?: string | null;
    subjectId?: string | null;
    subjectName?: string | null;
    doctors: DoctorSchedule[];
  }[];
};

export type ScheduleData = {
  id: string;
  feature: {
    id: string;
    name: string;
    slug: string;
    image: string;
  };
  schedule: ScheduleByDate;
};

export type PartnerSchedulesResponse = {
  status: string;
  data: ScheduleData[];
};
