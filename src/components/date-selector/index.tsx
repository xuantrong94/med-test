"use client";

import { FunctionComponent } from "react";
import { DateSelectorUI } from "./date-selector.ui";
import { useDateSelector } from "./useDateSelector";

type DateSelectorProps = {
  picker?: "date" | "week";
  title?: string;
  showDebugInfo?: boolean;
  urlFormat?: string;
};

export const DateSelector: FunctionComponent<DateSelectorProps> = ({
  picker = "week",
  title,
  showDebugInfo = process.env.NODE_ENV === "development",
  urlFormat,
}) => {
  const { selectedDate, handleDateChange, weekInfo, isPending } =
    useDateSelector(picker, urlFormat);

  return (
    <DateSelectorUI
      picker={picker}
      value={selectedDate}
      onChange={handleDateChange}
      weekInfo={weekInfo}
      title={title}
      showDebugInfo={showDebugInfo}
      isPending={isPending}
    />
  );
};
