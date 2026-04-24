import { slugify } from "@/lib/utils/slugify";

export interface Specialty {
  id: string;
  order: string;
  name: string;
  slug: string;
  icon: string;
  searchKeys?: string[];
}

export const specialties: Specialty[] = [
  {
    id: "medpro_yhocgiadinh",
    order: "1",
    name: "Bác sĩ Gia Đình",
    slug: slugify("Bác sĩ Gia Đình"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/ChuyenKhoa.png",
  },
  {
    id: "medpro_ganmat",
    order: "2",
    name: "Tiêu Hóa Gan Mật",
    slug: slugify("Tiêu Hóa Gan Mật"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655710722460-TIEU_HOA_GAN_MAT.png",
  },
  {
    id: "medpro_noikhoa",
    order: "3",
    name: "Nội Tổng Quát",
    slug: slugify("Nội Tổng Quát"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/noi_tong_quat.png",
  },
  {
    id: "medpro_noitiet",
    order: "4",
    name: "Nội Tiết",
    slug: slugify("Nội Tiết"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/noi_tiet.png",
  },
  {
    id: "medpro_dalieu",
    order: "5",
    name: "Da liễu",
    slug: slugify("Da liễu"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/da_lieu.png",
    searchKeys: ["da", "da liễu"],
  },
  {
    id: "medpro_timmach",
    order: "6",
    name: "Nội Tim Mạch",
    slug: slugify("Nội Tim Mạch"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tim_mach.png",
  },
  {
    id: "medpro_thankinh",
    order: "7",
    name: "Nội Thần Kinh",
    slug: slugify("Nội Thần Kinh"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/than_kinh.png",
  },
  {
    id: "medpro_noico_xuong_khop",
    order: "8",
    name: "Nội Cơ Xương Khớp",
    slug: slugify("Nội Cơ Xương Khớp"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/noi_co_xuong_khop.png",
  },
  {
    id: "medpro_taimuihong",
    order: "9",
    name: "Tai Mũi Họng",
    slug: slugify("Tai Mũi Họng"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tai_mui_hong.png",
  },
  {
    id: "medpro_mat",
    order: "10",
    name: "Mắt",
    slug: slugify("Mắt"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/mat.png",
    searchKeys: ["mắt", "nhãn", "kính"],
  },
  {
    id: "medpro_tieuhoa",
    order: "11",
    name: "Nội Tiêu Hoá",
    slug: slugify("Nội Tiêu Hoá"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tieu_hoa.png",
  },
  {
    id: "medpro_truyennhiem",
    order: "12",
    name: "Nội Truyền Nhiễm",
    slug: slugify("Nội Truyền Nhiễm"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/PG/1651821563777-VIEM_GAN.png",
  },
  {
    id: "medpro_hohap",
    order: "13",
    name: "Nội Hô Hấp",
    slug: slugify("Nội Hô Hấp"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ho_hap.png",
  },
  {
    id: "medpro_tietnieu",
    order: "14",
    name: "Nội Tiết Niệu",
    slug: slugify("Nội Tiết Niệu"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tiet_nieu.png",
  },
  {
    id: "medpro_Cxk",
    order: "15",
    name: "Ngoại Cơ Xương Khớp",
    slug: slugify("Ngoại Cơ Xương Khớp"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/xuong_khop_chinh_hinh.png",
  },
  {
    id: "medpro_sanphukhoa",
    order: "16",
    name: "Sản - Phụ Khoa",
    slug: slugify("Sản - Phụ Khoa"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/san_phu_khoa.png",
  },
  {
    id: "medpro_ngoaitieuhoa",
    order: "17",
    name: "Ngoại Tiêu Hoá",
    slug: slugify("Ngoại Tiêu Hoá"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tieu_hoa.png",
  },
  {
    id: "medpro_ngoaitietnieu",
    order: "18",
    name: "Ngoại Tiết Niệu",
    slug: slugify("Ngoại Tiết Niệu"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tiet_nieu.png",
  },
  {
    id: "medpro_tamly",
    order: "19",
    name: "Tâm Lý",
    slug: slugify("Tâm Lý"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tam_ly.png",
    searchKeys: ["tâm lý"],
  },
  {
    id: "medpro_tamthankinh",
    order: "21",
    name: "Tâm Thần Kinh",
    slug: slugify("Tâm Thần Kinh"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tam_than_kinh.png",
  },
  {
    id: "medpro_ngoaihohap",
    order: "22",
    name: "Ngoại Hô Hấp",
    slug: slugify("Ngoại Hô Hấp"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ho_hap.png",
  },
  {
    id: "medpro_ngoaithankinh",
    order: "23",
    name: "Ngoại Thần Kinh",
    slug: slugify("Ngoại Thần Kinh"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ngoai_than_kinh.png",
  },
  {
    id: "medpro_machmau",
    order: "24",
    name: "Lồng Ngực - Mạch Máu",
    slug: slugify("Lồng Ngực - Mạch Máu"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/long_nguc_mach_mau.png",
  },
  {
    id: "medpro_dinhduong",
    order: "25",
    name: "Dinh Dưỡng",
    slug: slugify("Dinh Dưỡng"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/dinh_duong.png",
  },
  {
    id: "medpro_thammyda",
    order: "26",
    name: "Thẩm mỹ da",
    slug: slugify("Thẩm mỹ da"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655709747685-THAM_MY_DA.png",
  },
  {
    id: "medpro_tongquat",
    order: "27",
    name: "Ngoại Tổng Quát",
    slug: slugify("Ngoại Tổng Quát"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tong_quat.png",
  },
  {
    id: "medpro_diung",
    order: "28",
    name: "Dị Ứng - Miễn Dịch Lâm Sàng",
    slug: slugify("Dị Ứng - Miễn Dịch Lâm Sàng"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/di_ung_mien_dich_lam_sang.png",
  },
  {
    id: "medpro_ranghammat",
    order: "29",
    name: "Răng Hàm Mặt",
    slug: slugify("Răng Hàm Mặt"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/rang_ham_mat.png",
  },
  {
    id: "medpro_Ctch",
    order: "30",
    name: "Chấn Thương Chỉnh Hình",
    slug: slugify("Chấn Thương Chỉnh Hình"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/chan_thuong_chinh_hinh.png",
  },
  {
    id: "medpro_vosinhhiemmuon",
    order: "31",
    name: "Vô Sinh - Hiếm Muộn",
    slug: slugify("Vô Sinh - Hiếm Muộn"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/KBTS/1651820887681-SAN_KHOA_CHAN_DOAN_TRUOC_SINH.png",
  },
  {
    id: "medpro_ngoaiungbuou",
    order: "32",
    name: "Ngoại Ung Bướu",
    slug: slugify("Ngoại Ung Bướu"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ung_buou.png",
  },
  {
    id: "medpro_ungbuou",
    order: "33",
    name: "Ung Bướu",
    slug: slugify("Ung Bướu"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ung_buou.png",
  },
  {
    id: "medpro_namkhoa",
    order: "34",
    name: "Nam Khoa",
    slug: slugify("Nam Khoa"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/nam_khoa.png",
  },
  {
    id: "medpro_laokhoa",
    order: "35",
    name: "Lão Khoa",
    slug: slugify("Lão Khoa"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/PW/1651820749478-LAO_KHOA.png",
  },
  {
    id: "medpro_phuchoichucnang",
    order: "36",
    name: "Vật Lý Trị Liệu - Phục Hồi Chức Năng",
    slug: slugify("Vật Lý Trị Liệu - Phục Hồi Chức Năng"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655708507374-PHUC_HOI_CHUC_NANG.png",
  },
  {
    id: "medpro_yhct",
    order: "37",
    name: "Y Học Cổ Truyền",
    slug: slugify("Y Học Cổ Truyền"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/default/avatar/ChuyenKhoa.png",
  },
  {
    id: "medpro_timmachcanthiep",
    order: "38",
    name: "Tim Mạch Can Thiệp",
    slug: slugify("Tim Mạch Can Thiệp"),
    icon: "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655710764408-TIM_MACH.png",
  },
  {
    id: "medpro_taohinhthammy",
    order: "39",
    name: "Tạo hình thẩm mỹ",
    slug: slugify("Tạo hình thẩm mỹ"),
    icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1745302606104-tao_hinh_tham_my.png",
  },
  {
    id: "medpro_chiropractic",
    order: "40",
    name: "Cơ Xương Khớp - Chiropractic",
    slug: slugify("Cơ Xương Khớp - Chiropractic"),
    icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1759222134922-chiropractic.png",
  },
  {
    id: "medpro_nhakhoa",
    order: "41",
    name: "Nha Khoa",
    slug: slugify("Nha Khoa"),
    icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1759980701881-NHI.png",
  },
  {
    id: "medpro_nhikhoa",
    order: "42",
    name: "Nhi Khoa",
    slug: slugify("Nhi Khoa"),
    icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1759980664918-20251009_102810.png",
  },
  // {
  //   id: "medpro_chandoanhinhanh",
  //   order: "43",
  //   name: "Chẩn đoán hình ảnh",
  //   slug: slugify("Chẩn đoán hình ảnh"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726736252788-hinh_anh_hoc_can_thiep_1.png",
  // },
  // {
  //   id: "medpro_covid19",
  //   order: "44",
  //   name: "Covid19",
  //   slug: slugify("Covid19"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726739044860-icon_hau_covid_option_3_1__vectorized_.png",
  // },
  // {
  //   id: "medpro_huyethoc",
  //   order: "45",
  //   name: "Huyết học",
  //   slug: slugify("Huyết học"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726738701911-huyet_hoc.png",
  // },
  // {
  //   id: "medpro_haumontructrang",
  //   order: "46",
  //   name: "Hậu môn - Trực tràng",
  //   slug: slugify("Hậu môn - Trực tràng"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726738204761-Hau_mon_hoc.png",
  // },
  // {
  //   id: "medpro_ngoaikhoa",
  //   order: "47",
  //   name: "Ngoại khoa",
  //   slug: slugify("Ngoại khoa"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726739006663-Ngoai_Khoa.png",
  // },
  // {
  //   id: "medpro_noisoi",
  //   order: "48",
  //   name: "Nội soi",
  //   slug: slugify("Nội soi"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726734809238-NIEU_HOC_CHUC_NANG.png",
  // },
  // {
  //   id: "medpro_noithan",
  //   order: "49",
  //   name: "Nội thận",
  //   slug: slugify("Nội thận"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726738650762-NOI_THAN.png",
  // },
  // {
  //   id: "medpro_thammy",
  //   order: "50",
  //   name: "Thẩm mỹ",
  //   slug: slugify("Thẩm mỹ"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1718590857749-icon_thtm.png",
  // },
  // {
  //   id: "medpro_tamthan",
  //   order: "51",
  //   name: "Tâm thần",
  //   slug: slugify("Tâm thần"),
  //   icon: "https://cdn.medpro.vn/medpro-production/medpro/subjects/1726738829715-TAM_THAN_KINH.png",
  // },
];

// Helper functions for centralized data access
export const getSpecialtyBySlug = (slug: string): Specialty | undefined => {
  return specialties.find(item => item.slug === slug);
};

export const getSpecialtyId = (slug: string): string => {
  const item = getSpecialtyBySlug(slug);
  return item ? item.id : "";
};

export const getSpecialtyName = (slug: string): string => {
  const item = getSpecialtyBySlug(slug);
  return item ? item.name : "Tất cả chuyên khoa";
};

export const specialtyOptions = specialties.map(item => ({
  label: item.name,
  value: item.id,
  slug: item.slug,
}));

export const getSpecialtySlugs = (): string[] => {
  return specialties.map(item => item.slug);
};

// Legacy compatibility aliases (optional, but good for transition)
export const getSearchKeys = (slug: string): string[] => {
  const item = getSpecialtyBySlug(slug);
  if (item?.searchKeys && item.searchKeys.length > 0) {
    return item.searchKeys;
  }
  return [getSpecialtyName(slug)];
};

export const getSearchKey = (slug: string): string => {
  return getSearchKeys(slug)[0];
};

export const getSubject = getSpecialtyName;

export default specialties;

// truth image urls
// [
//     {
//         "order": "1",
//         "name": "Bác sĩ Gia Đình",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/ChuyenKhoa.png"
//     },
//     {
//         "order": "2",
//         "name": "Tiêu Hóa Gan Mật",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655710722460-TIEU_HOA_GAN_MAT.png"
//     },
//     {
//         "order": "3",
//         "name": "Nội Tổng Quát",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/noi_tong_quat.png"
//     },
//     {
//         "order": "4",
//         "name": "Nội Tiết",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/noi_tiet.png"
//     },
//     {
//         "order": "5",
//         "name": "Da liễu",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/da_lieu.png"
//     },
//     {
//         "order": "6",
//         "name": "Nội Tim Mạch",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tim_mach.png"
//     },
//     {
//         "order": "7",
//         "name": "Nội Thần Kinh",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/than_kinh.png"
//     },
//     {
//         "order": "8",
//         "name": "Nội Cơ Xương Khớp",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/noi_co_xuong_khop.png"
//     },
//     {
//         "order": "9",
//         "name": "Tai Mũi Họng",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tai_mui_hong.png"
//     },
//     {
//         "order": "10",
//         "name": "Mắt",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/mat.png"
//     },
//     {
//         "order": "11",
//         "name": "Nội Tiêu Hoá",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tieu_hoa.png"
//     },
//     {
//         "order": "12",
//         "name": "Nội Truyền Nhiễm",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/PG/1651821563777-VIEM_GAN.png"
//     },
//     {
//         "order": "13",
//         "name": "Nội Hô Hấp",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ho_hap.png"
//     },
//     {
//         "order": "14",
//         "name": "Nội Tiết Niệu",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tiet_nieu.png"
//     },
//     {
//         "order": "15",
//         "name": "Ngoại Cơ Xương Khớp",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/xuong_khop_chinh_hinh.png"
//     },
//     {
//         "order": "16",
//         "name": "Sản - Phụ Khoa",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/san_phu_khoa.png"
//     },
//     {
//         "order": "17",
//         "name": "Ngoại Tiêu Hoá",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tieu_hoa.png"
//     },
//     {
//         "order": "18",
//         "name": "Ngoại Tiết Niệu",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tiet_nieu.png"
//     },
//     {
//         "order": "19",
//         "name": "Tâm Lý",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tam_ly.png"
//     },
//     {
//         "order": "21",
//         "name": "Tâm Thần Kinh",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tam_than_kinh.png"
//     },
//     {
//         "order": "22",
//         "name": "Ngoại Hô Hấp",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ho_hap.png"
//     },
//     {
//         "order": "23",
//         "name": "Ngoại Thần Kinh",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ngoai_than_kinh.png"
//     },
//     {
//         "order": "24",
//         "name": "Lồng Ngực - Mạch Máu",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/long_nguc_mach_mau.png"
//     },
//     {
//         "order": "25",
//         "name": "Dinh Dưỡng",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/dinh_duong.png"
//     },
//     {
//         "order": "26",
//         "name": "Thẩm mỹ da",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655709747685-THAM_MY_DA.png"
//     },
//     {
//         "order": "27",
//         "name": "Ngoại Tổng Quát",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/tong_quat.png"
//     },
//     {
//         "order": "28",
//         "name": "Dị Ứng - Miễn Dịch Lâm Sàng",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/di_ung_mien_dich_lam_sang.png"
//     },
//     {
//         "order": "29",
//         "name": "Răng Hàm Mặt",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/rang_ham_mat.png"
//     },
//     {
//         "order": "30",
//         "name": "Chấn Thương Chỉnh Hình",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/chan_thuong_chinh_hinh.png"
//     },
//     {
//         "order": "31",
//         "name": "Vô Sinh - Hiếm Muộn",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/KBTS/1651820887681-SAN_KHOA_CHAN_DOAN_TRUOC_SINH.png"
//     },
//     {
//         "order": "32",
//         "name": "Ngoại Ung Bướu",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ung_buou.png"
//     },
//     {
//         "order": "33",
//         "name": "Ung Bướu",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/ung_buou.png"
//     },
//     {
//         "order": "34",
//         "name": "Nam Khoa",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/subjects/nam_khoa.png"
//     },
//     {
//         "order": "35",
//         "name": "Lão Khoa",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/PW/1651820749478-LAO_KHOA.png"
//     },
//     {
//         "order": "36",
//         "name": "Vật Lý Trị Liệu - Phục Hồi Chức Năng",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655708507374-PHUC_HOI_CHUC_NANG.png"
//     },
//     {
//         "order": "37",
//         "name": "Y Học Cổ Truyền",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/default/avatar/ChuyenKhoa.png"
//     },
//     {
//         "order": "38",
//         "name": "Tim Mạch Can Thiệp",
//         "icon": "https://cdn-pkh.longvan.net/medpro-production/umc/subjects/1655710764408-TIM_MACH.png"
//     },
//     {
//         "order": "39",
//         "name": "Tạo hình thẩm mỹ",
//         "icon": "https://cdn.medpro.vn/medpro-production/medpro/subjects/1745302606104-tao_hinh_tham_my.png"
//     },
//     {
//         "order": "40",
//         "name": "Cơ Xương Khớp - Chiropractic",
//         "icon": "https://cdn.medpro.vn/medpro-production/medpro/subjects/1759222134922-chiropractic.png"
//     },
//     {
//         "order": "41",
//         "name": "Nha Khoa",
//         "icon": "https://cdn.medpro.vn/medpro-production/medpro/subjects/1759980701881-NHI.png"
//     },
//     {
//         "order": "42",
//         "name": "Nhi Khoa",
//         "icon": "https://cdn.medpro.vn/medpro-production/medpro/subjects/1759980664918-20251009_102810.png"
//     }
// ]
