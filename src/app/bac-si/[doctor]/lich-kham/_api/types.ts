export interface WeeklyShift {
  timeId: string;
  shiftName: string;
  shiftCode: string;
  startTime: string;
  endTime: string;
  roomId: string;
  roomName: string;
  status: "AVAILABLE" | "FULL" | "OFF";
  maxSlot: number;
  availableSlot: number;
}

export interface WeeklyDay {
  date: string; // DDMMYYYY format from API
  displayDate: string;
  dayOfWeek: string;
  shifts: WeeklyShift[];
  timemiliseconds: string;
}

/**
 * Intermediate layer between Service and Day.
 * Each treeId represents a booking tree path (e.g. "DATE,VIP", "VIP").
 */
export interface WeeklyTree {
  treeId: string;
  id: string;
  name: string;
  price: number;
  days: WeeklyDay[];
}

export interface WeeklyService {
  id: string;
  name: string;
  price: number;
  treeIds: WeeklyTree[];
}

export interface WeeklyScheduleResponse {
  doctorId: string;
  partnerId: string;
  subjectId: string;
  services: WeeklyService[];
}

/**
 * UI-Specific processed types produced by utility transformation.
 * These are used by optimized components for rendering.
 */
export interface ProcessedWeeklyShift extends WeeklyShift {
  service: {
    id: string;
    name: string;
    price: number;
  };
  treeId: string;
}

export interface ProcessedWeeklyDay {
  date: string; // Normalized to YYYYMMDD for internal use
  displayDate: string;
  dayOfWeek: string;
  timemiliseconds: string;
  shifts: ProcessedWeeklyShift[];
}
