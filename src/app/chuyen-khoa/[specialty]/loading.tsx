import { BreadcrumbSkeleton } from "@/layouts/layout-breadcrumb";
import HospitalListSkeleton from "./_components/hospital-list-skeleton";
import styles from "./specialty-detail.module.scss";

const SpecialtyLoading = () => {
  return (
    <>
      <BreadcrumbSkeleton />
      <div className={styles.specialtyPage}>
        {/* Banner Skeleton */}
        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <div className={styles.bannerSkeleton} />
          </div>
        </div>

        <section className={styles.sectionWrapper}>
          {/* Header Skeleton */}
          <div className={styles.section}>
            <header className={styles.contentHeader}>
              <div className={styles.pageTitleSkeleton} />
              <div className={styles.metadataSkeleton}>
                <div className={styles.metaItem} />
                <div className={styles.metaItem} />
              </div>
            </header>
          </div>

          {/* Content Skeleton */}
          <div className={styles.section}>
            <div className={styles.contentSkeleton}>
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </div>

          {/* Tabs Skeleton Section */}
          <div style={{ background: "#F9FAFB" }}>
            <div className={styles.section}>
              <div className={styles.tabsSkeleton}>
                <div className={styles.tabItem} />
                <div className={styles.tabItem} />
              </div>
              <div className={styles.hospitalListWrapper}>
                <HospitalListSkeleton />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpecialtyLoading;
