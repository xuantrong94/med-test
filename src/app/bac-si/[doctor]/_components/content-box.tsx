"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import Button from "antd/es/button";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import MedicineBoxOutlined from "@ant-design/icons/lib/icons/MedicineBoxOutlined";
import styles from "../[doctor].module.scss";
import DoctorList from "./doctor-list";
import DoctorListSkeleton from "./doctor-list/doctor-list-skeleton";
import InfoBox from "./info-box";
import useGetDoctors from "../_hooks/useGetDoctors";
import { PaginationProps } from "antd/es/pagination/Pagination";
import CustomPagination from "@/components/custom/pagination";
import {
  getSpecialtyId as getId,
  specialtyOptions as subjectOptions,
} from "@/shared/constants/specialties";
import Select from "./select";
import Searchbar from "@/components/search-bar";

export function ContentBox() {
  // 1. Lấy tham số từ URL trước
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pageParam = searchParams.get("page");
  const doctorParam = pathname.split("/")[2] || "";
  const subject = getId(doctorParam);

  const [current, setCurrent] = useState(pageParam ? Number(pageParam) : 1);
  const [searchDoctor, setSearchDoctor] = useState<string>("");

  const { data, isLoading, isError } = useGetDoctors(
    current,
    searchDoctor,
    subject,
    ""
  );

  const { results, total } = data || { results: [], total: 0 };

  const onChange: PaginationProps["onChange"] = page => {
    setCurrent(page);
    router.push(`?page=${page}`);
  };
  const handleSubjectChange = (value: string) => {
    const slug =
      subjectOptions.find(
        (option: { value: string; slug: string; label: string }) =>
          option.value === value
      )?.slug || "";
    router.push(`/bac-si/${slug}`);
  };

  if (results.length === 0 && !isLoading) {
    return (
      <div className={styles.noResultsContainer}>
        <div className={styles.noResultsContent}>
          <div className={styles.noResultsIcon}>
            <MedicineBoxOutlined />
          </div>
          <h3 className={styles.noResultsTitle}>
            Không tìm thấy bác sĩ phù hợp
          </h3>
          <p className={styles.noResultsDescription}>
            Chúng tôi không thể tìm thấy bác sĩ nào khớp với tiêu chí tìm kiếm
            của bạn.
            <br />
            Hãy thử điều chỉnh từ khóa hoặc chọn chuyên khoa khác.
          </p>
          <div className={styles.noResultsActions}>
            <Button
              type='primary'
              icon={<SearchOutlined />}
              onClick={() => {
                setSearchDoctor("");
                router.push("/bac-si");
              }}
            >
              Xem tất cả bác sĩ
            </Button>
            <Button onClick={() => setSearchDoctor("")}>Xóa bộ lọc</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.filterBox}>
        <div className='container'>
          <Searchbar onSearchChange={val => setSearchDoctor(val)} />
          <Select
            options={subjectOptions}
            defaultValue={subject}
            handleChange={handleSubjectChange}
          />
        </div>
      </div>
      <div className={styles.contentBox}>
        <div className='container'>
          <div className={styles.contentInner}>
            <Suspense fallback={<DoctorListSkeleton />}>
              <DoctorList
                results={results}
                isLoading={isLoading}
                isError={isError}
              />
            </Suspense>
            <InfoBox />
          </div>
          <CustomPagination
            current={current}
            total={total}
            onChange={onChange}
            pageSize={5}
          />
        </div>
      </div>
    </>
  );
}
