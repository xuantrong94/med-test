import { StrapiBaseEntry } from "./strapi";
import { StrapiSeo } from "./seo";
import { StrapiBanner } from "./banner";

// Collection Type: Page

interface StrapiSymptom {
  id: number;
  name: string;
  slug: string;
}
export interface StrapiPage extends StrapiBaseEntry {
  title: string;
  slug: string;
  content: string;
  isActive: boolean;
  headScripts?: string;
  boydScripts?: string;
  seo: StrapiSeo;
  banner?: StrapiBanner;
  author?: string;
  symptoms?: StrapiSymptom[];
  updatedAt: string;
}
