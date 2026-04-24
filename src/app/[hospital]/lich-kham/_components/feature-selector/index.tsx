"use client";

import { FunctionComponent } from "react";
import { useFeatureSelector } from "./useFeatureSelector";
import { FeatureSelectorUI } from "./feature-selector.ui";
import { Feature } from "@/types/feature";

export const FeatureSelector: FunctionComponent<{ features: Feature[] }> = ({
  features,
}) => {
  const { selectedValue, handleChange } = useFeatureSelector();

  return (
    <FeatureSelectorUI
      selectedValue={selectedValue}
      onChange={handleChange}
      features={features}
    />
  );
};
