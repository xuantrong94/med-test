"use client";

import { FunctionComponent } from "react";
import { useRoleSelector } from "./useRoleSelector";
import { RoleSelectorUI } from "./role-selector.ui";

export type RoleSelectorProps = {
  options?: { id: string; type: string; name: string }[];
};

export const RoleSelector: FunctionComponent<RoleSelectorProps> = ({
  options = [],
}) => {
  const { selectedValue, handleChange, isPending } = useRoleSelector();

  return (
    <RoleSelectorUI
      selectedValue={selectedValue}
      onChange={handleChange}
      options={options}
      isPending={isPending}
    />
  );
};
