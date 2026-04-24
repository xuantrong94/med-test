import type common from "../../messages/vi/common.json";
import type doctorSchedule from "../../messages/vi/doctor-schedule.json";
import type navigation from "../../messages/vi/navigation.json";

type Messages = {
  common: typeof common;
  "doctor-schedule": typeof doctorSchedule;
  navigation: typeof navigation;
};

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
