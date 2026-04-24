"use client";

import React, { useState, useCallback, useTransition } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import normalize from "@/lib/utils/normalize";

export const useDoctorInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const doctorParam = searchParams.get("doctor") || "";
  const [prevDoctorParam, setPrevDoctorParam] = useState(doctorParam);
  const [inputValue, setInputValue] = useState(doctorParam);
  const [isPending, startTransition] = useTransition();

  if (doctorParam !== prevDoctorParam) {
    setPrevDoctorParam(doctorParam);
    setInputValue(doctorParam);
  }

  const updateUrl = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        // Normalize: remove Vietnamese accents and convert to lowercase
        const normalizedValue = normalize(value.trim());
        // URLSearchParams handles standard encoding (e.g., spaces to %20)
        params.set("doctor", normalizedValue);
      } else {
        params.delete("doctor");
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [pathname, router, searchParams]
  );

  const handleSearch = () => {
    updateUrl(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    updateUrl("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return {
    inputValue,
    setInputValue,
    handleSearch,
    handleClear,
    handleKeyDown,
    isPending,
  };
};
