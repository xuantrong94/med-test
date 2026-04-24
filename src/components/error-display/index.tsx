import { AppError } from "@/lib/error";
import styles from "./error-display.module.scss";

interface ErrorDisplayProps {
  error: AppError;
  onRetry?: () => void;
  className?: string;
}

export function ErrorDisplay({
  error,
  onRetry,
  className = "",
}: Readonly<ErrorDisplayProps>) {
  const getErrorIcon = () => {
    switch (error.type) {
      case "network":
        return "🌐";
      case "server":
        return "🔧";
      case "timeout":
        return "⏰";
      case "validation":
        return "⚠️";
      default:
        return "❌";
    }
  };

  return (
    <div
      className={`${styles.errorContainer} ${styles[error.type]} ${className}`}
    >
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>{getErrorIcon()}</div>
        <div className={styles.errorMessage}>
          <h3 className={styles.errorTitle}>Something went wrong</h3>
          <p className={styles.errorText}>{error.message}</p>
          {error.code && (
            <p className={styles.errorCode}>Error Code: {error.code}</p>
          )}
        </div>
        {error.retryable && onRetry && (
          <button
            onClick={onRetry}
            className={styles.retryButton}
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

interface LoadingStateProps {
  className?: string;
  message?: string;
}

export function LoadingState({
  className = "",
  message = "Loading...",
}: LoadingStateProps) {
  return (
    <div className={`${styles.loadingContainer} ${className}`}>
      <div className={styles.loadingContent}>
        <div className={styles.loadingSpinner}></div>
        <span>{message}</span>
      </div>
    </div>
  );
}
