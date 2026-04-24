import DoctorCardSkeleton from "../doctor-card/doctor-card-skeleton";
import styles from "../../[doctor].module.scss";

export default function DoctorListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className={styles.doctorList}>
      {Array.from({ length: count }, (_, index) => (
        <DoctorCardSkeleton key={index} />
      ))}
    </div>
  );
}
