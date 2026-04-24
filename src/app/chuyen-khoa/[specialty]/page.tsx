import specialties, {
  getSearchKey,
  getSearchKeys,
} from "@/shared/constants/specialties";
import { Suspense } from "react";
import HospitalSection from "@/app/chuyen-khoa/[specialty]/_components/hospital-section";
import LayoutBreadcrumb from "@/layouts/layout-breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import { getSpecialtyMetadata } from "@/lib/metadata/specialty-metadata";

import styles from "./specialty-detail.module.scss";
import { getPageBySlug, renderMetadata } from "@/lib/api/pages";
import ContentRenderer from "./_components/content-renderer";
import BannerFrame from "@/components/banner-frame";
import { notFound } from "next/navigation";
import HospitalListSkeleton from "./_components/hospital-list-skeleton";
import TabbedInterface from "./_components/tabbed-interface";
import SubjectSection from "./_components/subject-section";

import SpecialtyHeaderMetadata from "./_components/specialty-header-metadata";
import RelatedPostsSection from "./_components/related-posts-section";

type SpecialtyProps = {
  params: Promise<{ specialty: string }>;
  searchParams: Promise<{ city?: string; district?: string; tab?: string }>;
};

export async function generateStaticParams() {
  return specialties.map(specialty => ({
    specialty: specialty.slug,
  }));
}

export async function generateMetadata({
  params,
}: SpecialtyProps): Promise<Metadata> {
  const { specialty } = await params;
  const pageUrl = `chuyen-khoa/${specialty}`;
  const subjectData = await getPageBySlug(pageUrl);

  if (!subjectData || !subjectData.seo) {
    return getSpecialtyMetadata(specialty);
  }

  return renderMetadata(subjectData.seo);
}

const SpecialtyPage = async ({ params, searchParams }: SpecialtyProps) => {
  const { specialty } = await params;
  const { city, district, tab } = await searchParams;
  const activeTab = tab || "hospitals";
  const pageUrl = `chuyen-khoa/${specialty}`;
  const searchKeys = getSearchKeys(specialty);

  const subjectData = await getPageBySlug(pageUrl).catch(() => null);

  if (!subjectData) {
    return notFound();
  }

  return (
    <LayoutBreadcrumb
      items={[
        { title: <Link href='/'>Trang chủ</Link> },
        { title: <Link href='/chuyen-khoa'>Chuyên khoa</Link> },
        { title: subjectData.title },
      ]}
    >
      <div className={styles.det_specialtyPage}>
        <a
          href='#main-content'
          className={styles.skipLink}
        >
          Chuyển đến nội dung chính
        </a>
        {subjectData.banner && subjectData.banner.isActive && (
          <div className={styles.det_sectionWrapper}>
            <div className={styles.det_section}>
              <BannerFrame banner={subjectData.banner} />
            </div>
          </div>
        )}

        <section
          id='main-content'
          className={styles.det_sectionWrapper}
          aria-label={`Chi tiết chuyên khoa ${subjectData.title}`}
        >
          <div className={styles.det_section}>
            <header className={styles.det_contentHeader}>
              <h1 className={styles.det_pageTitle}>{subjectData.title}</h1>
              <Suspense
                fallback={
                  <div
                    className={styles.det_metadata}
                    style={{ height: "24px" }}
                  />
                }
              >
                <SpecialtyHeaderMetadata
                  updatedAt={subjectData.updatedAt}
                  author={subjectData.author}
                />
              </Suspense>
            </header>
            <ContentRenderer content={subjectData.content} />
          </div>

          <div
            className=''
            style={{ background: "#F9FAFB" }}
          >
            <div className={styles.det_section}>
              <TabbedInterface activeTab={activeTab}>
                <div className={styles.det_hospitalListWrapper}>
                  <Suspense
                    key={`${city}-${district}-${activeTab}`}
                    fallback={<HospitalListSkeleton />}
                  >
                    {activeTab === "hospitals" && (
                      <HospitalSection
                        specialty={specialty}
                        searchParams={searchParams}
                      />
                    )}
                    {activeTab === "subjects" && (
                      <SubjectSection
                        specialty={specialty}
                        searchParams={searchParams}
                      />
                    )}
                    {activeTab === "related" && (
                      <RelatedPostsSection searchKeys={searchKeys} />
                    )}
                  </Suspense>
                </div>
              </TabbedInterface>
            </div>
          </div>
        </section>
      </div>
    </LayoutBreadcrumb>
  );
};

export default SpecialtyPage;
