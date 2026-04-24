import React from "react";
import dynamic from "next/dynamic";
import ConfigProvider from "antd/es/config-provider";
import type { PaginationProps } from "antd/es/pagination";

const Pagination = dynamic(() => import("antd/es/pagination"), {
  ssr: false,
}) as React.FC<PaginationProps>;
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface PaginationComponentProps {
  current: number;
  total: number;
  pageSize?: number;
  onChange: PaginationProps["onChange"];
}

export default function PaginationComponent({
  current,
  total,
  onChange,
  pageSize = 10,
}: PaginationComponentProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    const queryString = params.toString();
    return `${pathname}${queryString ? `?${queryString}` : ""}`;
  };

  const itemRender: PaginationProps["itemRender"] = (
    page,
    type,
    originalElement
  ) => {
    if (type === "page") {
      return (
        <Link
          href={createPageUrl(page)}
          scroll={false}
        >
          {page}
        </Link>
      );
    }
    if (type === "prev") {
      const prevPage = Math.max(1, current - 1);
      return (
        <Link
          href={createPageUrl(prevPage)}
          scroll={false}
        >
          {originalElement}
        </Link>
      );
    }
    if (type === "next") {
      const totalPages = Math.ceil(total / pageSize);
      const nextPage = Math.min(totalPages, current + 1);
      return (
        <Link
          href={createPageUrl(nextPage)}
          scroll={false}
        >
          {originalElement}
        </Link>
      );
    }
    return originalElement;
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: "#2563eb",
            itemActiveColor: "#fff",
            colorPrimary: "#2563eb",
            colorPrimaryHover: "#1e40af",
          },
        },
      }}
    >
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        itemRender={itemRender}
        align='center'
        showSizeChanger={false}
      />
    </ConfigProvider>
  );
}
