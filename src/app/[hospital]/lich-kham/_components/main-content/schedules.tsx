"use client";

import { useState } from "react";
import { ScheduleData } from "../../_types/schedule.types";
import { ScheduleTable } from "../schedule-table";
import { EmptySchedule } from "../empty-schedule";
import { sanitizeId } from "../../_helpers";

import { Subject } from "@/types/subject";

export const Schedules = ({
  data,
  subjects,
  date,
  standardizedDates,
}: {
  data: ScheduleData[];
  subjects?: { id: string; name: string }[];
  date?: string;
  standardizedDates?: string[];
}) => {
  const [openFeatureId, setOpenFeatureId] = useState<string | null>(
    data.length > 0 ? data[0].feature.id : null
  );

  if (data.length === 0) {
    return <EmptySchedule />;
  }

  return (
    <div>
      {data.map((item, index) => (
        <ScheduleTable
          key={sanitizeId(item.feature.id, `feature-${index}`)}
          data={item}
          subjects={subjects}
          openFeatureId={openFeatureId}
          onToggleFeature={setOpenFeatureId}
          date={date}
          standardizedDates={standardizedDates}
        />
      ))}
    </div>
  );
};
