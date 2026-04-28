import styles from "./city-select.module.scss";

export default function CitySelectSkeleton() {
	return (
		<div
			className={styles.citySelectContainer}
			style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
		>
			<div className={styles.selectPlaceholder}>Tất cả tỉnh/thành phố</div>
			<div
				className={styles.selectPlaceholder}
				style={{ marginLeft: 8 }}
			>
				Tất cả quận/huyện
			</div>
		</div>
	);
}