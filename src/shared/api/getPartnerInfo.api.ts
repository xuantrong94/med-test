import { env } from "@/config";
import { api } from "@/lib/fetch/client";
import { Partner } from "@/types/partner";
import { cache } from "react";

export const getPartnerInfo = cache(
  async (partnerId: string): Promise<Partner> => {
    const url = "https://api-v2.medpro.com.vn/mongo/hospital/get-partner-info";

    return api.get<Partner>(url, {
      caller: "getPartnerInfo",
      headers: {
        partnerId,
      },
      ...(env.isDemoMode ? { cache: "no-store" } : { next: { revalidate: 3600 } }),
    });
  }
);
