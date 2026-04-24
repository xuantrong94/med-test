"use client";

import dynamic from "next/dynamic";
import type { PaginationProps } from "antd/es/pagination";

// Dynamic import for Ant Design components
const DynamicPaginationComponent = dynamic(
  () => import("./PaginationComponent"),
  {
    loading: () => (
      <div
        className='pagination-skeleton'
        style={{
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: "6px",
          margin: "16px 0",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "8px",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      </div>
    ),
    ssr: true,
  }
);

interface CustomPaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  onChange: PaginationProps["onChange"];
}

export default function CustomPagination(props: CustomPaginationProps) {
  return <DynamicPaginationComponent {...props} />;
}
