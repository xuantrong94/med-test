// https://bo-api.medpro.com.vn/partner-domain/get-by-domain?domain=benh-vien-mat

export interface PartnerConfig {
  _id: string;
  partnerId: string;
  name: string;
  domain: string[];

  seo_title: string;
  seo_description: string;
  seo_keywords: string;

  og_title: string;
  og_description: string;

  createdAt: string;
  updatedAt: string;
}

export const getPartnerConfig = async (): Promise<PartnerConfig> => {
  const response = await fetch(
    'https://bo-api.medpro.com.vn/partner-domain/get-by-domain?domain=benh-vien-mat'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch partner config');
  }
  return response.json();
};
