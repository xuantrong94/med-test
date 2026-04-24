import styles from "../specialty-detail.module.scss";

const HospitalListSkeleton = () => {
  return (
    <div className={styles.skel_hospitalList}>
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className={styles.skel_hospitalItemSkeleton}
        >
          <div className={styles.skel_hospitalMainContentSkeleton}>
            <div className={styles.skel_hospitalImageSkeleton}></div>
            <div className={styles.skel_hospitalInfoWrapperSkeleton}>
              <div className={styles.skel_hospitalTitleSkeleton}></div>
              <div className={styles.skel_hospitalDescSkeleton}>
                <div className={styles.skel_hospitalIconSkeleton}></div>
                <div className={styles.skel_hospitalTextSkeleton}></div>
              </div>
            </div>
          </div>
          <div className={styles.skel_hospitalFooterSkeleton}>
            <div className={styles.skel_detailButtonSkeleton}></div>
            <div className={styles.skel_bookButtonSkeleton}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HospitalListSkeleton;
