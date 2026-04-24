import { useCallback, useMemo, startTransition } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import "dayjs/locale/vi";

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.locale("vi");

const getWeekRange = (date: Dayjs) => {
  const startDate = date.weekday(0);
  const endDate = date.weekday(6);

  return {
    startDate: startDate.format("DD-MM-YYYY"),
    endDate: endDate.format("DD-MM-YYYY"),
    weekNumber: date.isoWeek(),
    year: date.year(),
  };
};

export const useDateSelector = (picker: "week" | "date" = "week") => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dateParam = searchParams.get("date");

  const selectedDate = useMemo(() => {
    if (dateParam) {
      const parsedDate = dayjs(dateParam, "YYYYMMDD");
      return parsedDate.isValid() ? parsedDate : dayjs();
    }
    return dayjs();
  }, [dateParam]);

  const weekInfo = useMemo(() => {
    if (picker === "week" && selectedDate) {
      return getWeekRange(selectedDate);
    }
    return null;
  }, [picker, selectedDate]);

  const updateUrlParams = useCallback(
    (date: Dayjs | null) => {
      const params = new URLSearchParams(searchParams.toString());

      if (date) {
        params.set("date", date.format("YYYYMMDD"));
      } else {
        params.delete("date");
      }

      // Cleanup old legacy parameters
      params.delete("startDate");
      params.delete("endDate");

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [pathname, router, searchParams]
  );

  const handleDateChange = useCallback(
    (date: Dayjs | null) => {
      updateUrlParams(date);
    },
    [updateUrlParams]
  );

  return {
    selectedDate,
    handleDateChange,
    weekInfo,
  };
};
