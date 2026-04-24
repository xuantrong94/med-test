export interface AppError {
  message: string;
  code?: string;
  type: "network" | "validation" | "server" | "timeout" | "unknown";
  details?: Record<string, any>;
  retryable?: boolean;
}

export interface ApiResult<T> {
  data?: T;
  error?: AppError;
  success: boolean;
}

export const ERROR_MESSAGES = {
  NETWORK_ERROR:
    "Network connection failed. Please check your internet connection.",
  SERVER_ERROR: "Server is currently unavailable. Please try again later.",
  TIMEOUT_ERROR: "Request timed out. Please try again.",
  NOT_FOUND: "The requested resource was not found.",
  UNAUTHORIZED: "You are not authorized to access this resource.",
  VALIDATION_ERROR: "Please check your input and try again.",
  UNKNOWN_ERROR: "An unexpected error occurred. Please try again.",
} as const;

export const ERROR_CODES = {
  NETWORK_ERROR: "NETWORK_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
  TIMEOUT_ERROR: "TIMEOUT_ERROR",
  NOT_FOUND: "NOT_FOUND",
  UNAUTHORIZED: "UNAUTHORIZED",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;
