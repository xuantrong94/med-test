import { IResult } from "../../types";
import DoctorCard from "../doctor-card";
import DoctorListSkeleton from "./doctor-list-skeleton";
import styles from "../../[doctor].module.scss";

export default function DoctorList({
  results,
  isLoading,
  isError,
}: {
  results: IResult[];
  isLoading: boolean;
  isError: boolean;
}) {
  if (isLoading) {
    return <DoctorListSkeleton />;
  }

  if (isError) {
    return (
      <div className={styles.errorState}>
        <p>Không thể tải danh sách bác sĩ. Vui lòng thử lại sau.</p>
      </div>
    );
  }

  return (
    <div className={styles.doctorList}>
      {results.map((item: IResult) => (
        <DoctorCard
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
