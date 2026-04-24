import { Service } from "@/types/service";

type Gender = 0 | 1 | 2 | "0" | "1" | "2";

export type DoctorTag = {
  id: string;
  type: string;
  name: string;
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
  doctorId: string | null;
  roomId: string | null;
  subjectName?: string | null;
  serviceName?: string | null;
  roomName?: string;
};

export type DoctorSubject = {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
};

export type PriorityCategoryDataItem = {
  display: boolean;
  status: boolean;
  doctorId: string;
  partnerId: string;
  subjectId: string | null;
  serviceId: string | null;
  category: string;
  order: number;
  image: string;
  name: string;
  fromDate: string | null;
  toDate: string | null;
  type: string;
  treeId: string;
  id: string;
};

export type DoctorRate = {
  rate: number;
  count: number;
  description: string;
};

export type DoctorDescription = {
  disable: boolean;
  listBanner: string[];
  workProcess: string;
  educationProcess: string;
  isListing: boolean;
  selfIntroduction: string;
  _id: string;
  rating: DoctorRate;
  isDetailVisible: boolean;
  bookingTotal: number;
  message: string;
  doctorId: string;
  updatedAt: string;
  createdAt: string;
  __v: number;
  seo_description: string;
  seo_keywords: string;
  slug: string;
  address: string;
  certificates: string;
  countryId: string;
  doctorAds: string[];
  guideDoctor: string[];
  iframeVideo: string[];
  language: string;
  languageId: string;
  permanent_address: string;
  pricing: string[];
  questions: string[];
  seo: {
    _id: string;
    faq: string[];
    title: string;
    createdAt: string;
    updatedAt: string;
  };
  specialty: string[];
  notiBookingTelemed: string;
};

export type DoctorPartner = {
  _id: string;
  partnerId: string;
  city_id: string;
  name: string;
  image: string;
  address: string;
  slug: string;
  newHospitalTypes: number[];
  packageImgDefault: string;
  circleLogo: string;
  rating: number;
};

export interface Doctor {
  id: string;
  partnerId: string;
  title: string;
  role: string;
  gender: Gender;
  desc: string;
  imageUrl: string;
  circleLogo: string | null;
  tags: DoctorTag[];
  desc2: string;
  price: string;
  priceDescription: string | null;
  treeId: string;
  trees: DoctorTree[];
  days: string;
  hospitalAddress: string;
  treatments: string;
  hospitals: DoctorHospital[];
  subjects: DoctorSubject[];
  services: (Omit<Service, "popupContent" | "ctas"> & {
    popupContent: string;
    ctas: DoctorCta[];
  })[];
  displayDetail: string | null;
  originalPrice: number | null;
  isDetailVisible: boolean;
  location: string | null;
  distance: string | null;
  sequenceDoctor: number;
  priorityCategoryData: PriorityCategoryDataItem[];
  promotePriceDescription: string | null;
  isPromote: boolean | null;
  cta: DoctorCta;
  description: DoctorDescription;
  partner: DoctorPartner;
}

export type DoctorSchedule = {
  id: string | null;
  title: string;
  role: string;
  price: string;
  imageUrl: string;
  slug: string;
  cta: DoctorCta;
};

export type DoctorDetailSchedule = Pick<
  Doctor,
  | "title"
  | "role"
  | "price"
  | "treatments"
  | "services"
  | "imageUrl"
  | "subjects"
  | "partnerId"
  | "description"
  | "partner"
>;

export type SearchResultDoctorDescription = {
  disabled?: boolean;
  rating?: DoctorRate | null;
} & Partial<Omit<DoctorDescription, "disable" | "rating">>;

export interface SearchResultDoctor extends Partial<
  Omit<Doctor, "description" | "partner">
> {
  category?: string;
  description?: SearchResultDoctorDescription;
  partner?: Partial<DoctorPartner>;
}
