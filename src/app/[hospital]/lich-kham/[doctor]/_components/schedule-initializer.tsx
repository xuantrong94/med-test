"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ProcessedWeeklyDay } from "../_api/types";
import { isPastTimeSlot } from "@/lib/utils/date/basic";

type Props = {
  days: ProcessedWeeklyDay[];
};

export const ScheduleInitializer: React.FC<Props> = ({ days }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // If we already have a timeId in URL, don't do anything
    if (searchParams.get("timeId")) return;

    // Find the first available and future time slot
    for (const day of days) {
      if (!day.shifts || day.shifts.length === 0) continue;

      // day.date is YYYYMMDD, convert to DDMMYYYY for isPastTimeSlot
      const ddmmyyyy =
        day.date.substring(6, 8) +
        day.date.substring(4, 6) +
        day.date.substring(0, 4);

      const firstValidShift = day.shifts.find(
        shift =>
          shift.status === "AVAILABLE" &&
          !isPastTimeSlot(ddmmyyyy, shift.startTime, 30)
      );

      if (firstValidShift) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("timeId", firstValidShift.timeId);

        // Use replace to avoid polluting history and scroll:false to maintain user position
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        break;
      }
    }
  }, [days, searchParams, pathname, router]);

  return null; // This is a logic-only component
};
