/**
 * Media format definition for Strapi images
 */
export interface PostImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
  path: string | null;
}

/**
 * Image object structure from Strapi Media Library
 */
export interface PostImage {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: PostImageFormat;
    medium?: PostImageFormat;
    small?: PostImageFormat;
    large?: PostImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  created_at: string;
  updated_at: string;
}

/**
 * Category structure for posts
 */
export interface PostCategory {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  type: string;
  partnerId: string | null;
}

/**
 * Subcategory structure (usually same as category)
 */
export interface PostSubcategory extends PostCategory {
  category: number | null;
  slugCustoms: unknown;
  slugcustom: unknown;
}

/**
 * CTA structure for search results
 */
export interface PostCtaSearch {
  status: boolean;
  keywords: string;
  category: string;
  treeId: string;
  partnerId: string;
}

/**
 * Author display details
 */
export interface PostAuthorDisplay {
  createAuthorBy: string;
  createAuthorName: string;
  authorType: string;
  cta: {
    treeId: string;
    partnerId: string;
    doctorId: string;
    role: string;
    name: string;
    subjectId: string;
  };
  isMemberMedpro: boolean;
}

/**
 * Main Post schema based on CMS response
 */
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
  partnerId: string | null;
  partners: string;
  metaDescription: string;
  ctaSearch: PostCtaSearch;
  subjectName: string | null;
  authorDisplay: PostAuthorDisplay;
  medicalConsultation: Record<string, unknown>;
  slugcustom: string | null;
  image: PostImage[];
  categories: PostCategory[];
  subcategories: PostSubcategory[];
}
