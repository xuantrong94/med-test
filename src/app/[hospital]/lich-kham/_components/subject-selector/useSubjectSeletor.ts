// Business logic, URL sync

import { useState, useCallback, useTransition } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useSubjectSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawSubjectIdParam = searchParams.get("subjectId");
  const subjectIdParam = rawSubjectIdParam
    ? rawSubjectIdParam.split(",")[0]
    : "";
  const [prevSubjectIdParam, setPrevSubjectIdParam] = useState(subjectIdParam);
  const [selectedValue, setSelectedValue] = useState<string>(subjectIdParam);
  const [isPending, startTransition] = useTransition();

  if (subjectIdParam !== prevSubjectIdParam) {
    setPrevSubjectIdParam(subjectIdParam);
    setSelectedValue(subjectIdParam);
  }

  const updateUrlParams = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value || value === "") {
        params.delete("subjectId");
      } else {
        params.set("subjectId", value);
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [pathname, router, searchParams]
  );

  const handleChange = useCallback(
    (value: string) => {
      const newValue = value || "";
      setSelectedValue(newValue);
      updateUrlParams(newValue);
    },
    [updateUrlParams]
  );

  return {
    selectedValue,
    handleChange,
    isPending,
  };
};
