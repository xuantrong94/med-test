import styles from "../specialty-detail.module.scss";
import LayoutBreadcrumb from "@/layouts/layout-breadcrumb";
import Link from "next/link";

const SpecialtyPageSkeleton = () => {
  return (
    <LayoutBreadcrumb
      items={[
        { title: <Link href='/'>Trang chủ</Link> },
        {
          title: (
            <Link href='/chuyen-khoa'>Chuyên khoa</Link>
          ),
        },
        { title: <div className={styles.skel_breadcrumb} style={{ width: 120, height: 20 }} /> },
      ]}
    >
      <div className={styles.det_specialtyPage}>
        <div className={styles.det_sectionWrapper}>
          <div className={styles.det_section}>
            <div className={styles.skel_banner} />
          </div>
        </div>

        <section className={styles.det_sectionWrapper}>
          <div className={styles.det_section}>
            <div className={styles.skel_title} style={{ width: 280, height: 36 }} />
            <div className={styles.skel_meta} style={{ width: 180, height: 16, marginTop: 12 }} />
            <div className={styles.skel_content} style={{ marginTop: 32 }}>
              <div className={styles.skel_paragraph} style={{ width: "100%", height: 20 }} />
              <div className={styles.skel_paragraph} style={{ width: "85%", height: 20, marginTop: 12 }} />
              <div className={styles.skel_paragraph} style={{ width: "70%", height: 20, marginTop: 12 }} />
            </div>
          </div>
        </section>

        <div style={{ background: "#F9FAFB" }}>
          <div className={styles.det_section}>
            <div className={styles.skel_tabs} style={{ marginBottom: 24 }}>
              <div className={styles.skel_tab} style={{ width: 100, height: 40 }} />
              <div className={styles.skel_tab} style={{ width: 100, height: 40, marginLeft: 8 }} />
              <div className={styles.skel_tab} style={{ width: 100, height: 40, marginLeft: 8 }} />
            </div>
            <div className={styles.skel_hospitalList}>
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className={styles.skel_hospitalItemSkeleton}>
                  <div className={styles.skel_hospitalMainContentSkeleton}>
                    <div className={styles.skel_hospitalImageSkeleton} />
                    <div className={styles.skel_hospitalInfoWrapperSkeleton}>
                      <div className={styles.skel_hospitalTitleSkeleton} />
                      <div className={styles.skel_hospitalDescSkeleton}>
                        <div className={styles.skel_hospitalIconSkeleton} />
                        <div className={styles.skel_hospitalTextSkeleton} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.skel_hospitalFooterSkeleton}>
                    <div className={styles.skel_detailButtonSkeleton} />
                    <div className={styles.skel_bookButtonSkeleton} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutBreadcrumb>
  );
};

export default SpecialtyPageSkeleton;