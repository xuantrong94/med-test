import { FunctionComponent } from "react";
import Link from "next/link";
import { DoctorSchedule } from "@/types/doctor";
import styles from "../schedule-table/schedule-table.module.scss";
import ImageWithSkeleton from "@/components/image-with-skeleton";

interface TableDoctorCardProps {
  doctor: DoctorSchedule;
  date?: string;
}

export const TableDoctorCard: FunctionComponent<TableDoctorCardProps> = ({
  doctor,
  date,
}) => {
  return (
    <div className={styles.doctorCard}>
      {/* <div className={styles.doctorAvatar}>
        <ImageWithSkeleton
          src={doctor.imageUrl || "/logo.svg"}
          alt={doctor.title}
          width={36}
          height={36}
        />
      </div> */}
      <div className={styles.doctorInfo}>
        <Link
          href={`/bac-si/${doctor.slug}/lich-kham${date ? `?date=${date}` : ""}`}
          className={styles.doctorName}
        >
          {doctor.id ? (
            <>
              <span>{doctor.role}</span> <span>{doctor.title}</span>
            </>
          ) : (
            <span>{doctor.cta.roomName || doctor.cta.roomId}</span>
          )}
        </Link>
      </div>
    </div>
  );
};
