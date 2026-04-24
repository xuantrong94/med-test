import { StrapiMediaV5 } from "./strapi";

type TwitterCardType = "summary" | "summary_large_image" | "app" | "player";

export interface StrapiSeo {
  // Required basic SEO meta tags
  metaTitle: string;
  metaDescription: string;

  // Optional but very commonly used
  metaImage?: StrapiMediaV5; // usually featured/preview image

  keywords?: string; // comma-separated or just long string

  // Canonical & indexing control
  canonicalURL: string;
  noIndex?: boolean;
  noFollow?: boolean;

  // Open Graph (Facebook, LinkedIn, Discord, etc.)
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: StrapiMediaV5;

  // Twitter / X Cards
  twitterCardType?: TwitterCardType;
  twitterImage?: StrapiMediaV5;

  // Structured data (usually JSON-LD)
  structuredData?: Record<string, any> | null; // or you can make it more strict
}
