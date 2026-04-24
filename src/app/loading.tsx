import styles from "../assets/styles/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>

      {/* Content area */}
      {/* Content area - Shimmer Skeleton Grid */}
      <div
        className='container'
        style={{ flex: 1, padding: "2rem 1rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <div
                className={styles.skeleton}
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
              <div
                className={styles.skeleton}
                style={{ width: "100px", height: "16px", borderRadius: "4px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
