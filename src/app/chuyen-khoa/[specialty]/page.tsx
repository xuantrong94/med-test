import specialties from "@/shared/constants/specialties";
import { Suspense } from "react";
import LayoutBreadcrumb from "@/layouts/layout-breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import { getSpecialtyMetadata } from "@/lib/metadata/specialty-metadata";

import HospitalListSkeleton from "./_components/hospital-list-skeleton";
import SpecialtyDynamicContent from "./_components/specialty-dynamic-content";
import SpecialtyPageSkeleton from "./_components/specialty-page-skeleton";
import SpecialtyContent from "./_components/specialty-content";

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
	return getSpecialtyMetadata(specialty);
}

const SpecialtyPage = async ({
	params,
	searchParams,
}: SpecialtyProps) => {
	const { specialty } = await params;
	const pageUrl = `chuyen-khoa/${specialty}`;

	return (
		<LayoutBreadcrumb
			items={[
				{ title: <Link href='/'>Trang chủ</Link> },
				{
					title: (
						<Link href='/chuyen-khoa'>Chuyên khoa</Link>
					),
				},
				{ title: "" },
			]}
		>
			<Suspense fallback={<SpecialtyPageSkeleton />}>
				<SpecialtyContent pageUrl={pageUrl} />
			</Suspense>

			<Suspense fallback={<HospitalListSkeleton />}>
				<SpecialtyDynamicContent
					specialty={specialty}
					searchParams={searchParams}
				/>
			</Suspense>
		</LayoutBreadcrumb>
	);
};

export default SpecialtyPage;