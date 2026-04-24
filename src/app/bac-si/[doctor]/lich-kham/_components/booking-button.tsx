"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import App from "antd/es/app";
import styles from "./general-schedule-table/general-schedule-table.module.scss";

type Props = {
  partnerId: string;
  doctorId: string;
  serviceId: string;
  timeId: string;
  timemiliseconds: string;
  isOff?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function BookingButton({
  partnerId,
  doctorId,
  serviceId,
  timeId,
  timemiliseconds,
  isOff,
  children,
  className,
}: Props) {
  const { modal } = App.useApp();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract params directly from URL
  const feature = searchParams.get("feature");
  const subjectId = searchParams.get("subjectId");

  const isParamsIncomplete = !feature || !subjectId;

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isParamsIncomplete) {
      modal.warning({
        title: "Thông tin đặt khám không đầy đủ",
        content: (
          <div>
            <p>
              Hệ thống không nhận diện được các thông tin định danh cần thiết để
              tiếp tục đặt khám.
            </p>
            <p>Vui lòng quay về trang chủ để bắt đầu lại quy trình.</p>
          </div>
        ),
        okText: "Quay về trang chủ",
        onOk: () => router.push("/"),
        centered: true,
      });
      return;
    }

    if (isOff) return;

    // Build URL and Navigate
    const bookingUrl = `/dat-lich/chon-lich-kham?feature=${feature}&partnerId=${partnerId}&doctorId=${doctorId}&subjectId=${subjectId}&serviceId=${serviceId}&date=${timemiliseconds}&timeId=${timeId}&step=chon-ho-so`;

    // Using router.push for client-side navigation
    router.push(bookingUrl);
  };

  return (
    <button
      className={`${styles.bookButton} ${isOff ? styles.disabled : ""} ${className || ""}`}
      onClick={handleBookingClick}
      disabled={isOff}
    >
      {children}
    </button>
  );
}
