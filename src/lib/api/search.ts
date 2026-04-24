import { cache } from "react";
import { api } from "@/lib/fetch/client";
import { Specialty } from "@/types/specialty";
import { env } from "@/config";

/**
 * Deduplicated search function for Specialty and Subject sections.
 * Since api.search uses POST, Next.js does not deduplicate it automatically.
 * Wrapping it in React's cache() ensures it only runs once per unique search_key 
 * within the same request lifecycle (e.g., across multiple Server Components).
 */
export const getCachedSearch = cache(async (searchKey: string) => {
  return api.search<Specialty[]>(
    {
      search_key: searchKey,
      category: "subject",
      limit: 300,
    },
    {
      caller: `CachedSearch(${searchKey})`,
      timeout: 10000,
      retries: 2,
      ...(env.isDemoMode
        ? { cache: "no-store" }
        : { next: { revalidate: 300 } }),
    }
  ).catch(err => {
    console.error(`CachedSearch error for key "${searchKey}":`, err);
    return null;
  });
});
