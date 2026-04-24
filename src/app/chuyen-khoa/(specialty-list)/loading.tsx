import React from "react";
import SpecialtyListSkeleton from "../_components/specialty-list/specialty-skeleton";
import LayoutBreadcrumb from "@/layouts/layout-breadcrumb";
import Link from "next/link";

const Loading = () => {
  return (
    <LayoutBreadcrumb
      items={[
        { title: <Link href='/'>Trang chủ</Link> },
        { title: `Chuyên khoa` },
      ]}
    >
      <SpecialtyListSkeleton />
    </LayoutBreadcrumb>
  );
};

export default Loading;
