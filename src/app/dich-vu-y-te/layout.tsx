import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ y tế - Đặt khám chuyên khoa",
  description: "Trang đặt khám chuyên khoa của dịch vụ y tế.",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
