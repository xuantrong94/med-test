import React, { Suspense } from "react";
import TabbedInterface from "./tabbed-interface";
import HospitalSection from "./hospital-section";
import SubjectSection from "./subject-section";
import RelatedPostsSection from "./related-posts-section";
import HospitalListSkeleton from "./hospital-list-skeleton";
import CitySelectSkeleton from "./city-select-skeleton";
import { getSearchKeys } from "@/shared/constants/specialties";
import styles from "../specialty-detail.module.scss";

interface SpecialtyDynamicContentProps {
	specialty: string;
	searchParams: Promise<{
		city?: string;
		district?: string;
		tab?: string;
		page?: string;
	}>;
}

export default async function SpecialtyDynamicContent({
	specialty,
	searchParams,
}: SpecialtyDynamicContentProps) {
	const { city, district, tab } = await searchParams;
	const activeTab = tab || "hospitals";
	const searchKeys = getSearchKeys(specialty);

	return (
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
						<RelatedPostsSection
							searchKeys={searchKeys}
						/>
					)}
				</Suspense>
			</div>
		</TabbedInterface>
	);
}
