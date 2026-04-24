import { ApiException } from "@/lib/fetch/types";
import { AppError, ApiResult, ERROR_MESSAGES, ERROR_CODES } from "./types";

export function createAppError(
  message: string,
  type: AppError["type"] = "unknown",
  code?: string,
  details?: Record<string, any>
): AppError {
  return {
    message,
    type,
    code,
    details,
    retryable: type === "network" || type === "timeout" || type === "server",
  };
}

export function mapApiExceptionToAppError(error: ApiException): AppError {
  const status = error.status;

  if (status === 404) {
    return createAppError(
      ERROR_MESSAGES.NOT_FOUND,
      "validation",
      ERROR_CODES.NOT_FOUND,
      { originalMessage: error.message }
    );
  }

  if (status === 401 || status === 403) {
    return createAppError(
      ERROR_MESSAGES.UNAUTHORIZED,
      "validation",
      ERROR_CODES.UNAUTHORIZED,
      { originalMessage: error.message }
    );
  }

  if (status >= 400 && status < 500) {
    return createAppError(
      error.message || ERROR_MESSAGES.VALIDATION_ERROR,
      "validation",
      error.code || ERROR_CODES.VALIDATION_ERROR,
      { status, errors: error.errors }
    );
  }

  if (status >= 500) {
    return createAppError(
      ERROR_MESSAGES.SERVER_ERROR,
      "server",
      ERROR_CODES.SERVER_ERROR,
      { originalMessage: error.message, status }
    );
  }

  return createAppError(
    error.message || ERROR_MESSAGES.UNKNOWN_ERROR,
    "unknown",
    error.code || ERROR_CODES.UNKNOWN_ERROR,
    { status }
  );
}

export function mapGenericErrorToAppError(error: Error): AppError {
  if (error.name === "AbortError") {
    return createAppError(
      ERROR_MESSAGES.TIMEOUT_ERROR,
      "timeout",
      ERROR_CODES.TIMEOUT_ERROR
    );
  }

  if (
    error.message?.toLowerCase().includes("network") ||
    error.message?.toLowerCase().includes("fetch")
  ) {
    return createAppError(
      ERROR_MESSAGES.NETWORK_ERROR,
      "network",
      ERROR_CODES.NETWORK_ERROR,
      { originalMessage: error.message }
    );
  }

  return createAppError(
    error.message || ERROR_MESSAGES.UNKNOWN_ERROR,
    "unknown",
    ERROR_CODES.UNKNOWN_ERROR,
    { originalMessage: error.message }
  );
}

export function createSuccessResult<T>(data: T): ApiResult<T> {
  return {
    data,
    success: true,
  };
}

export function createErrorResult<T>(error: AppError): ApiResult<T> {
  return {
    error,
    success: false,
  };
}

export async function safeApiCall<T>(
  apiCall: () => Promise<T>
): Promise<ApiResult<T>> {
  try {
    const data = await apiCall();
    return createSuccessResult(data);
  } catch (error) {
    let appError: AppError;

    if (error instanceof ApiException) {
      appError = mapApiExceptionToAppError(error);
    } else if (error instanceof Error) {
      appError = mapGenericErrorToAppError(error);
    } else {
      appError = createAppError(
        ERROR_MESSAGES.UNKNOWN_ERROR,
        "unknown",
        ERROR_CODES.UNKNOWN_ERROR,
        { originalError: error }
      );
    }

    return createErrorResult(appError);
  }
}
