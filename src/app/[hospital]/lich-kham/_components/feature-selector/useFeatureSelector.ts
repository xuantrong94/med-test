// Business logic, URL sync

import { useState, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useFeatureSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const featureIdParam = searchParams.get("featureId") || "";
  const [prevFeatureIdParam, setPrevFeatureIdParam] = useState(featureIdParam);
  const [selectedValue, setSelectedValue] = useState<string>(featureIdParam);

  if (featureIdParam !== prevFeatureIdParam) {
    setPrevFeatureIdParam(featureIdParam);
    setSelectedValue(featureIdParam);
  }

  const updateUrlParams = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete("featureId");
      } else {
        params.set("featureId", value);
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const handleChange = useCallback(
    (value: string) => {
      setSelectedValue(value);
      updateUrlParams(value);
    },
    [updateUrlParams]
  );

  return {
    selectedValue,
    handleChange,
  };
};
