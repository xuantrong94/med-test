"use server";

import qs from "qs";
import { env } from "@/config";
import { api } from "@/lib/fetch/client";
import { StrapiMeta } from "@/types/strapi";
import { StrapiSeo } from "@/types/seo";
import { StrapiBanner } from "@/types/banner";
import { Metadata } from "next";
import { cache } from "react";

import type { StrapiPage } from "@/types/page";

import { getSpecialtyName } from "@/shared/constants/specialties";

// API response interfaces
interface StrapiPagesResponse {
  data: StrapiPage[];
  meta: StrapiMeta;
}

interface StrapiPageResponse {
  data: StrapiPage[];
  meta: StrapiMeta;
}

// Fallback data for when API calls fail
const FALLBACK_DATE = "2024-01-01T00:00:00.000Z";

const createFallbackSeo = (title?: string): StrapiSeo => ({
  metaTitle: title
    ? `${title} - MedPro`
    : "Dịch vụ y tế MedPro - Đặt khám chuyên khoa",
  metaDescription: title
    ? `Đặt lịch khám chuyên khoa ${title} với các bác sĩ uy tín. Dịch vụ y tế chất lượng cao, tiện lợi và nhanh chóng.`
    : "Đặt lịch khám bệnh online với các bác sĩ chuyên khoa uy tín. Dịch vụ y tế chất lượng cao, tiện lợi và nhanh chóng.",
  canonicalURL: env.app.canonicalURL,
  keywords: "đặt khám online, bác sĩ chuyên khoa, dịch vụ y tế, khám bệnh",
});

const createFallbackBanner = (): StrapiBanner => ({
  title: "Dịch vụ y tế chuyên nghiệp",
  subtitle: "Đặt lịch khám với các bác sĩ hàng đầu",
  imageMobile: {
    id: 0,
    documentId: "fallback-mobile",
    name: "fallback-banner-mobile.jpg",
    alternativeText: "Dịch vụ y tế MedPro",
    caption: null,
    width: 768,
    height: 400,
    formats: {},
    hash: "",
    ext: ".jpg",
    mime: "image/jpeg",
    size: 0,
    url: "/images/fallback-banner-mobile.jpg",
    previewUrl: null,
    provider: "local",
    provider_metadata: null,
    createdAt: FALLBACK_DATE,
    updatedAt: FALLBACK_DATE,
    publishedAt: FALLBACK_DATE,
  },
  imageDesktop: {
    id: 1,
    documentId: "fallback-desktop",
    name: "fallback-banner-desktop.jpg",
    alternativeText: "Dịch vụ y tế MedPro",
    caption: null,
    width: 1200,
    height: 400,
    formats: {},
    hash: "",
    ext: ".jpg",
    mime: "image/jpeg",
    size: 0,
    url: "/images/fallback-banner-desktop.jpg",
    previewUrl: null,
    provider: "local",
    provider_metadata: null,
    createdAt: FALLBACK_DATE,
    updatedAt: FALLBACK_DATE,
    publishedAt: FALLBACK_DATE,
  },
  isActive: false,
});

const createFallbackPage = (slug?: string): StrapiPage => {
  let title = "Dịch vụ y tế";
  if (slug?.startsWith("chuyen-khoa/")) {
    const specialtySlug = slug.replace("chuyen-khoa/", "");
    title = getSpecialtyName(specialtySlug);
  }

  return {
    id: 0,
    documentId: slug || "fallback",
    title,
    slug: slug || "fallback",
    content: "<p>Nội dung đang được cập nhật</p>",
    isActive: true,
    headScripts: "",
    boydScripts: "",
    seo: createFallbackSeo(title),
    banner: createFallbackBanner(),
    createdAt: FALLBACK_DATE,
    updatedAt: FALLBACK_DATE,
    publishedAt: FALLBACK_DATE,
  };
};

export async function getPages(): Promise<StrapiPagesResponse> {
  try {
    const query = qs.stringify(
      {
        pagination: {
          page: 1,
          pageSize: 100,
        },
        sort: ["createdAt:desc"],
        populate: {
          seo: { populate: "*" },
          banner: { populate: "*" },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    const baseUrl = env.strapi.getBaseURL();
    if (!baseUrl) {
      throw new Error("STRAPI_URL is not configured");
    }

    const headers: Record<string, string> = {};
    if (env.strapi.token) {
      headers.Authorization = `Bearer ${env.strapi.token}`;
    }

    const endpoint = `${baseUrl}/api/pages?${query}`;
    const data = await api.get<StrapiPagesResponse>(endpoint, {
      headers,
      caller: "getPages",
      ...(env.isDemoMode
        ? { cache: "no-store" }
        : { next: { revalidate: 3600 } }),
      timeout: 10000,
      retries: 2,
    });

    // Validate response structure
    if (!data?.data || !Array.isArray(data.data)) {
      console.warn("Invalid API response structure for getPages");
      return {
        data: [],
        meta: {
          pagination: { page: 1, pageSize: 100, pageCount: 0, total: 0 },
        },
      };
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch pages:", error);

    // Return fallback data with proper structure
    return {
      data: [],
      meta: {
        pagination: { page: 1, pageSize: 100, pageCount: 0, total: 0 },
      },
    };
  }
}

export const getPageBySlug = cache(
  async (slug: string): Promise<StrapiPage | null> => {
    try {
      if (!slug) {
        throw new Error("Slug parameter is required");
      }

      const query = qs.stringify(
        {
          filters: {
            slug: {
              $eq: slug,
            },
          },
          populate: {
            seo: {
              populate: "*",
            },
            banner: {
              populate: "*",
            },
            symptoms: {
              populate: "*",
            },
          },
        },
        {
          encodeValuesOnly: true,
        }
      );

      const baseUrl = env.strapi.getBaseURL();
      if (!baseUrl) {
        throw new Error("STRAPI_URL is not configured");
      }
      const headers: Record<string, string> = {};
      if (env.strapi.token) {
        headers.Authorization = `Bearer ${env.strapi.token}`;
      }

      const endpoint = `${baseUrl}/api/pages?${query}`;
      const data = await api.get<StrapiPageResponse>(endpoint, {
        headers,
        caller: "getPageBySlug",
        ...(env.isDemoMode
          ? { cache: "no-store" }
          : { next: { revalidate: 3600 } }),
        timeout: 10000,
        retries: 2,
      });

      // Validate response and extract first page
      if (!data?.data || !Array.isArray(data.data) || data.data.length === 0) {
        console.warn(`No page found for slug: ${slug}`);
        return createFallbackPage(slug);
      }

      const page = data.data[0];
      let fallbackTitle = "Dịch vụ y tế";
      if (slug.startsWith("chuyen-khoa/")) {
        const specialtySlug = slug.replace("chuyen-khoa/", "");
        fallbackTitle = getSpecialtyName(specialtySlug);
      }

      // Validate required fields and provide fallbacks
      const validatedPage: StrapiPage = {
        ...page,
        title: page.title || fallbackTitle,
        content: page.content || "<p>Nội dung đang được cập nhật...</p>",
        seo: page.seo || createFallbackSeo(fallbackTitle),
        banner: page.banner,
        headScripts: page.headScripts || "",
        boydScripts: page.boydScripts || "",
      };

      return validatedPage;
    } catch (error) {
      console.error(`Failed to fetch page by slug "${slug}":`, error);

      // Return fallback page for the requested slug
      return createFallbackPage(slug);
    }
  }
);
export const getPageBySymptom = cache(
  async (symptom: string): Promise<StrapiPage[]> => {
    try {
      if (!symptom) {
        throw new Error("Symptom parameter is required");
      }

      const query = qs.stringify(
        {
          filters: {
            symptoms: {
              name: {
                $containsi: symptom,
              },
            },
          },
          populate: {
            seo: {
              populate: "*",
            },
            banner: {
              populate: "*",
            },
            symptoms: {
              populate: "*",
            },
          },
        },
        {
          encodeValuesOnly: true,
        }
      );

      const baseUrl = env.strapi.getBaseURL();
      if (!baseUrl) {
        throw new Error("STRAPI_URL is not configured");
      }
      const headers: Record<string, string> = {};
      if (env.strapi.token) {
        headers.Authorization = `Bearer ${env.strapi.token}`;
      }

      const endpoint = `${baseUrl}/api/pages?${query}`;
      const data = await api.get<StrapiPageResponse>(endpoint, {
        headers,
        caller: "getPageBySymptom",
        ...(env.isDemoMode
          ? { cache: "no-store" }
          : { next: { revalidate: 3600 } }),
        // next: {
        //   revalidate: 300, // Cache for 5 minutes
        //   tags: [`page-${slug}`],
        // },
        timeout: 10000,
        retries: 2,
      });

      // Validate response and extract pages
      if (!data?.data || !Array.isArray(data.data) || data.data.length === 0) {
        console.warn(`No pages found for symptom: ${symptom}`);
        return [];
      }

      // Validate pages and provide fallbacks
      return data.data.map(page => ({
        ...page,
        title: page.title || "Dịch vụ y tế",
        content: page.content || "<p>Nội dung đang được cập nhật...</p>",
        seo: page.seo || createFallbackSeo(),
        banner: page.banner,
        headScripts: page.headScripts || "",
        boydScripts: page.boydScripts || "",
      }));
    } catch (error) {
      console.error(`Failed to fetch pages by symptom "${symptom}":`, error);
      return [];
    }
  }
);

export const renderMetadata = async (seo: StrapiSeo): Promise<Metadata> => {
  if (!seo) {
    return {
      title: "Dịch vụ y tế MedPro - Đặt khám chuyên khoa",
      description:
        "Đặt lịch khám bệnh online với các bác sĩ chuyên khoa uy tín. Dịch vụ y tế chất lượng cao, tiện lợi và nhanh chóng.",
    };
  }

  try {
    const {
      metaTitle,
      metaDescription,
      keywords,
      canonicalURL,
      noIndex,
      noFollow,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCardType,
      twitterImage,
    } = seo;

    // Build metadata object step by step to avoid issues
    const metadata: Metadata = {
      title: metaTitle || "Dịch vụ y tế",
      description: metaDescription || "Thông tin dịch vụ y tế",
    };

    if (keywords) {
      metadata.keywords = keywords;
    }

    if (canonicalURL) {
      metadata.alternates = {
        canonical: canonicalURL,
      };
    }

    metadata.robots = {
      index: !noIndex,
      follow: !noFollow,
    };

    // Add Open Graph data
    metadata.openGraph = {
      title: ogTitle || metaTitle || "Dịch vụ y tế",
      description: ogDescription || metaDescription || "Thông tin dịch vụ y tế",
      type: "website",
    };

    if (ogImage?.url) {
      metadata.openGraph.images = [{ url: ogImage.url }];
    }

    if (canonicalURL) {
      metadata.openGraph.url = canonicalURL;
    }

    // Add Twitter data
    metadata.twitter = {
      card: twitterCardType || "summary_large_image",
      title: ogTitle || metaTitle || "Dịch vụ y tế",
      description: ogDescription || metaDescription || "Thông tin dịch vụ y tế",
    };

    if (twitterImage?.url && metadata.twitter) {
      metadata.twitter.images = [twitterImage.url];
    }

    return metadata;
  } catch (error) {
    console.error("Error in renderMetadata:", error);
    return {
      title: "Dịch vụ y tế MedPro",
      description: "Thông tin dịch vụ y tế",
    };
  }
};
