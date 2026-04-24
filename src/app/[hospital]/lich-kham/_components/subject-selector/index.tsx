"use client";

import { FunctionComponent } from "react";
import { Subject } from "@/types/subject";
import { useSubjectSelector } from "./useSubjectSeletor";
import { SubjectSelectorUI } from "./subject-selector.ui";

type SubjectSelectorProps = {
  subjects: { id: string; name: string; imageUrl?: string | null }[];
};

export const SubjectSelector: FunctionComponent<SubjectSelectorProps> = ({
  subjects,
}) => {
  const { selectedValue, handleChange, isPending } = useSubjectSelector();

  return (
    <SubjectSelectorUI
      subjects={subjects}
      selectedValue={selectedValue}
      onChange={handleChange}
      isPending={isPending}
    />
  );
};
