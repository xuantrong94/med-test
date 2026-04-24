import { api } from "@/lib/fetch/client";
import { cache } from "react";

import { SearchResultDoctor } from "@/types/doctor";

type SearchResponse = {
  category: string;
  results: SearchResultDoctor[];
}[];

export const getHospitalDoctors = cache(
  async ({ partnerId }: { partnerId: string }) => {
    const response = await api.search<SearchResponse>(
      {
        search_key: partnerId,
        limit: 999,
      },
      { caller: "getHospitalDoctors" }
    );
    const item = response.filter(item => item.category === "doctor");
    return item[0]?.results || [];
  }
);
