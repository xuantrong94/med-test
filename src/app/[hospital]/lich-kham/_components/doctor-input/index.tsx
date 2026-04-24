"use client";

import { FunctionComponent } from "react";
import { useDoctorInput } from "./useDoctorInput";
import { DoctorInputUI } from "./doctor-input.ui";

/**
 * DoctorInput component allows searching for doctors by name.
 * It synchronizes the search term with the "doctor" URL parameter.
 * The input is normalized (removing Vietnamese accents) before updating the URL.
 */
export const DoctorInput: FunctionComponent = () => {
  const {
    inputValue,
    setInputValue,
    handleSearch,
    handleClear,
    handleKeyDown,
    isPending,
  } = useDoctorInput();

  return (
    <DoctorInputUI
      value={inputValue}
      onChange={setInputValue}
      onSearch={handleSearch}
      onClear={handleClear}
      onKeyDown={handleKeyDown}
      isPending={isPending}
    />
  );
};
