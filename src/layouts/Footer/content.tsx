import {
  IconBell,
  IconBellActive,
  IconBooking,
  IconBookingActive,
  IconFooterLogo,
  IconGuide,
  IconGuideActive,
  IconHome,
  IconHomeActive,
  IconUser,
  IconUserActive,
} from "@/assets/icons/footer";
import {
  ImgAnnounced,
  ImgAppStore,
  ImgGooglePlay,
  ImgRegistered,
} from "@/assets/images/footer";
import {
  MEDPRO_ADDRESS,
  MEDPRO_EMAIL,
  MEDPRO_PHONE,
  MEDPRO_PHONE_HREF,
  MEDPRO_WEBSITE,
} from "@/shared/constants/contacts";

export const MEDPRO_INFO = {
  LOGO: IconFooterLogo,
  ADDRESS: MEDPRO_ADDRESS,
  WEBSITE: MEDPRO_WEBSITE,
  EMAIL: MEDPRO_EMAIL,
  PHONE: MEDPRO_PHONE,
  PHONE_HREF: MEDPRO_PHONE_HREF,
};

const ANNOUNCED = {
  src: ImgAnnounced,
  alt: "MedPro is announced",
  href: "http://online.gov.vn/Home/WebDetails/44668?AspxAutoDetectCookieSupport=1",
};

const REGISTERED = {
  src: ImgRegistered,
  alt: "MedPro is registered",
  href: "http://online.gov.vn/Home/WebDetails/44209",
};

const APP_STORE = {
  src: ImgAppStore,
  alt: "Download on the App Store",
  href: "https://apps.apple.com/us/app/id1481561748",
};

const GOOGLE_PLAY = {
  src: ImgGooglePlay,
  alt: "Get it on Google Play",
  href: "https://play.google.com/store/apps/details?id=vn.com.medpro",
};

export const NAV_MENU = [
  {
    text: "Trang chủ",
    icon: IconHome,
    iconActive: IconHomeActive,
    href: "/",
  },
  {
    text: "Hướng dẫn",
    icon: IconGuide,
    iconActive: IconGuideActive,
    href: "https://medpro.vn/huong-dan/cong-dong-hoi-dap-kham-chua-benh",
  },
  {
    text: "Phiếu khám",
    icon: IconBooking,
    iconActive: IconBookingActive,
    href: "https://medpro.vn/user?key=bills",
  },
  {
    text: "Thông báo",
    icon: IconBell,
    iconActive: IconBellActive,
    href: "https://medpro.vn/user?key=notifications",
  },
  {
    text: "Hồ sơ",
    icon: IconUser,
    iconActive: IconUserActive,
    href: "https://medpro.vn/user?key=records",
  },
];

export const MEDPRO_BADGES = [ANNOUNCED, REGISTERED, APP_STORE, GOOGLE_PLAY];

export const COPYRIGHT_TEXT = `© 2020 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng PKH.`;
