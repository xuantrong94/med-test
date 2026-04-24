export interface FetchOptions extends globalThis.RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  skipAuth?: boolean;
  /** Tên function gọi API — hiển thị trong error message để trace chính xác (dev only) */
  caller?: string;
  cache?: globalThis.RequestCache;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}
export interface ApiError {
  message: string;
  code?: string;
  status: number;
  errors?: Record<string, string[]>;
}

const isDev = process.env.NODE_ENV !== "production";

export class ApiException extends Error {
  /** Request URL — only populated in dev mode */
  public url?: string;
  /** HTTP method — only populated in dev mode */
  public method?: string;
  /** Caller function name — only populated in dev mode */
  public caller?: string;

  constructor(
    public status: number,
    public code: string,
    message: string,
    public errors?: Record<string, string[]>,
    requestInfo?: { url?: string; method?: string; caller?: string }
  ) {
    const devDetail =
      isDev && requestInfo
        ? ` [${requestInfo.caller ? `${requestInfo.caller} → ` : ""}${requestInfo.method ?? "GET"} ${requestInfo.url}]`
        : "";
    super(`${message}${devDetail}`);
    this.name = "ApiException";

    if (isDev && requestInfo) {
      this.url = requestInfo.url;
      this.method = requestInfo.method;
      this.caller = requestInfo.caller;
    }
  }
}
