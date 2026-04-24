import styles from "./loading.module.scss";

export default function Loading({
  showContainer = true,
}: {
  showContainer?: boolean;
}) {
  const content = (
    <div className={styles.loadingContainer}>
      <div className={styles.tableLike}>
        {/* Header Row Skeleton */}
        <div className={styles.headerRow}>
          {/* Subject Header Placeholder */}
          <div
            className={styles.headerItem}
            style={{ flexGrow: 0, width: "200px" }}
          ></div>
          {/* Date Headers Placeholders */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`header-${index}`}
              className={styles.headerItem}
            ></div>
          ))}
        </div>

        {/* Body Rows Skeletons */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`row-${index}`}
            className={styles.bodyRow}
          >
            <div className={styles.subjectCell}></div>
            <div className={styles.rowContent}></div>
          </div>
        ))}
      </div>
    </div>
  );

  if (!showContainer) return content;

  return <div className='container'>{content}</div>;
}
