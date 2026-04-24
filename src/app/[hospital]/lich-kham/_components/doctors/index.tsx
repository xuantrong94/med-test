"use client";

import { useState, useMemo, useRef } from "react";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import Image from "next/image";
import styles from "./doctors.module.scss";
import PaginationComponent from "@/components/custom/PaginationComponent";
import normalize from "@/lib/utils/normalize";

import { SearchResultDoctor } from "@/types/doctor";
import dynamic from "next/dynamic";
import Button from "antd/es/button";
import Link from "next/link";

const Modal = dynamic(() => import("antd/es/modal"), { ssr: false });
import { createDoctorSlug } from "../../_helpers";

const normalizeRoleString = (str: string) => {
  if (!str) return "";
  let n = normalize(str.toLowerCase());
  n = n.replace(/bac si/g, "bs");
  n = n.replace(/[.\s-]/g, "");
  n = n.replace(/ck1/g, "cki");
  n = n.replace(/ck2/g, "ckii");
  return n;
};

const extractRoleFromTitle = (title: string) => {
  if (!title) return null;
  const prefixes = [
    "PGS.TS.BS.CKII",
    "PGS.TS.BS.CKI",
    "GS.TS.BS",
    "PGS.TS.BS",
    "GS.TS",
    "PGS.TS",
    "ThS.BS.CKII",
    "ThS.BS.CKI",
    "ThS.BS",
    "Ths BSCKI",
    "Ths BSCKII",
    "TS.BS",
    "BS.CKII",
    "BS.CKI",
    "BS.CK2",
    "BS.CK1",
    "BS CKII",
    "BS CKI",
    "BS CK2",
    "BS CK1",
    "BSCKI",
    "BSCKII",
    "Bác sĩ chuyên khoa II",
    "Bác sĩ chuyên khoa I",
    "Bác sĩ chuyên khoa 2",
    "Bác sĩ chuyên khoa 1",
    "Thạc sĩ",
    "Tiến sĩ",
    "Giáo sư",
    "Phó giáo sư",
    "Bác sĩ",
    "GS",
    "PGS",
    "TS",
    "ThS",
    "BS",
  ];

  for (const prefix of prefixes) {
    const pattern = new RegExp(
      `^(${prefix.replace(/\./g, "\\.")})(?:\\.|\\s)*\\s+`,
      "i"
    );
    const match = title.match(pattern);
    if (match) {
      return {
        role: match[1].trim(),
        name: title.replace(match[0], "").trim(),
      };
    }
  }
  return null;
};

import { PrunedDoctor } from "../../_helpers/pruning";

export const Doctors = ({
  initialDoctors,
  totalCount,
  features,
}: {
  initialDoctors: PrunedDoctor[];
  totalCount: number;
  features?: {
    id: string;
    name: string;
    type: string;
  }[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pageParam = searchParams.get("page");

  const currentPage =
    pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;
  const containerRef = useRef<HTMLDivElement>(null);
  const pageSize = 12;

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    if (containerRef.current) {
      const y =
        containerRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  if (!initialDoctors || initialDoctors.length === 0) {
    return (
      <div className={styles.doctorsContainer}>
        <div className={styles.emptyState}>Không tìm thấy bác sĩ nào.</div>
      </div>
    );
  }

  return (
    <div
      className={styles.doctorsContainer}
      ref={containerRef}
      style={{ minHeight: "500px" }}
    >
      <div className={styles.grid}>
        {initialDoctors.map(doctor => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            features={features}
          />
        ))}
      </div>

      {totalCount > pageSize && (
        <div className={styles.paginationWrapper}>
          <PaginationComponent
            current={safePage}
            total={totalCount}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

const DoctorCard = ({
  doctor,
  features,
}: {
  doctor: PrunedDoctor;
  features?: { id: string; name: string; type: string }[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const extracted = useMemo(
    () => extractRoleFromTitle(doctor?.title || ""),
    [doctor?.title]
  );
  const displayRole = extracted ? extracted.role : doctor?.role || "Bác sĩ";
  const displayName = extracted
    ? extracted.name
    : doctor?.title || "Đang cập nhật...";

  const params = useParams();
  const hospitalId = params.hospital as string;

  const doctorSlug = useMemo(
    () => createDoctorSlug(hospitalId, displayRole, displayName),
    [hospitalId, displayRole, displayName]
  );

  return (
    <div className={styles.doctorCard}>
      <Link
        href={`/${hospitalId}/lich-kham/${doctor.id}`}
        className={styles.topSection}
      >
        <div className={styles.avatar}>
          <Image
            src={
              doctor?.imageUrl ||
              "https://cdn.medpro.vn/prod-partner/3ee52d40-60a4-492b-af06-f759cce2d5d2-doctormale.jpg"
            }
            alt={doctor?.title || "Bác sĩ"}
            fill
            sizes='64px'
          />
        </div>
        <div className={styles.basicInfo}>
          <div className={styles.role}>{displayRole}</div>
          <h3 className={styles.doctorName}>{displayName}</h3>
        </div>
      </Link>

      <div className={styles.tags}>
        {doctor?.tags?.slice(0, 2).map(tag => (
          <span
            key={tag.id}
            className={styles.tag}
          >
            {tag.name}
          </span>
        ))}
      </div>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <label>Chuyên khoa</label>
          <span>{doctor?.subjects?.[0]?.name || "Đang cập nhật..."}</span>
        </div>
        <div className={styles.detailItem}>
          {/* <Button
            type='primary'
            size='small'
            color='primary'
            className={styles.viewScheduleBtn}
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Xem lịch khám
          </Button> */}
          <Link
            href={`/${hospitalId}/lich-kham/${doctor.id}`}
            className={styles.viewScheduleBtn}
          >
            Xem lịch khám
          </Link>

          <Modal
            title='Lịch khám chi tiết'
            open={isModalOpen}
            onCancel={e => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            footer={null}
            destroyOnHidden
            centered
          >
            <div className={styles.treeSchedule}>
              {doctor?.trees && doctor.trees.length > 0 ? (
                doctor.trees.map((tree, idx) => (
                  <div
                    key={idx}
                    className={styles.treeItem}
                  >
                    <div className={styles.treeName}>
                      {features?.find(
                        f =>
                          f.type.toLowerCase() ===
                          `booking.${tree.treeId}`.toLowerCase()
                      )?.name || tree.treeId}
                    </div>
                    <DayGrid days={tree.days || ""} />
                  </div>
                ))
              ) : (
                <DayGrid days={doctor?.days || ""} />
              )}
            </div>
          </Modal>
        </div>
      </div>

      {/* <div className={styles.priceSection}>
        <div className={styles.price}>{doctor?.price || "Đang cập nhật"}</div>
        <Link
          href={bookingUrl}
          className={styles.bookBtn}
        >
          Đặt ngay
        </Link>
      </div> */}
    </div>
  );
};

const DayGrid = ({ days }: { days: string }) => {
  const weekDays = [
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "CN", value: "8" },
  ];

  const activeDays = days
    .split(",")
    .map(d => d.trim().replace("Thứ ", "").replace("Chủ Nhật", "8").trim());

  return (
    <div className={styles.dayGrid}>
      {weekDays.map(day => {
        const isActive = activeDays.some(
          d => d === day.value || d.includes(day.value)
        );
        return (
          <div
            key={day.value}
            className={`${styles.dayCell} ${isActive ? styles.active : styles.disabled}`}
          >
            {day.label}
          </div>
        );
      })}
    </div>
  );
};

export const DoctorsSkeleton = () => {
  return (
    <div className={styles.doctorsContainer}>
      <div className={styles.grid}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={styles.skeletonCard}
          />
        ))}
      </div>
    </div>
  );
};
