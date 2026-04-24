import styles from "../../[doctor].module.scss";

export default function DoctorCardSkeleton() {
  return (
    <div className={styles.doctorCard}>
      <div className={styles.topCard}>
        <div className={styles.avatar}>
          <div
            className={styles.skeletonBox}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.info}>
          <div
            className={styles.skeletonBox}
            style={{ width: "80%", height: "24px", marginBottom: "8px" }}
          />
          <div className={styles.specialty}>
            <div
              className={styles.skeletonBox}
              style={{ width: "100px", height: "16px", marginRight: "8px" }}
            />
            <div
              className={styles.skeletonBox}
              style={{ width: "200px", height: "16px" }}
            />
          </div>
          <div className={styles.specialty}>
            <div
              className={styles.skeletonBox}
              style={{
                width: "80px",
                height: "16px",
                marginRight: "8px",
                marginTop: "4px",
              }}
            />
            <div
              className={styles.skeletonBox}
              style={{ width: "150px", height: "16px", marginTop: "4px" }}
            />
          </div>
          <div className={styles.specialty}>
            <div
              className={styles.skeletonBox}
              style={{
                width: "70px",
                height: "16px",
                marginRight: "8px",
                marginTop: "4px",
              }}
            />
            <div
              className={styles.skeletonBox}
              style={{ width: "100px", height: "16px", marginTop: "4px" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.botCard}>
        <div className={styles.hospitalInfo}>
          <div
            className={styles.skeletonBox}
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <div className={styles.hospitalAddress}>
            <div
              className={styles.skeletonBox}
              style={{ width: "150px", height: "16px", marginBottom: "4px" }}
            />
            <div
              className={styles.skeletonBox}
              style={{ width: "200px", height: "14px" }}
            />
          </div>
        </div>
        <div
          className='skeleton-box'
          style={{ width: "150px", height: "36px", borderRadius: "9999px" }}
        />
      </div>
    </div>
  );
}
