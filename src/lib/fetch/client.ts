import { fetchConfig } from "./config";
import { interceptors } from "./interceptors";
import { ApiException, FetchOptions } from "./types";
import { createAbortSignal, parseResponse, sleep } from "./utils";

const isDev = process.env.NODE_ENV !== "production";

export async function apiFetch<T = unknown>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    timeout = fetchConfig.timeout,
    retries = fetchConfig.retries,
    retryDelay = fetchConfig.retryDelay,
    skipAuth = false,
    caller,
    ...fetchOptions
  } = options;

  const method = (fetchOptions.method ?? "GET").toUpperCase();
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${fetchConfig.baseURL}${endpoint}`;

  // In production, only show the endpoint path to avoid leaking full URLs
  const logUrl = isDev ? url : endpoint;
  const logPrefix = caller ? `[API:${caller}]` : "[API]";
  const requestInfo = { url, method, caller };

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Apply request interceptors
      const { url: modifiedUrl, options: modifiedOptions } =
        await interceptors.applyRequestInterceptors(url, {
          ...fetchOptions,
          skipAuth,
        });

      // Create abort signal for timeout
      const signal = timeout
        ? createAbortSignal(timeout)
        : modifiedOptions.signal;

      // Make request
      const response = await fetch(modifiedUrl, {
        ...modifiedOptions,
        signal,
        headers: {
          "Content-Type": "application/json",
          ...modifiedOptions.headers,
        },
      });

      // Apply response interceptors
      const processedResponse = await interceptors.applyResponseInterceptors(
        response.clone()
      );

      // Handle errors
      if (!processedResponse.ok) {
        const errorData = await parseResponse<{
          message?: string;
          code?: string;
          errors?: Record<string, string[]>;
        }>(processedResponse.clone());

        throw new ApiException(
          processedResponse.status,
          errorData.code || "UNKNOWN_ERROR",
          errorData.message || "An error occurred",
          errorData.errors,
          requestInfo
        );
      }

      // Parse and return success response
      return parseResponse<T>(processedResponse);
    } catch (error) {
      lastError = error as Error;

      const isNetworkError =
        error instanceof TypeError &&
        (error.message.includes("terminated") ||
          error.message.includes("fetch failed") ||
          (error as { cause?: { code?: string } }).cause?.code ===
            "UND_ERR_SOCKET" ||
          (error as { code?: string }).code === "ECONNRESET");

      // Log retry attempts for network/server errors
      if (attempt < retries) {
        const errorType = isNetworkError ? "Network" : "Server/API";
        console.warn(
          `${logPrefix} ${errorType} error on ${method} ${logUrl} (Attempt ${attempt + 1}/${retries + 1}): ${lastError.message}`
        );

        // Don't retry on client errors (4xx) unless it's a specific network failure
        if (
          !isNetworkError &&
          error instanceof ApiException &&
          error.status >= 400 &&
          error.status < 500
        ) {
          throw error;
        }

        if (error instanceof Error && error.name === "AbortError") {
          console.warn(`${logPrefix} Timeout on ${method} ${logUrl} after ${timeout}ms`);
          throw new ApiException(
            408,
            "TIMEOUT",
            `Request timeout after ${timeout}ms`,
            undefined,
            requestInfo
          );
        }

        // Retry with exponential backoff
        await sleep(retryDelay * Math.pow(2, attempt));
        continue;
      }

      // Log final failure
      console.error(
        `${logPrefix} Final failure on ${method} ${logUrl} after ${retries + 1} attempts:`,
        isDev ? lastError : lastError.message
      );
      throw lastError;
    }
  }

  throw lastError || new Error("Request failed");
}

// Convenience methods
export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    apiFetch<T>(endpoint, { ...options, method: "GET" }),

  post: <T>(endpoint: string, data?: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  put: <T>(endpoint: string, data?: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),

  patch: <T>(endpoint: string, data?: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  delete: <T>(endpoint: string, options?: FetchOptions) =>
    apiFetch<T>(endpoint, { ...options, method: "DELETE" }),

  search: <T>(data?: unknown, options?: FetchOptions) =>
    apiFetch<T>(fetchConfig.searchURL, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  fetch: <T>(endpoint: string, options?: FetchOptions) =>
    apiFetch<T>(endpoint, options),
};
