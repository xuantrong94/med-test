"use client";

import React from "react";
import Searchbar from "@/components/search-bar";
import { useSpecialtyStore } from "@/shared/stores/use-specialty.store";

export default function SpecialtySearchbar() {
  const setSearchTerm = useSpecialtyStore((state) => state.setSearchTerm);

  return (
    <Searchbar onSearchChange={(val) => setSearchTerm(val)} />
  );
}
