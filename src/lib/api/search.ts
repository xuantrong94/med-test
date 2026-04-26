import { cache } from "react";
import { unstable_cache } from "next/cache";
import { api } from "@/lib/fetch/client";
import { Specialty } from "@/types/specialty";

/**
 * Cross-request Data Cache for search results.
 *
 * WHY: The Search API (api-hotfix.medpro.com.vn/mongo/service/search) uses POST,
 * which Next.js does NOT auto-cache. Each request previously hit the API directly
 * (~3-4s response time), causing Lighthouse to report 8-9s "slow server response".
 *
 * unstable_cache() persists results in the Next.js Data Cache across requests
 * with a 5-minute revalidation window. This reduces Document Complete time from
 * ~9s to <1s on cached hits.
 *
 * React.cache() is still layered on top to deduplicate calls within the SAME
 * request lifecycle (e.g., HospitalSection + SubjectSection sharing a search key).
 */

const SEARCH_REVALIDATE_SECONDS = 300; // 5 minutes

/**
 * Inner function that performs the actual API call.
 * Wrapped by unstable_cache for cross-request caching.
 */
async function fetchSearchResults(
	searchKey: string,
): Promise<Specialty[] | null> {
	return api
		.search<Specialty[]>(
			{
				search_key: searchKey,
				category: "subject",
				limit: 300,
			},
			{
				caller: `CachedSearch(${searchKey})`,
				timeout: 10000,
				retries: 2,
				cache: "no-store", // Don't let fetch cache interfere with unstable_cache
			},
		)
		.catch((err) => {
			console.error(
				`CachedSearch error for key "${searchKey}":`,
				err,
			);
			return null;
		});
}

/**
 * Data-cached search function.
 * Results are cached for 5 minutes across all requests.
 * Cache key = ["search", searchKey], tagged with "search-results" for easy invalidation.
 */
const getDataCachedSearch = (searchKey: string) =>
	unstable_cache(
		() => fetchSearchResults(searchKey),
		["search", searchKey],
		{
			revalidate: SEARCH_REVALIDATE_SECONDS,
			tags: ["search-results"],
		},
	)();

/**
 * Per-request deduplicated + cross-request cached search.
 * React.cache() deduplicates within one render pass.
 * unstable_cache() persists across requests.
 */
export const getCachedSearch = cache(
	async (searchKey: string): Promise<Specialty[] | null> => {
		return getDataCachedSearch(searchKey);
	},
);
