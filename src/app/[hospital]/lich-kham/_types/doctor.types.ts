type Gender = 0 | 1 | 2;

export type DoctorTag = {
  id: string;
  name: string;
  type: string;
};

export type DoctorTree = {
  treeId: string;
  detailShiftId: string | null;
  doctorId: string | null;
  days: string;
};

export type DoctorHospital = {
  id: string;
  type: string;
  name: string;
  address: string;
  image: string;
  circleLogo: string | null;
  ctas: DoctorCta[];
};

export type DoctorCta = {
  name: string;
  partnerId: string;
  treeId: string;
  subjectId: string | null;
  serviceId: string | null;
  doctorId: string;
  roomId: string | null;
};

export interface Doctor {
  id: string;
  name: string;
  avatar: string;
  imageUrl: string;
  gender: Gender;
  role: string;
  description?: string | null;
  bookingNote?: string;
  sectionName?: string | null;
  sectionDescription?: string | null;
  sectionAddress?: string | null;
  roomType?: string | null;
  subject: string;
  subjectId: string;
  treatments: string;
  price: `${number}.${number}đ` | string;
  displaySchedule: string;
  displayDetail?: string | null;
  maxDay?: number | null;
}
