import {
  IconContact,
  IconInstructions,
  IconMedicalFacilities,
  IconMedicalServices,
  IconMedproCommunity,
  IconNews,
} from "@/assets/icons/header";

const BASE_URL = "https://beta.medpro.com.vn";

// URL Object Constants - Single source of truth for all URLs
const HOME = {
  key: "home",
  label: "Trang chủ",
  url: BASE_URL + "/",
};

const CO_SO_Y_TE = {
  key: "co-so-y-te",
  label: "Cơ sở y tế",
  url: BASE_URL + "/co-so-y-te",
};

const BENH_VIEN_CONG = {
  key: "benh-vien-cong",
  label: "Bệnh viện công",
  url: BASE_URL + "/co-so-y-te/benh-vien-cong",
};

const BENH_VIEN_TU = {
  key: "benh-vien-tu",
  label: "Bệnh viện tư",
  url: BASE_URL + "/co-so-y-te/benh-vien-tu",
};

const PHONG_KHAM = {
  key: "phong-kham",
  label: "Phòng khám",
  url: BASE_URL + "/co-so-y-te/phong-kham",
};

const PHONG_MACH = {
  key: "phong-mach",
  label: "Phòng mạch",
  url: BASE_URL + "/co-so-y-te/phong-mach",
};

const XET_NGHIEM = {
  key: "xet-nghiem",
  label: "Xét nghiệm",
  url: BASE_URL + "/co-so-y-te/xet-nghiem",
};

const TIEM_CHUNG = {
  key: "tiem-chung",
  label: "Tiêm chủng",
  url: BASE_URL + "/co-so-y-te/tiem-chung",
};

const DICH_VU_Y_TE = {
  key: "dich-vu-y-te",
  label: "Dịch vụ y tế",
  url: BASE_URL + "/dich-vu-y-te",
};

const DAT_KHAM_TAI_CO_SO = {
  key: "dat-kham-tai-co-so",
  label: "Đặt khám tại cơ sở",
  url: BASE_URL + "/dich-vu-y-te/dat-kham-tai-co-so",
};

const DAT_KHAM_CHUYEN_KHOA = {
  key: "dat-kham-chuyen-khoa",
  label: "Đặt khám chuyên khoa",
  url: "/dich-vu-y-te/dat-kham-chuyen-khoa",
};

const GOI_VIDEO_VOI_BAC_SI = {
  key: "goi-video-voi-bac-si",
  label: "Gọi video với bác sĩ",
  url: BASE_URL + "/dich-vu-y-te/goi-video-voi-bac-si",
};

const DAT_LICH_XET_NGHIEM = {
  key: "dat-lich-xet-nghiem",
  label: "Đặt lịch xét nghiệm",
  url: BASE_URL + "/dich-vu-y-te/dat-lich-xet-nghiem",
};

const MUA_THUOC_TAI_AN_KHANG = {
  key: "mua-thuoc-tai-an-khang",
  label: "Mua thuốc tại An Khang",
  url: BASE_URL + "/dich-vu-y-te/mua-thuoc-tai-an-khang",
};

const GIUP_VIEC_CA_NHAN = {
  key: "giup-viec-ca-nhan",
  label: "Giúp việc cá nhân",
  url: BASE_URL + "/dich-vu-y-te/giup-viec-ca-nhan",
};

const KHAM_DOANH_NGHIEP = {
  key: "kham-doanh-nghiep",
  label: "Khám doanh nghiệp",
  url: BASE_URL + "/dich-vu-y-te/kham-doanh-nghiep",
};

const DAT_KHAM_THEO_BAC_SI = {
  key: "dat-kham-theo-bac-si",
  label: "Đặt khám theo bác sĩ",
  url: BASE_URL + "/dich-vu-y-te/dat-kham-theo-bac-si",
};

const DAT_LICH_CHUP_PHIM_NOI_SOI = {
  key: "dat-lich-chup-phim-noi-soi",
  label: "Đặt lịch Chụp phim & Nội soi",
  url: BASE_URL + "/dich-vu-y-te/dat-lich-chup-phim-noi-soi",
};

const THANH_TOAN_VIEN_PHI = {
  key: "thanh-toan-vien-phi",
  label: "Thanh toán Viện phí",
  url: BASE_URL + "/dich-vu-y-te/thanh-toan-vien-phi",
};

const GOI_KHAM_SUC_KHOE = {
  key: "goi-kham-suc-khoe",
  label: "Gói khám sức khỏe",
  url: BASE_URL + "/dich-vu-y-te/goi-kham-suc-khoe",
};

const Y_TE_TAI_NHA = {
  key: "y-te-tai-nha",
  label: "Y tế tại nhà",
  url: BASE_URL + "/dich-vu-y-te/y-te-tai-nha",
};

const DAT_LICH_TIEM_CHUNG = {
  key: "dat-lich-tiem-chung",
  label: "Đặt lịch tiêm chủng",
  url: BASE_URL + "/dich-vu-y-te/dat-lich-tiem-chung",
};

const DAT_KHAM_NGOAI_GIO = {
  key: "dat-kham-ngoai-gio",
  label: "Đặt khám ngoại giờ",
  url: BASE_URL + "/dich-vu-y-te/dat-kham-ngoai-gio",
};

const KHAM_SUC_KHOE_THONG_TU = {
  key: "kham-suc-khoe-thong-tu",
  label: "Khám sức khỏe thông tư",
  url: BASE_URL + "/dich-vu-y-te/kham-suc-khoe-thong-tu",
};

const BAI_KIEM_TRA_TRAM_CAM = {
  key: "bai-kiem-tra-tram-cam",
  label: "Bài kiểm tra trầm cảm",
  url: BASE_URL + "/dich-vu-y-te/bai-kiem-tra-tram-cam",
};

const KHAM_SUC_KHOE_DOANH_NGHIEP = {
  key: "kham-suc-khoe-doanh-nghiep",
  label: "Khám sức khoẻ doanh nghiệp",
  url: BASE_URL + "/kham-suc-khoe-doanh-nghiep",
};

const TIN_TUC = {
  key: "tin-tuc",
  label: "Tin tức",
  url: BASE_URL + "/tin-tuc",
};

const TIN_DICH_VU = {
  key: "tin-dich-vu",
  label: "Tin dịch vụ",
  url: BASE_URL + "/tin-tuc/tin-dich-vu",
};

const TIN_Y_TE = {
  key: "tin-y-te",
  label: "Tin y tế",
  url: BASE_URL + "/tin-tuc/tin-y-te",
};

const Y_HOC_THUONG_THUC = {
  key: "y-hoc-thuong-thuc",
  label: "Y học thường thức",
  url: BASE_URL + "/tin-tuc/y-hoc-thuong-thuc",
};

const HUONG_DAN = {
  key: "huong-dan",
  label: "Hướng dẫn",
  url: BASE_URL + "/huong-dan/cong-dong-hoi-dap-kham-chua-benh",
};

const CAI_DAT_UNG_DUNG = {
  key: "cai-dat-ung-dung",
  label: "Tải ứng dụng",
  url: BASE_URL + "/huong-dan/cai-dat-ung-dung",
};

const DAT_LICH_KHAM = {
  key: "dat-lich-kham",
  label: "Đặt lịch khám",
  url: BASE_URL + "/huong-dan/dat-lich-kham",
};

const TU_VAN_KHAM_BENH_QUA_VIDEO = {
  key: "tu-van-kham-benh-qua-video",
  label: "Tư vấn khám bệnh qua video",
  url: BASE_URL + "/huong-dan/tu-van-kham-benh-qua-video",
};

const QUY_TRINH_HOAN_PHI = {
  key: "quy-trinh-hoan-phi",
  label: "Quy trình hoàn phí",
  url: BASE_URL + "/huong-dan/quy-trinh-hoan-phi",
};

const CAU_HOI_THUONG_GAP = {
  key: "cau-hoi-thuong-gap",
  label: "Câu hỏi thường gặp",
  url: BASE_URL + "/huong-dan/cau-hoi-thuong-gap",
};

const QUY_TRINH_DI_KHAM = {
  key: "quy-trinh-di-kham",
  label: "Quy trình đi khám",
  url: BASE_URL + "/huong-dan/quy-trinh-di-kham",
};

const CONG_DONG_HOI_DAP_KHAM_CHUA_BENH = {
  key: "cong-dong-hoi-dap-kham-chua-benh",
  label: "Cộng đồng hỏi đáp khám chữa bệnh",
  url: BASE_URL + "/huong-dan/cong-dong-hoi-dap-kham-chua-benh",
};

const LIEN_HE_HOP_TAC = {
  key: "lien-he-hop-tac",
  label: "Liên hệ hợp tác",
  url: BASE_URL + "/lien-he-hop-tac",
};

const CO_SO_Y_TE_HOP_TAC = {
  key: "co-so-y-te-hop-tac",
  label: "Cơ sở y tế",
  url: BASE_URL + "/lien-he-hop-tac/co-so-y-te",
};

const PHONG_MACH_HOP_TAC = {
  key: "phong-mach-hop-tac",
  label: "Phòng mạch",
  url: BASE_URL + "/lien-he-hop-tac/phong-mach",
};

const QUANG_CAO = {
  key: "quang-cao",
  label: "Quảng cáo",
  url: BASE_URL + "/lien-he-hop-tac/quang-cao",
};

const TUYEN_DUNG = {
  key: "tuyen-dung",
  label: "Tuyển Dụng",
  url: BASE_URL + "/lien-he-hop-tac/tuyen-dung",
};

const VE_MEDPRO = {
  key: "ve-medpro",
  label: "Về Medpro",
  url: BASE_URL + "/lien-he-hop-tac/ve-medpro",
};

const DIEU_KHOAN_DICH_VU = {
  key: "dieu-khoan-dich-vu",
  label: "Điều khoản dịch vụ",
  url: BASE_URL + "/dieu-khoan-dich-vu",
};

const CHINH_SACH_BAO_MAT = {
  key: "chinh-sach-bao-mat",
  label: "Chính sách bảo mật",
  url: BASE_URL + "/chinh-sach-bao-mat",
};

const QUY_DINH_SU_DUNG = {
  key: "quy-dinh-su-dung",
  label: "Quy định sử dụng",
  url: BASE_URL + "/quy-dinh-su-dung",
};

// URL Map for quick lookup by key
const URL_MAP: Record<string, { key: string; label: string; url: string }> = {
  home: HOME,
  "co-so-y-te": CO_SO_Y_TE,
  "benh-vien-cong": BENH_VIEN_CONG,
  "benh-vien-tu": BENH_VIEN_TU,
  "phong-kham": PHONG_KHAM,
  "phong-mach": PHONG_MACH,
  "xet-nghiem": XET_NGHIEM,
  "tiem-chung": TIEM_CHUNG,
  "dich-vu-y-te": DICH_VU_Y_TE,
  "dat-kham-tai-co-so": DAT_KHAM_TAI_CO_SO,
  "dat-kham-chuyen-khoa": DAT_KHAM_CHUYEN_KHOA,
  "goi-video-voi-bac-si": GOI_VIDEO_VOI_BAC_SI,
  "dat-lich-xet-nghiem": DAT_LICH_XET_NGHIEM,
  "mua-thuoc-tai-an-khang": MUA_THUOC_TAI_AN_KHANG,
  "giup-viec-ca-nhan": GIUP_VIEC_CA_NHAN,
  "kham-doanh-nghiep": KHAM_DOANH_NGHIEP,
  "dat-kham-theo-bac-si": DAT_KHAM_THEO_BAC_SI,
  "dat-lich-chup-phim-noi-soi": DAT_LICH_CHUP_PHIM_NOI_SOI,
  "thanh-toan-vien-phi": THANH_TOAN_VIEN_PHI,
  "goi-kham-suc-khoe": GOI_KHAM_SUC_KHOE,
  "y-te-tai-nha": Y_TE_TAI_NHA,
  "dat-lich-tiem-chung": DAT_LICH_TIEM_CHUNG,
  "dat-kham-ngoai-gio": DAT_KHAM_NGOAI_GIO,
  "kham-suc-khoe-thong-tu": KHAM_SUC_KHOE_THONG_TU,
  "bai-kiem-tra-tram-cam": BAI_KIEM_TRA_TRAM_CAM,
  "kham-suc-khoe-doanh-nghiep": KHAM_SUC_KHOE_DOANH_NGHIEP,
  "tin-tuc": TIN_TUC,
  "tin-dich-vu": TIN_DICH_VU,
  "tin-y-te": TIN_Y_TE,
  "y-hoc-thuong-thuc": Y_HOC_THUONG_THUC,
  "huong-dan": HUONG_DAN,
  "cai-dat-ung-dung": CAI_DAT_UNG_DUNG,
  "dat-lich-kham": DAT_LICH_KHAM,
  "tu-van-kham-benh-qua-video": TU_VAN_KHAM_BENH_QUA_VIDEO,
  "quy-trinh-hoan-phi": QUY_TRINH_HOAN_PHI,
  "cau-hoi-thuong-gap": CAU_HOI_THUONG_GAP,
  "quy-trinh-di-kham": QUY_TRINH_DI_KHAM,
  "cong-dong-hoi-dap-kham-chua-benh": CONG_DONG_HOI_DAP_KHAM_CHUA_BENH,
  "lien-he-hop-tac": LIEN_HE_HOP_TAC,
  "co-so-y-te-hop-tac": CO_SO_Y_TE_HOP_TAC,
  "phong-mach-hop-tac": PHONG_MACH_HOP_TAC,
  "quang-cao": QUANG_CAO,
  "tuyen-dung": TUYEN_DUNG,
  "ve-medpro": VE_MEDPRO,
  "dieu-khoan-dich-vu": DIEU_KHOAN_DICH_VU,
  "chinh-sach-bao-mat": CHINH_SACH_BAO_MAT,
  "quy-dinh-su-dung": QUY_DINH_SU_DUNG,
};

const HEADER_MENU = [
  {
    icon: IconMedicalFacilities,
    ...CO_SO_Y_TE,
    children: [
      "benh-vien-cong",
      "benh-vien-tu",
      "phong-kham",
      "phong-mach",
      "xet-nghiem",
      "tiem-chung",
    ],
  },
  {
    icon: IconMedicalServices,
    ...DICH_VU_Y_TE,
    children: [
      "dat-kham-tai-co-so",
      "dat-kham-chuyen-khoa",
      "goi-video-voi-bac-si",
      "dat-lich-xet-nghiem",
      "mua-thuoc-tai-an-khang",
      "giup-viec-ca-nhan",
      "kham-doanh-nghiep",
      "dat-kham-theo-bac-si",
      "dat-lich-chup-phim-noi-soi",
      "thanh-toan-vien-phi",
      "goi-kham-suc-khoe",
      "y-te-tai-nha",
      "dat-lich-tiem-chung",
      "dat-kham-ngoai-gio",
      "kham-suc-khoe-thong-tu",
      "bai-kiem-tra-tram-cam",
    ],
  },
  {
    icon: IconMedicalServices,
    ...KHAM_SUC_KHOE_DOANH_NGHIEP,
    children: [],
  },
  {
    icon: IconNews,
    ...TIN_TUC,
    children: ["tin-dich-vu", "tin-y-te", "y-hoc-thuong-thuc"],
  },
  {
    icon: IconInstructions,
    ...HUONG_DAN,
    children: [
      "cai-dat-ung-dung",
      "dat-lich-kham",
      "tu-van-kham-benh-qua-video",
      "quy-trinh-hoan-phi",
      "cau-hoi-thuong-gap",
      "quy-trinh-di-kham",
      "cong-dong-hoi-dap-kham-chua-benh",
    ],
  },
  {
    icon: IconContact,
    ...LIEN_HE_HOP_TAC,
    children: [
      "co-so-y-te-hop-tac",
      "phong-mach-hop-tac",
      "quang-cao",
      "tuyen-dung",
      "ve-medpro",
    ],
  },
];

const medproCommunityMenu = {
  icon: IconMedproCommunity,
  key: "community",
  label: "Tham gia cộng đồng Medpro",
  url: "https://www.facebook.com/groups/reviewbenhvien",
  children: [],
};

const HEADER_MENU_WITH_COMMUNITY = [...HEADER_MENU, medproCommunityMenu];

// Helper function to get URL details by key - using URL_MAP for O(1) lookup
const getUrlByKey = (
  key: string
): { key: string; label: string; url: string } | null => {
  return URL_MAP[key] || null;
};

// Backwards compatibility - create URLS array from constants for any legacy code
const URLS = Object.values(URL_MAP);

export {
  URLS,
  HEADER_MENU,
  HEADER_MENU_WITH_COMMUNITY,
  getUrlByKey,
  // Export all individual constants for direct usage
  HOME,
  CO_SO_Y_TE,
  BENH_VIEN_CONG,
  BENH_VIEN_TU,
  PHONG_KHAM,
  PHONG_MACH,
  XET_NGHIEM,
  TIEM_CHUNG,
  DICH_VU_Y_TE,
  DAT_KHAM_TAI_CO_SO,
  DAT_KHAM_CHUYEN_KHOA,
  GOI_VIDEO_VOI_BAC_SI,
  DAT_LICH_XET_NGHIEM,
  MUA_THUOC_TAI_AN_KHANG,
  GIUP_VIEC_CA_NHAN,
  KHAM_DOANH_NGHIEP,
  DAT_KHAM_THEO_BAC_SI,
  DAT_LICH_CHUP_PHIM_NOI_SOI,
  THANH_TOAN_VIEN_PHI,
  GOI_KHAM_SUC_KHOE,
  Y_TE_TAI_NHA,
  DAT_LICH_TIEM_CHUNG,
  DAT_KHAM_NGOAI_GIO,
  KHAM_SUC_KHOE_THONG_TU,
  BAI_KIEM_TRA_TRAM_CAM,
  KHAM_SUC_KHOE_DOANH_NGHIEP,
  TIN_TUC,
  TIN_DICH_VU,
  TIN_Y_TE,
  Y_HOC_THUONG_THUC,
  HUONG_DAN,
  CAI_DAT_UNG_DUNG,
  DAT_LICH_KHAM,
  TU_VAN_KHAM_BENH_QUA_VIDEO,
  QUY_TRINH_HOAN_PHI,
  CAU_HOI_THUONG_GAP,
  QUY_TRINH_DI_KHAM,
  CONG_DONG_HOI_DAP_KHAM_CHUA_BENH,
  LIEN_HE_HOP_TAC,
  CO_SO_Y_TE_HOP_TAC,
  PHONG_MACH_HOP_TAC,
  QUANG_CAO,
  TUYEN_DUNG,
  VE_MEDPRO,
  DIEU_KHOAN_DICH_VU,
  CHINH_SACH_BAO_MAT,
  QUY_DINH_SU_DUNG,
};

export const FOOTER_MOBILE = [
  VE_MEDPRO,
  {
    key: "huong-dan",
    label: "Hướng dẫn",
    items: [
      CAI_DAT_UNG_DUNG,
      DAT_LICH_KHAM,
      TU_VAN_KHAM_BENH_QUA_VIDEO,
      QUY_TRINH_HOAN_PHI,
      CAU_HOI_THUONG_GAP,
      QUY_TRINH_DI_KHAM,
      CONG_DONG_HOI_DAP_KHAM_CHUA_BENH,
    ],
  },
  {
    key: "lien-he-hop-tac",
    label: "Liên hệ hợp tác",
    items: [CO_SO_Y_TE, PHONG_MACH, KHAM_DOANH_NGHIEP, QUANG_CAO, TUYEN_DUNG],
  },
  DIEU_KHOAN_DICH_VU,
  CHINH_SACH_BAO_MAT,
  QUY_DINH_SU_DUNG,
];

const FOOTER_DICH_VU_Y_TE = {
  label: "Dịch vụ y tế",
  items: [
    DAT_KHAM_TAI_CO_SO,
    DAT_KHAM_CHUYEN_KHOA,
    GOI_VIDEO_VOI_BAC_SI,
    DAT_LICH_XET_NGHIEM,
    MUA_THUOC_TAI_AN_KHANG,
    GIUP_VIEC_CA_NHAN,
    KHAM_DOANH_NGHIEP,
    DAT_KHAM_THEO_BAC_SI,
    DAT_LICH_CHUP_PHIM_NOI_SOI,
    THANH_TOAN_VIEN_PHI,
    GOI_KHAM_SUC_KHOE,
    Y_TE_TAI_NHA,
    DAT_LICH_TIEM_CHUNG,
    DAT_KHAM_NGOAI_GIO,
    KHAM_SUC_KHOE_THONG_TU,
    BAI_KIEM_TRA_TRAM_CAM,
  ],
};

const FOOTER_CO_SO_Y_TE = {
  label: "Cơ sở y tế",
  items: [
    BENH_VIEN_CONG,
    BENH_VIEN_TU,
    PHONG_KHAM,
    PHONG_MACH,
    XET_NGHIEM,
    TIEM_CHUNG,
  ],
};

const FOOTER_HUONG_DAN = {
  label: "Hướng dẫn",
  items: [
    CAI_DAT_UNG_DUNG,
    DAT_LICH_KHAM,
    TU_VAN_KHAM_BENH_QUA_VIDEO,
    QUY_TRINH_HOAN_PHI,
    CAU_HOI_THUONG_GAP,
    QUY_TRINH_DI_KHAM,
    CONG_DONG_HOI_DAP_KHAM_CHUA_BENH,
  ],
};

const FOOTER_TINTUC = {
  label: "Tin tức",
  items: [TIN_DICH_VU, TIN_Y_TE, Y_HOC_THUONG_THUC],
};

const FOOTER_VE_MEDPRO = {
  label: "Về Medpro",
  items: [VE_MEDPRO, DIEU_KHOAN_DICH_VU, CHINH_SACH_BAO_MAT, QUY_DINH_SU_DUNG],
};

export const FOOTER_LIEN_HE_HOP_TAC = {
  label: "Liên hệ hợp tác",
  items: [CO_SO_Y_TE_HOP_TAC, PHONG_MACH_HOP_TAC, QUANG_CAO, TUYEN_DUNG],
};

export const FOOTER_DESKTOP = [
  FOOTER_DICH_VU_Y_TE,
  FOOTER_CO_SO_Y_TE,
  FOOTER_HUONG_DAN,
  FOOTER_LIEN_HE_HOP_TAC,
  FOOTER_TINTUC,
  FOOTER_VE_MEDPRO,
];
