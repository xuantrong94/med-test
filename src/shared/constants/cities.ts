import { normalizeCitySlug } from "@/lib/utils/city-slug";

export interface GeoBase {
  id: string;
  name: string;
  slug: string;
}

export interface City extends GeoBase {
  type: "city";
}

export interface District extends GeoBase {
  type: "district";
  cityId: string;
}

export interface Ward extends GeoBase {
  type: "ward";
  districtId: string;
}

// 1. List of 63 Provinces/Cities
const CITY_LIST = [
  { id: "medpro_79", name: "Thành phố Hồ Chí Minh" },
  { id: "medpro_01", name: "Thành phố Hà Nội" },
  { id: "medpro_48", name: "Thành phố Đà Nẵng" },
  { id: "medpro_92", name: "Thành phố Cần Thơ" },
  { id: "medpro_31", name: "Thành phố Hải Phòng" },
  { id: "medpro_89", name: "Tỉnh An Giang" },
  { id: "medpro_77", name: "Tỉnh Bà Rịa - Vũng Tàu" },
  { id: "medpro_24", name: "Tỉnh Bắc Giang" },
  { id: "medpro_06", name: "Tỉnh Bắc Kạn" },
  { id: "medpro_95", name: "Tỉnh Bạc Liêu" },
  { id: "medpro_27", name: "Tỉnh Bắc Ninh" },
  { id: "medpro_83", name: "Tỉnh Bến Tre" },
  { id: "medpro_52", name: "Tỉnh Bình Định" },
  { id: "medpro_74", name: "Tỉnh Bình Dương" },
  { id: "medpro_70", name: "Tỉnh Bình Phước" },
  { id: "medpro_60", name: "Tỉnh Bình Thuận" },
  { id: "medpro_96", name: "Tỉnh Cà Mau" },
  { id: "medpro_04", name: "Tỉnh Cao Bằng" },
  { id: "medpro_66", name: "Tỉnh Đắk Lắk" },
  { id: "medpro_67", name: "Tỉnh Đắk Nông" },
  { id: "medpro_11", name: "Tỉnh Điện Biên" },
  { id: "medpro_75", name: "Tỉnh Đồng Nai" },
  { id: "medpro_87", name: "Tỉnh Đồng Tháp" },
  { id: "medpro_64", name: "Tỉnh Gia Lai" },
  { id: "medpro_02", name: "Tỉnh Hà Giang" },
  { id: "medpro_35", name: "Tỉnh Hà Nam" },
  { id: "medpro_42", name: "Tỉnh Hà Tĩnh" },
  { id: "medpro_30", name: "Tỉnh Hải Dương" },
  { id: "medpro_93", name: "Tỉnh Hậu Giang" },
  { id: "medpro_17", name: "Tỉnh Hòa Bình" },
  { id: "medpro_33", name: "Tỉnh Hưng Yên" },
  { id: "medpro_56", name: "Tỉnh Khánh Hòa" },
  { id: "medpro_91", name: "Tỉnh Kiên Giang" },
  { id: "medpro_62", name: "Tỉnh Kon Tum" },
  { id: "medpro_12", name: "Tỉnh Lai Châu" },
  { id: "medpro_68", name: "Tỉnh Lâm Đồng" },
  { id: "medpro_20", name: "Tỉnh Lạng Sơn" },
  { id: "medpro_10", name: "Tỉnh Lào Cai" },
  { id: "medpro_80", name: "Tỉnh Long An" },
  { id: "medpro_36", name: "Tỉnh Nam Định" },
  { id: "medpro_40", name: "Tỉnh Nghệ An" },
  { id: "medpro_37", name: "Tỉnh Ninh Bình" },
  { id: "medpro_58", name: "Tỉnh Ninh Thuận" },
  { id: "medpro_25", name: "Tỉnh Phú Thọ" },
  { id: "medpro_54", name: "Tỉnh Phú Yên" },
  { id: "medpro_44", name: "Tỉnh Quảng Bình" },
  { id: "medpro_49", name: "Tỉnh Quảng Nam" },
  { id: "medpro_51", name: "Tỉnh Quảng Ngãi" },
  { id: "medpro_22", name: "Tỉnh Quảng Ninh" },
  { id: "medpro_45", name: "Tỉnh Quảng Trị" },
  { id: "medpro_94", name: "Tỉnh Sóc Trăng" },
  { id: "medpro_14", name: "Tỉnh Sơn La" },
  { id: "medpro_72", name: "Tỉnh Tây Ninh" },
  { id: "medpro_34", name: "Tỉnh Thái Bình" },
  { id: "medpro_19", name: "Tỉnh Thái Nguyên" },
  { id: "medpro_38", name: "Tỉnh Thanh Hóa" },
  { id: "medpro_46", name: "Tỉnh Thừa Thiên Huế" },
  { id: "medpro_82", name: "Tỉnh Tiền Giang" },
  { id: "medpro_84", name: "Tỉnh Trà Vinh" },
  { id: "medpro_08", name: "Tỉnh Tuyên Quang" },
  { id: "medpro_86", name: "Tỉnh Vĩnh Long" },
  { id: "medpro_26", name: "Tỉnh Vĩnh Phúc" },
  { id: "medpro_15", name: "Tỉnh Yên Bái" },
];

export const CITIES: City[] = CITY_LIST.map(city => ({
  id: city.id,
  type: "city",
  name: city.name,
  slug: normalizeCitySlug(city.name),
}));

// 2. Mapped Districts (Lookup Table for O(1) access)
export const DISTRICTS_MAP: Record<string, District[]> = {
  // Thành phố Hồ Chí Minh
  medpro_79: [
    { id: "medpro_760", cityId: "medpro_79", name: "Quận 1" },
    { id: "medpro_761", cityId: "medpro_79", name: "Quận 12" },
    { id: "medpro_764", cityId: "medpro_79", name: "Quận Gò Vấp" },
    { id: "medpro_765", cityId: "medpro_79", name: "Quận Bình Thạnh" },
    { id: "medpro_766", cityId: "medpro_79", name: "Quận Tân Bình" },
    { id: "medpro_767", cityId: "medpro_79", name: "Quận Tân Phú" },
    { id: "medpro_768", cityId: "medpro_79", name: "Quận Phú Nhuận" },
    { id: "medpro_769", cityId: "medpro_79", name: "Thành phố Thủ Đức" },
    { id: "medpro_770", cityId: "medpro_79", name: "Quận 3" },
    { id: "medpro_771", cityId: "medpro_79", name: "Quận 10" },
    { id: "medpro_772", cityId: "medpro_79", name: "Quận 11" },
    { id: "medpro_773", cityId: "medpro_79", name: "Quận 4" },
    { id: "medpro_774", cityId: "medpro_79", name: "Quận 5" },
    { id: "medpro_775", cityId: "medpro_79", name: "Quận 6" },
    { id: "medpro_776", cityId: "medpro_79", name: "Quận 8" },
    { id: "medpro_777", cityId: "medpro_79", name: "Quận Bình Tân" },
    { id: "medpro_778", cityId: "medpro_79", name: "Quận 7" },
    { id: "medpro_783", cityId: "medpro_79", name: "Huyện Củ Chi" },
    { id: "medpro_784", cityId: "medpro_79", name: "Huyện Hóc Môn" },
    { id: "medpro_785", cityId: "medpro_79", name: "Huyện Bình Chánh" },
    { id: "medpro_786", cityId: "medpro_79", name: "Huyện Nhà Bè" },
    { id: "medpro_787", cityId: "medpro_79", name: "Huyện Cần Giờ" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),

  // Hà Nội
  medpro_01: [
    { id: "medpro_001", cityId: "medpro_01", name: "Quận Ba Đình" },
    { id: "medpro_002", cityId: "medpro_01", name: "Quận Hoàn Kiếm" },
    { id: "medpro_003", cityId: "medpro_01", name: "Quận Tây Hồ" },
    { id: "medpro_004", cityId: "medpro_01", name: "Quận Long Biên" },
    { id: "medpro_005", cityId: "medpro_01", name: "Quận Cầu Giấy" },
    { id: "medpro_006", cityId: "medpro_01", name: "Quận Đống Đa" },
    { id: "medpro_007", cityId: "medpro_01", name: "Quận Hai Bà Trưng" },
    { id: "medpro_008", cityId: "medpro_01", name: "Quận Hoàng Mai" },
    { id: "medpro_009", cityId: "medpro_01", name: "Quận Thanh Xuân" },
    { id: "medpro_016", cityId: "medpro_01", name: "Huyện Sóc Sơn" },
    { id: "medpro_017", cityId: "medpro_01", name: "Huyện Đông Anh" },
    { id: "medpro_018", cityId: "medpro_01", name: "Huyện Gia Lâm" },
    { id: "medpro_019", cityId: "medpro_01", name: "Quận Nam Từ Liêm" },
    { id: "medpro_020", cityId: "medpro_01", name: "Huyện Thanh Trì" },
    { id: "medpro_021", cityId: "medpro_01", name: "Quận Bắc Từ Liêm" },
    { id: "medpro_268", cityId: "medpro_01", name: "Quận Hà Đông" },
    { id: "medpro_269", cityId: "medpro_01", name: "Thị xã Sơn Tây" },
    { id: "medpro_271", cityId: "medpro_01", name: "Huyện Ba Vì" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),

  // Đà Nẵng
  medpro_48: [
    { id: "medpro_492", cityId: "medpro_48", name: "Quận Hải Châu" },
    { id: "medpro_491", cityId: "medpro_48", name: "Quận Thanh Khê" },
    { id: "medpro_493", cityId: "medpro_48", name: "Quận Sơn Trà" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),

  // Cần Thơ
  medpro_92: [
    { id: "medpro_916", cityId: "medpro_92", name: "Quận Ninh Kiều" },
    { id: "medpro_917", cityId: "medpro_92", name: "Quận Bình Thủy" },
    { id: "medpro_918", cityId: "medpro_92", name: "Quận Cái Răng" },
    { id: "medpro_919", cityId: "medpro_92", name: "Quận Ô Môn" },
    { id: "medpro_923", cityId: "medpro_92", name: "Quận Thốt Nốt" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),

  // Bà Rịa - Vũng Tàu
  medpro_77: [
    { id: "medpro_747", cityId: "medpro_77", name: "Thành phố Vũng Tàu" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),

  // Bình Dương
  medpro_74: [
    { id: "medpro_718", cityId: "medpro_74", name: "Thành phố Thủ Dầu Một" },
    { id: "medpro_725", cityId: "medpro_74", name: "Thành phố Thuận An" },
    { id: "medpro_724", cityId: "medpro_74", name: "Thành phố Dĩ An" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),

  // An Giang
  medpro_89: [
    { id: "medpro_884", cityId: "medpro_89", name: "Thành phố Châu Đốc" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),

  // Tiền Giang
  medpro_82: [
    { id: "medpro_815", cityId: "medpro_82", name: "Thành phố Mỹ Tho" },
  ].map(d => ({ ...d, type: "district", slug: normalizeCitySlug(d.name) })),
};

// 3. Mapped Wards (Example for District 1, HCM)
export const WARDS_MAP: Record<string, Ward[]> = {
  medpro_760: [
    { id: "w_26734", districtId: "medpro_760", name: "Phường Tân Định" },
    { id: "w_26737", districtId: "medpro_760", name: "Phường Đa Kao" },
    { id: "w_26740", districtId: "medpro_760", name: "Phường Bến Nghé" },
    { id: "w_26743", districtId: "medpro_760", name: "Phường Bến Thành" },
    {
      id: "w_26746",
      districtId: "medpro_760",
      name: "Phường Nguyễn Thái Bình",
    },
    { id: "w_26749", districtId: "medpro_760", name: "Phường Phạm Ngũ Lão" },
    { id: "w_26752", districtId: "medpro_760", name: "Phường Nguyễn Cư Trinh" },
    { id: "w_26755", districtId: "medpro_760", name: "Phường Cô Giang" },
    { id: "w_26758", districtId: "medpro_760", name: "Phường Cầu Kho" },
    { id: "w_26761", districtId: "medpro_760", name: "Phường Cầu Ông Lãnh" },
  ].map(w => ({ ...w, type: "ward", slug: normalizeCitySlug(w.name) })),
};

// Helper function to get cities quickly
export const getCityById = (id: string) => CITIES.find(c => c.id === id);

// Helper function to get districts of a city quickly (O(1))
export const getDistrictsByCityId = (cityId: string) =>
  DISTRICTS_MAP[cityId] || [];

// Helper function to get wards of a district quickly (O(1))
export const getWardsByDistrictId = (districtId: string) =>
  WARDS_MAP[districtId] || [];
