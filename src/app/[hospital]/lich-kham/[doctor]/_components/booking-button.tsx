"use client";

import React from "react";
import { useRouter } from "next/navigation";
import App from "antd/es/app";
import styles from "./general-schedule-table/general-schedule-table.module.scss";
import { formatBookingFeature } from "../../_helpers";

type Props = {
  partnerId: string;
  doctorId: string;
  serviceId: string;
  timeId: string;
  timemiliseconds: string;
  treeId: string;
  feature?: string;
  subjectId?: string;
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
  treeId,
  feature = "TAIKHOA,DOCTOR",
  subjectId,
  isOff,
  children,
  className,
}: Props) {
  const { modal } = App.useApp();
  const router = useRouter();

  const isParamsIncomplete = !feature || !subjectId || !serviceId;

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
            <div
              style={{
                background: "#f5f5f5",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
            >
              <p style={{ margin: 0 }}>feature: {feature || "thiếu"}</p>
              <p style={{ margin: 0 }}>subjectId: {subjectId || "thiếu"}</p>
              <p style={{ margin: 0 }}>serviceId: {serviceId || "thiếu"}</p>
            </div>
            <p style={{ marginTop: "12px" }}>
              Vui lòng quay về trang chủ để bắt đầu lại quy trình.
            </p>
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
    const formattedFeature = formatBookingFeature(feature);
    const bookingUrl = `https://medpro.vn/chon-lich-kham?feature=${formattedFeature}&partnerId=${partnerId}&doctorId=${doctorId}&subjectId=${subjectId}&serviceId=${serviceId}&treeId=${treeId}&date=${timemiliseconds}&timeId=${timeId}&step=chon-ho-so`;

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
