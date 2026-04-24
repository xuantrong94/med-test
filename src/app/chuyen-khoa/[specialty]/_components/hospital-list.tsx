"use client";

import HospitalCard from "./hospital-card";
// [HIDDEN] SpecialtyCard — tab chuyển đổi đã ẩn, giữ lại để bật lại sau
// import SpecialtyCard from "./specialty-card";
import styles from "../specialty-detail.module.scss";
import type { PaginationProps } from "antd/es/pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import CustomPagination from "@/components/custom/pagination";
// [HIDDEN] Icons cho tabs — ẩn tạm
// import { Hospital, BookOpen } from "lucide-react";

const PAGE_SIZE = 12;

interface PrunedHospital {
  id: string;
  hospitalAddress: string;
  cta: {
    name: string;
    partnerId: string;
    treeId: string;
    subjectId: string;
    serviceId: string | null;
    doctorId: string | null;
    roomId: string | null;
  };
  partner: {
    name: string;
    slug: string;
    address: string;
    circleLogo: string;
  };
}

export default function HospitalList({
  paginatedResults,
  total,
  searchKey,
}: {
  paginatedResults: PrunedHospital[];
  total: number;
  searchKey: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pageParam = searchParams.get("page");

  // [HIDDEN] Tab switching logic — ẩn tạm, giữ code để bật lại sau
  // const tabParam = searchParams.get("tab") || "hospitals";
  // const onTabChange = (key: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("tab", key);
  //   params.delete("page");
  //   router.push(`${pathname}?${params.toString()}`, { scroll: false });
  // };

  const current = pageParam ? Number(pageParam) : 1;

  const onPageChange: PaginationProps["onChange"] = page => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.det_hospitalListWrapper}>
      {/* [HIDDEN] Tabs component — ẩn tạm chức năng chuyển tab */}
      {/* Chỉ hiển thị danh sách bệnh viện */}
      <div className={styles.det_hospitalListGrid}>
        {paginatedResults.map(item => (
          <HospitalCard
            key={item.id}
            searchKey={searchKey}
            {...item}
          />
        ))}
      </div>

      {total > PAGE_SIZE && (
        <div className={styles.det_paginationContainer}>
          <CustomPagination
            current={current}
            total={total}
            onChange={onPageChange}
            pageSize={PAGE_SIZE}
          />
        </div>
      )}
    </div>
  );
}
