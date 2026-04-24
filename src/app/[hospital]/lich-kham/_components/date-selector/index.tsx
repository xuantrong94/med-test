"use client";

import { FunctionComponent } from "react";
import { DateSelector as SharedDateSelector } from "@/components/date-selector";

type DateSelectorProps = {
  picker?: "date" | "week";
};

export const DateSelector: FunctionComponent<DateSelectorProps> = ({
  picker = "week",
}) => {
  return <SharedDateSelector picker={picker} />;
};
