interface FeatureTranslate {
  _id: string;
  locale: string;
  name: string;
  message?: string;
}

interface ScreenOptions {
  headerTitle: string;
}

export interface FeatureItem {
  _id: string;
  name: string;
  message: string;
  disabled: boolean;
  children: FeatureItem[];
  bookingLimit: number;
  position: 'IN' | 'OUT' | string;
  customURLTarget: '_blank' | '_self' | string;

  translate: FeatureTranslate[];

  image: string;
  displayIcon: string;
  mobileIcon: string;

  priority: number;
  status: boolean;
  mobileStatus: boolean;

  type: string;
  slug: string;

  mobileRoute: string;
  webRoute: string;

  screenOptions: ScreenOptions;

  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const getListPartnerFeatures = async (): Promise<FeatureItem[]> => {
  const response = await fetch(
    'https://api-v2.medpro.com.vn/feature/list-feature-by-partner',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        partnerid: 'bvmathcm',
      },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch partner features');
  }
  const data: FeatureItem[] = await response.json();

  return data.filter(item => item.disabled === false);
};
