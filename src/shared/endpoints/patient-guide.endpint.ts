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

export const getGuides = async (): Promise<PatientGuideResponse> => {
  const response = await fetch(
    'https://api-v2.medpro.com.vn/guide-patient/list?partnerId=bvmathcm&pageSize=8&pageIndex=0',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        partnerid: 'bvmathcm',
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
