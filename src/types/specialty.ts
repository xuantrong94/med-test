import { ResultItem } from "./result.item";
import { Service } from "@/types/service";

// Base interface for all items
interface BaseItem {
  id: string;
  name: string;
}

// Hospital item interface
export interface HospitalItem extends BaseItem {
  type: "hospital";
  address: string;
  image: string;
  circleLogo: string;
  ctas: any; // Can be null or other _types based on usage
}

// Doctor item interface
export interface DoctorItem extends BaseItem {
  type: "doctor";
}

// Subject item interface
export interface SubjectItem extends BaseItem {
  type: "subject";
  imageUrl?: string; // Optional as it may not always be present
}

// Service item interface
export type ServiceItem = Pick<Service, "id" | "name"> & {
  type: "service";
};

// Tag item interface (appears to be same structure as subject)
export interface TagItem extends BaseItem {
  type: "tag";
}

export interface City extends BaseItem {
  type: "city";
}

// Union type for all possible item types
export type SpecialtyItem =
  | HospitalItem
  | DoctorItem
  | SubjectItem
  | ServiceItem
  | TagItem;

// Type guard functions
export const isHospitalItem = (item: SpecialtyItem): item is HospitalItem =>
  item.type === "hospital";

export const isDoctorItem = (item: SpecialtyItem): item is DoctorItem =>
  item.type === "doctor";

export const isSubjectItem = (item: SpecialtyItem): item is SubjectItem =>
  item.type === "subject";

export const isServiceItem = (item: SpecialtyItem): item is ServiceItem =>
  item.type === "service";

export const isTagItem = (item: SpecialtyItem): item is TagItem =>
  item.type === "tag";

export type Specialty = {
  category: string;
  categoryName: string;
  search_key: string;
  predictSearchKey?: string | string[];
  hospitals: HospitalItem[];
  doctors: DoctorItem[];
  subjects: SubjectItem[];
  cities: City[];
  services: ServiceItem[];
  tags: TagItem[];
  results: ResultItem[];
  total: number;
};
