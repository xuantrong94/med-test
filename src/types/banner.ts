import { StrapiMediaV5 } from "./strapi";

export interface StrapiBanner {
  title: string; // Main headline
  subtitle?: string; // Supporting text / tagline
  imageMobile: StrapiMediaV5;
  imageDesktop: StrapiMediaV5;
  link?: string; // URL for CTA button / whole card clickable
  isActive: boolean; // Toggle visibility (published/active status)
}
