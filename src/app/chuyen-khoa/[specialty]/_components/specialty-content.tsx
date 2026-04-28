import { Suspense } from "react";
import { getPageBySlug } from "@/lib/api/pages";
import { notFound } from "next/navigation";
import ContentRenderer from "./content-renderer";
import BannerFrame from "@/components/banner-frame";
import SpecialtyHeaderMetadata from "./specialty-header-metadata";
import styles from "../specialty-detail.module.scss";

interface SpecialtyContentProps {
	pageUrl: string;
	banner?: {
		desktopImage: string;
		mobileImage: string;
		alt: string;
		isActive: boolean;
	} | null;
}

async function SpecialtyContent({
	pageUrl,
	banner,
}: SpecialtyContentProps) {
	const subjectData = await getPageBySlug(pageUrl).catch(() => null);

	if (!subjectData) {
		return notFound();
	}

	return (
		<>
			{banner && banner.isActive && (
				<div className={styles.det_sectionWrapper}>
					<div className={styles.det_section}>
						<BannerFrame banner={banner} />
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
			</section>
		</>
	);
}

export default SpecialtyContent;