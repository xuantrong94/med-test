import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  try {
    const [common, doctorSchedule, navigation, specialty] = await Promise.all([
      import(`../../messages/${locale}/common.json`),
      import(`../../messages/${locale}/doctor-schedule.json`),
      import(`../../messages/${locale}/navigation.json`),
      import(`../../messages/${locale}/specialty.json`),
    ]);

    return {
      locale,
      messages: {
        common: common.default,
        "doctor-schedule": doctorSchedule.default,
        navigation: navigation.default,
        specialty: specialty.default,
      },
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {
      locale,
      messages: {},
    };
  }
});
