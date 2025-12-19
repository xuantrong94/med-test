import PartnerLayout from '@/components/layouts/partner-layout/PartnerLayout';
import { getPartnerConfig } from '@/shared/endpoints/partner-domain.endpoint';
import React from 'react';

export async function generateMetadata() {
  const partnerConfig = await getPartnerConfig();
  return {
    title: partnerConfig.seo_title,
    description: partnerConfig.seo_description,
  };
}

export default async function BenhVienMatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PartnerLayout>{children}</PartnerLayout>;
}
