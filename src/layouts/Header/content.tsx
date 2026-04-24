import {
  IconFb,
  IconTiktok,
  IconZalo,
  IconYoutube,
} from "@/assets/icons/socials";
import { IconFlagUK, IconFlagVN, IconFlagKH } from "@/assets/icons/flags";
import { FlagOption } from "./types";
import FlagOptionItem from "./components/FlagOptionItem";
import { IconEmail, IconHotline } from "@/assets/icons/header";

export const SOCIALS = [
  {
    key: "facebook",
    icon: IconFb,
    url: "https://www.facebook.com/MedPro.vn",
    label: "Facebook",
  },
  {
    key: "tiktok",
    icon: IconTiktok,
    url: "https://www.tiktok.com/@medpro.vn",
    label: "TikTok",
  },
  {
    key: "zalo",
    icon: IconZalo,
    url: "https://zalo.me/medpro.vn",
    label: "Zalo",
  },
  {
    key: "youtube",
    icon: IconYoutube,
    url: "https://www.youtube.com/c/MedProvn",
    label: "YouTube",
  },
];

export const HEADER_SUPPORTS = [
  {
    key: "facebook",
    icon: IconFb,
    url: "https://www.facebook.com/MedPro.vn",
    label: "Hỗ trợ Facebook",
  },
  {
    key: "zalo",
    icon: IconZalo,
    url: "https://zalo.me/medpro.vn",
    label: "Hỗ trợ Zalo",
  },
  {
    key: "hotline",
    icon: IconHotline,
    url: "tel:+18006808",
    label: "Hỗ trợ tư vấn đặt khám",
  },
  {
    key: "email",
    icon: IconEmail,
    url: "mailto:support@medpro.vn",
    label: "Email: support@medpro.vn",
  },
];

export const flagOptions: FlagOption[] = [
  {
    value: "en",
    flag: IconFlagUK,
    country: "English",
    displayText: "English",
  },
  {
    value: "vi",
    flag: IconFlagVN,
    country: "Vietnam",
    displayText: "Tiếng Việt",
  },
  {
    value: "km",
    flag: IconFlagKH,
    country: "Khmer",
    displayText: "Khmer",
  },
];

export const getSelectOptions = () => {
  return flagOptions.map(option => ({
    value: option.value,
    label: (
      <FlagOptionItem
        img={option.flag}
        text={option.displayText}
      />
    ),
    flag: option.flag,
    country: option.country,
  }));
};
