import SpecialtyPageSkeleton from "./_components/specialty-page-skeleton";
import HospitalListSkeleton from "./_components/hospital-list-skeleton";
import styles from "./specialty-detail.module.scss";

export default function Loading() {
	return (
		<div className={styles.det_specialtyPage}>
			<SpecialtyPageSkeleton />
			<div
				className=''
				style={{ background: "#F9FAFB" }}
			>
				<div className={styles.det_section}>
					<HospitalListSkeleton />
				</div>
			</div>
		</div>
	);
}