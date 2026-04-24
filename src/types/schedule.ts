export type TimeSlot = {
  availableSlot: number;
  endTime: string;
  maxSlot: number;
  priorityRoom: number;
  roomId?: string | null;
  startTime: string;
  timeId: string;
};

export type Shift = {
  days: string;
  doctorChange: boolean;
  doctorChangeInfo?: string | null;
  doctorId: string;
  duration: number;
  endTime: string;
  id: string;
  maxSlot: number;
  priorityRoom: 0;
  roomId?: string | null;
  roomName?: string | null; // Added based on mock/usage
  roomShift?: string | unknown[] | null; // Changed to support both string and array
  services: {
    advance: number;
    id: string;
    price: number;
    roomId?: string | null;
    roomType?: string | null;
    serviceType?: string | null;
    subjectId: string;
  }[];
  shiftCode: string;
  shiftName: string;
  startTime?: string;
  timeSlotInDay: TimeSlot[];
};

export type Day = {
  date: number;
  shifts: Shift[];
  timeSlots: TimeSlot[];
  timemiliseconds: number;
};

export type Schedule = {
  id: string;
  type: string;
  subType: string;
  days: Day[];
};
