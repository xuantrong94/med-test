// Business logic, URL sync

import { useState, useCallback, useTransition } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useRoleSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const roleParam = searchParams.get("role") || "";
  const [prevRoleParam, setPrevRoleParam] = useState(roleParam);
  const [selectedValue, setSelectedValue] = useState<string>(roleParam);
  const [isPending, startTransition] = useTransition();

  if (roleParam !== prevRoleParam) {
    setPrevRoleParam(roleParam);
    setSelectedValue(roleParam);
  }

  const updateUrlParams = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete("role");
      } else {
        params.set("role", value);
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
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
    isPending,
  };
};
