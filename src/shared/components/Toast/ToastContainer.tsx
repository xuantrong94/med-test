"use client";

import React from "react";
import { useToast, ToastType } from "@/shared/stores/use-toast.store";
import styles from "./ToastContainer.module.scss";
import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import ExclamationCircleOutlined from "@ant-design/icons/lib/icons/ExclamationCircleOutlined";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";

const ICON_MAP: Record<ToastType, React.ReactNode> = {
  success: <CheckCircleOutlined />,
  error: <CloseCircleOutlined />,
  info: <InfoCircleOutlined />,
  warning: <ExclamationCircleOutlined />,
};

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className={styles.container}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`${styles.toast} ${styles[toast.type]}`}
        >
          <span className={styles.icon}>{ICON_MAP[toast.type]}</span>
          <div className={styles.content}>{toast.message}</div>
          <button
            className={styles.closeButton}
            onClick={() => removeToast(toast.id)}
          >
            <CloseOutlined />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
