import React from "react";
import { env } from "@/config/env";

type Props = {
  label: string;
  children: React.ReactNode;
  color?: string;
};

/**
 * LabelWrapper component for visual debugging in development mode.
 * Only renders the border and label when env.isDevelopment is true.
 * Trong chế độ development, component này sẽ hiển thị viền và nhãn để dễ dàng nhận diện component.
 * Trong chế độ production, nó sẽ chỉ trả về children (không làm thay đổi layout).
 */
export const LabelWrapper: React.FC<Props> = ({
  label,
  children,
  color = "#ff4d4f", // Medpro-like red or standard error red
}) => {
  // Option A implementation: Strict environment check
  if (!env.isDevelopment) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        position: "relative",
        border: `2px solid ${color}`,
        margin: "4px",
        padding: "4px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-12px",
          left: "10px",
          background: color,
          color: "white",
          padding: "2px 8px",
          fontSize: "10px",
          fontWeight: "bold",
          borderRadius: "4px",
          zIndex: 1000,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
};
