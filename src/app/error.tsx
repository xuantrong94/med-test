"use client";

import { useEffect } from "react";
import { env } from "@/config";
import { ErrorDisplay } from "@/components/error-display";
import {
  mapApiExceptionToAppError,
  mapGenericErrorToAppError,
  createAppError,
  ERROR_MESSAGES,
  ERROR_CODES,
} from "@/lib/error";
import { ApiException } from "@/lib/fetch/types";
import styles from "./error.module.scss";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Readonly<ErrorPageProps>) {
  useEffect(() => {
    // Log error to console for debugging
    console.error("Application Error:", error);
  }, [error]);

  // Convert the error to our AppError format
  const getAppError = () => {
    if (error instanceof ApiException) {
      return mapApiExceptionToAppError(error);
    }

    if (error instanceof Error) {
      return mapGenericErrorToAppError(error);
    }

    return createAppError(
      ERROR_MESSAGES.UNKNOWN_ERROR,
      "unknown",
      ERROR_CODES.UNKNOWN_ERROR,
      { digest: (error as any).digest }
    );
  };

  const appError = getAppError();

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <div className={styles.errorHeader}>
          <h1 className={styles.errorTitle}>Oops! Something went wrong</h1>
          <p className={styles.errorSubtitle}>
            We encountered an unexpected error. Don&apos;t worry, we&apos;re on
            it!
          </p>
        </div>

        <ErrorDisplay
          error={appError}
          onRetry={reset}
          className={styles.errorDisplay}
        />

        <div className={styles.buttonSection}>
          <button
            onClick={() => (globalThis.location.href = "/")}
            className={styles.homeButton}
          >
            Go to Homepage
          </button>
        </div>

        {env.isDevelopment && (
          <details className={styles.debugSection}>
            <summary className={styles.debugSummary}>
              Development Info (Click to expand)
            </summary>
            <pre className={styles.debugContent}>
              {error.stack || error.message}
            </pre>
            {error.digest && (
              <p className={styles.debugDigest}>Error ID: {error.digest}</p>
            )}
          </details>
        )}
      </div>
    </div>
  );
}
