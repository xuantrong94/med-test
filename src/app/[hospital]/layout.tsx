import PartnerLayout from '@/components/layouts/partner-layout/PartnerLayout';
import React from 'react';

export default async function BenhVienMatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PartnerLayout>{children}</PartnerLayout>;
}
