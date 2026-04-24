import { api } from "@/lib/fetch/client";
import { City, District, Ward } from "@/shared/constants/cities";

export interface GeoResponse<T> {
  status: string;
  data: T;
  message?: string;
  total?: number;
}

/**
 * Service to handle geographic and hospital data fetching.
 * Works on both Client and Server sides.
 */
class GeoService {
  private getInternalUrl(path: string) {
    // On server side, we might need absolute URL if not using a proxy
    // But since Next.js Route Handlers are on the same origin,
    // relative paths work fine for client-side fetch.
    // For server-side (RSC), we might need to handle absolute URLs.
    if (typeof window === "undefined") {
      const protocol =
        process.env.NODE_ENV === "development" ? "http" : "https";
      const host = process.env.NEXT_PUBLIC_SITE_URL || "localhost:3000";
      return `${protocol}://${host}${path}`;
    }
    return path;
  }

  async getCities(): Promise<City[]> {
    const res = await api.get<GeoResponse<City[]>>(
      this.getInternalUrl("/api/geo/cities"),
      {
        caller: "getCities",
      }
    );
    return res.data;
  }

  async getDistricts(cityId: string): Promise<District[]> {
    const res = await api.get<GeoResponse<District[]>>(
      this.getInternalUrl(`/api/geo/districts?cityId=${cityId}`),
      { caller: "getDistricts" }
    );
    return res.data;
  }

  async getWards(districtId: string): Promise<Ward[]> {
    const res = await api.get<GeoResponse<Ward[]>>(
      this.getInternalUrl(`/api/geo/wards?districtId=${districtId}`),
      { caller: "getWards" }
    );
    return res.data;
  }

  async getHospitals(params: {
    cityId?: string;
    districtId?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ total: number; data: any[] }> {
    const query = new URLSearchParams();
    if (params.cityId) query.append("cityId", params.cityId);
    if (params.districtId) query.append("districtId", params.districtId);
    if (params.limit) query.append("limit", params.limit.toString());
    if (params.offset) query.append("offset", params.offset.toString());

    const res = await api.get<GeoResponse<any[]>>(
      this.getInternalUrl(`/api/hospitals?${query.toString()}`),
      { caller: "getHospitals" }
    );

    return {
      total: res.total || 0,
      data: res.data,
    };
  }

  async getHospitalBySlug(slug: string): Promise<any> {
    const res = await api.get<GeoResponse<any>>(
      this.getInternalUrl(`/api/hospitals/${slug}`),
      { caller: "getHospitalBySlug" }
    );
    return res.data;
  }
}

export const geoService = new GeoService();
