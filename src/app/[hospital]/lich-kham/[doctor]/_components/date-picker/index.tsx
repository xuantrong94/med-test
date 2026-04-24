"use client";

import { FunctionComponent } from "react";
import { DateSelector } from "@/components/date-selector";

export const DatePicker: FunctionComponent = () => {
  return (
    <DateSelector
      picker='date'
      title='Ngày khám'
    />
  );
};
