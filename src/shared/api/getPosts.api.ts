import { api } from "@/lib/fetch/client";
import { cache } from "react";
import { env } from "@/config";
import { Post } from "@/types/post";

export interface GetPostsParams {
  _start?: number;
  _limit?: number;
  subjectName?: string | null;
  _sort?: string;
}

/**
 * Shared API to fetch posts from Strapi CMS.
 * Supports pagination, filtering by subject, and sorting.
 * Using URLSearchParams for clean query string construction.
 *
 * @param params GetPostsParams
 * @returns Promise<Post[]>
 */
export const getPosts = cache(async (params: GetPostsParams = {}) => {
  const {
    _start = 0,
    _limit = 10,
    subjectName = "",
    _sort = "created_at:DESC",
  } = params;

  const queryParams = new URLSearchParams();

  // Add mandatory params
  queryParams.append("_start", _start.toString());
  queryParams.append("_limit", _limit.toString());
  queryParams.append("_sort", _sort);

  // Add optional subject filter if provided
  if (subjectName) {
    queryParams.append("subjectName", subjectName);
  }

  const endpoint = `${env.cms.baseURL}/posts?${queryParams.toString()}`;

  /**
   * Use the shared api.get client which provides:
   * 1. Automatic retries
   * 2. Response interceptors
   * 3. Consistent error handling (ApiException)
   */
  return await api.get<Post[]>(endpoint, {
    caller: "getPosts",
    ...(env.isDemoMode ? { cache: "no-store" } : { next: { revalidate: 1800 } }),
  });
});
