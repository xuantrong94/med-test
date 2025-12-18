// https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=4&_sort=created_at:desc&partners_contains=bvmathcm

export interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  pin: boolean;
  author: string;
  workUnit: string | null;
  keywords: string;
  partnerId: number | null;
  partners: string;
  metaDescription: string;
  subjectName: string | null;
  authorDisplay: Record<string, unknown>;
  medicalConsultation: Record<string, unknown>;
  ctaSearch: CtaSearch;
  image: Media[];
  categories: Category[];
  subcategories: Category[];
}

// CTA Search
export interface CtaSearch {
  status: boolean;
  keywords: string;
  category: string;
  treeId: string;
  partnerId: string;
}

// Media / Image
export interface Media {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: MediaFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  created_at: string;
  updated_at: string;
}

export interface MediaFormats {
  thumbnail?: MediaFormat;
  small?: MediaFormat;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string | null;
  url: string;
}

// Category
export interface Category {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  type: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    'https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=4&_sort=created_at:desc&partners_contains=bvmathcm'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

//cms.medpro.com.vn/posts?slug=glaucoma-ke-cap-thi-luc-tham-lang-1
export const getPostBySlug = async (slug: string): Promise<Post[]> => {
  const response = await fetch(`https://cms.medpro.com.vn/posts?slug=${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post by slug');
  }
  return response.json();
};
