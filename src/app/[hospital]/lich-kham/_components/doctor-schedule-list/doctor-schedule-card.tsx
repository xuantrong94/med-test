import { FunctionComponent } from "react";
import styles from "./doctor-schedule-list.module.scss";

type Props = {
  avatar?: string;
  name: string;
};
export const DoctorScheduleCard: FunctionComponent<Props> = ({
  avatar,
  name,
}) => {
  return (
    <div className={styles.doctorScheduleCard}>
      <div className={styles.textContent}>
        <div className={styles.avatar}></div>
        <p className={styles.name}>{name}</p>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.seeDetail}>Xem chi tiết</button>
        <button className={styles.bookNow}>Đặt khám ngay</button>
      </div>
    </div>
  );
};
