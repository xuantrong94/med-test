import { env } from "@/config";
import { api } from "@/lib/fetch/client";
import { Doctor } from "@/types/doctor";
import { cache } from "react";

/**
 * Unified doctor detail fetcher — shared across all routes.
 *
 * Priority logic:
 *   1. If `doctorId` is provided → use doctorId (backend-native, always works).
 *   2. If only `slug` provided → use slug (requires backend slug field to exist).
 *
 * NOTE: Use primitive string arguments to allow React.cache() to deduplicate
 * requests within the same render pass (reference equality on objects won't dedup).
 *
 * @param slug    - SEO-friendly doctor slug (e.g. "bvndgiadinh-bs-ck2-duong-minh-tri")
 * @param doctorId - Backend-native doctor ID (e.g. "bvndgiadinh_973"), takes priority over slug
 */
export const getDoctorDetail = cache(
  async (slug: string, doctorId: string = "") => {
    const url = doctorId
      ? `https://api-v2.medpro.com.vn/mongo/service/doctor?slug=&doctorId=${doctorId}`
      : `https://api-v2.medpro.com.vn/mongo/service/doctor?slug=${slug}`;

    const response = await api.get<Doctor>(url, {
      caller: "getDoctorDetail",
      ...(env.isDemoMode ? { cache: "no-store" } : { next: { revalidate: 600 } }),
    });
    return response as unknown as Doctor;
  }
);
