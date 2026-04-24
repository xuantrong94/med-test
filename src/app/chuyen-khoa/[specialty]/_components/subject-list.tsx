"use client";

import { ResultItem } from "@/types/result.item";
import SpecialtyCard from "./specialty-card";
import styles from "../specialty-detail.module.scss";
import type { PaginationProps } from "antd/es/pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import CustomPagination from "@/components/custom/pagination";

const PAGE_SIZE = 12;

export default function SubjectList({
  results,
  searchKey,
}: {
  results: ResultItem[];
  searchKey: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pageParam = searchParams.get("page");

  const current = pageParam ? Number(pageParam) : 1;

  const onPageChange: PaginationProps["onChange"] = page => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const startIndex = (current - 1) * PAGE_SIZE;
  const paginatedResults = results.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className={styles.det_hospitalListWrapper}>
      <div className={styles.det_hospitalListGrid}>
        {paginatedResults.map(item => (
          <SpecialtyCard
            key={item.id}
            searchKey={searchKey}
            {...item}
          />
        ))}
      </div>

      {results.length > PAGE_SIZE && (
        <div className={styles.det_paginationContainer}>
          <CustomPagination
            current={current}
            total={results.length}
            onChange={onPageChange}
            pageSize={PAGE_SIZE}
          />
        </div>
      )}
    </div>
  );
}
