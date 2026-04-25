import { Suspense } from "react";
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
import SpecialtyHeaderMetadata from "./_components/specialty-header-metadata";
import SpecialtyDynamicContent from "./_components/specialty-dynamic-content";

type SpecialtyProps = {
	params: Promise<{ specialty: string }>;
	searchParams: Promise<{
		city?: string;
		district?: string;
		tab?: string;
	}>;
};

export async function generateStaticParams() {
	return specialties.map((specialty) => ({
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

const SpecialtyPage = async ({
	params,
	searchParams,
}: SpecialtyProps) => {
	const { specialty } = await params;
	const pageUrl = `chuyen-khoa/${specialty}`;

	const subjectData = await getPageBySlug(pageUrl).catch(
		() => null,
	);

	if (!subjectData) {
		return notFound();
	}

	return (
		<LayoutBreadcrumb
			items={[
				{ title: <Link href='/'>Trang chủ</Link> },
				{
					title: (
						<Link href='/chuyen-khoa'>Chuyên khoa</Link>
					),
				},
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
				{subjectData.banner &&
					subjectData.banner.isActive && (
						<div className={styles.det_sectionWrapper}>
							<div className={styles.det_section}>
								<BannerFrame
									banner={subjectData.banner}
								/>
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
							<h1 className={styles.det_pageTitle}>
								{subjectData.title}
							</h1>
							<Suspense
								fallback={
									<div
										className={
											styles.det_metadata
										}
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
						<ContentRenderer
							content={subjectData.content}
						/>
					</div>

					<div
						className=''
						style={{ background: "#F9FAFB" }}
					>
						<div className={styles.det_section}>
							<Suspense
								fallback={<HospitalListSkeleton />}
							>
								<SpecialtyDynamicContent
									specialty={specialty}
									searchParams={searchParams}
								/>
							</Suspense>
						</div>
					</div>
				</section>
			</div>
		</LayoutBreadcrumb>
	);
};

export default SpecialtyPage;
