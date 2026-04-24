import { env } from "@/config";

export const fetchConfig = {
  baseURL: env.api.baseURL,
  searchURL: env.api.searchURL,
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
} as const;
