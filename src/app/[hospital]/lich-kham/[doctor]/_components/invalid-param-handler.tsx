"use client";

import React, { useEffect } from "react";
import Modal from "antd/es/modal";
import { useRouter } from "next/navigation";
import WarningOutlined from "@ant-design/icons/lib/icons/WarningOutlined";

/**
 * Handle invalid or missing parameters by showing an Ant Design Modal
 * and redirecting the user back to the homepage.
 */
export function InvalidParamHandler() {
  const router = useRouter();

  useEffect(() => {
    Modal.warning({
      title: "Thông tin đặt khám không đầy đủ",
      content: (
        <div>
          <p>
            Trang đặt khám yêu cầu các thông tin định danh (Bác sĩ, Chuyên khoa,
            Loại hình) để hoạt động chính xác.
          </p>
          <p>Hệ thống sẽ chuyển bạn về trang chủ để bắt đầu lại quy trình.</p>
        </div>
      ),
      icon: <WarningOutlined style={{ color: "#faad14" }} />,
      okText: "Quay về trang chủ",
      centered: true,
      maskClosable: false,
      onOk: () => {
        router.push("/");
      },
      // Ensure redirect even if they close via other means if possible
      afterClose: () => {
        router.push("/");
      },
    });
  }, [router]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      {/* Visual placeholder while modal is active */}
      <div style={{ textAlign: "center", color: "#8c8c8c" }}>
        <p>Đang kiểm tra thông tin...</p>
      </div>
    </div>
  );
}
