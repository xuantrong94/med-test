export interface PatientGuide {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  partnerId: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PatientGuideResponse {
  pageSize: number;
  pageIndex: number;
  totalRows: number;
  rows: PatientGuide[];
}

export const getGuides = async (
  partnerid: string
): Promise<PatientGuideResponse> => {
  const response = await fetch(
    `https://api-v2.medpro.com.vn/guide-patient/list?partnerId=${partnerid}&pageSize=8&pageIndex=0`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        partnerid: partnerid,
      },
      body: JSON.stringify({
        pageIndex: 0,
        pageSize: 8,
      }),
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch patient guides');
  }
  const data: PatientGuideResponse = await response.json();
  return data;
};

export const getGuide = async (
  slug: string,
  partnerid: string
): Promise<PatientGuide> => {
  console.log('Fetching guide with slug:', slug, 'and partnerid:', partnerid);
  const response = await fetch(
    `https://api-v2.medpro.com.vn/guide-patient/find-by-condition?slug=${slug}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        partnerid: partnerid,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch patient guide detail');
  }
  const data: PatientGuide = await response.json();
  return data;
};
