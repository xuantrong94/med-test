import { Subject } from "./subject";
import { Service } from "./service";

export interface PartnerTranslate {
  _id: string;
  locale: string;
  name?: string;
}

export interface PartnerFeatureScreenOptions {
  headerTitle: string;
  bookingButtonText: string;
}

export interface PartnerFeature {
  message: string;
  disabled: boolean;
  children: unknown[];
  bookingLimit: number;

  position: string;
  customURLTarget: string;
  _id: string;
  id: string;
  name: string;
  image: string;
  priority: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  type: string;
  customUrl: string;
  displayIcon: string;
  mobileIcon: string;
  mobileRoute: string;
  webRoute: string;
  localeName: string;
  translate: PartnerTranslate[];
  slug: string;
  mobileStatus: boolean;
  screenOptions: PartnerFeatureScreenOptions;
  description: string;
  warningMessage?: string;
}

export interface PartnerSpecialty {
  status: boolean;
  cta: unknown;
  order: number;
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface Partner {
  banner: string;
  subjects: Subject[];
  services: Service[];
  doctors: unknown[];
  rooms: unknown[];
  message: string;
  sortOrder: number;
  deliveryStatus: number;
  hospitalType: number;
  newHospitalType: number;
  newHospitalTypes: number[];
  sponsored: boolean;
  listingPackagePaid: boolean;
  isCashBack: boolean;
  packageImgDefault: string;
  isContractSigned: boolean;
  sortOrderListing: number;
  _id: string;
  status: number;
  sortOrderKM: number;
  homeBannerAction: unknown[];

  partnerId: string;
  city_id: string;
  name: string;
  email: string;
  city: string;
  id: string;
  oldVersionFeature: unknown[];
  features: PartnerFeature[];

  createdAt: string;
  updatedAt: string;
  __v: number;
  address: string;
  circleLogo: string;
  district: string;
  district_id: string;
  facebook: string;
  googleMap: string;
  image: string;
  phone: string;
  sms_name: string;
  website: string;
  workingDate: string;
  workingTime: string;
  slug: string;
  specialtys: PartnerSpecialty[];
  android: string;
  ios: string;
  bannerAds: unknown[];
  promoVideos: unknown[];
  appointmentBooking: string;

  costNotes: string;
  isAppointment: boolean;
  specialtyNotes: string;
  rating?: number;
}

export interface PartnerResponse {
  status: number;
  message: string;
  data: Partner;
}
