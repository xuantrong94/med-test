"use client";

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useTransition,
} from "react";
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

export const useDateSelector = (
  picker: "week" | "date" = "week",
  urlFormat = "YYYYMMDD"
) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dateParam = searchParams.get("date");

  // Keep track of the last processed dateParam to detect external changes
  const [lastProcessedDateParam, setLastProcessedDateParam] =
    useState(dateParam);
  const [isPending, startTransition] = useTransition();

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(() => {
    if (dateParam) {
      const parsedDate = dayjs(dateParam, urlFormat);
      return parsedDate.isValid() ? parsedDate : dayjs();
    }
    return dayjs();
  });

  // Sync state during render when URL changes externally
  if (dateParam !== lastProcessedDateParam) {
    setLastProcessedDateParam(dateParam);
    if (dateParam) {
      const parsedDate = dayjs(dateParam, urlFormat);
      if (parsedDate.isValid()) {
        const currentDateStr = selectedDate
          ? selectedDate.format(urlFormat)
          : "";
        if (currentDateStr !== dateParam) {
          setSelectedDate(parsedDate);
        }
      }
    }
  }

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
        params.set("date", date.format(urlFormat));
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
    [pathname, router, searchParams, urlFormat]
  );

  useEffect(() => {
    if (!dateParam) {
      updateUrlParams(selectedDate);
    }
  }, [dateParam, selectedDate, updateUrlParams]);

  const handleDateChange = useCallback(
    (date: Dayjs | null) => {
      setSelectedDate(date);
      updateUrlParams(date);
    },
    [updateUrlParams]
  );

  return {
    selectedDate,
    handleDateChange,
    weekInfo,
    isPending,
  };
};
