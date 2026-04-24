import { api } from "@/lib/fetch/client";
import qs from "qs";
import { PartnerSchedulesResponse } from "../_types/schedule.types";
import { cache } from "react";

const url =
  "https://api-hotfix.medpro.com.vn/his-gateway/dynamic-schedule/getScheduleFeature";

export const getPartnerSchedules = cache(
  async (queries: {
    date: string;
    partnerId: string;
    subjectId?: string;
    featureId?: string;
    doctor?: string;
    role?: string;
  }): Promise<PartnerSchedulesResponse> => {
    const params = qs.stringify(queries);
    const fullUrl = `${url}?${params}`;

    try {
      const response = await api.get<PartnerSchedulesResponse>(fullUrl, {
        caller: "getPartnerSchedules",
        next: {
          revalidate: 10 * 60, // 10 minutes
        },
      });

      return response as unknown as PartnerSchedulesResponse;
    } catch (error) {
      console.error("API Request Failed:", error);
      throw error;
    }
  }
);
