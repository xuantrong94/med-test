import { FunctionComponent } from "react";
import { CalendarX } from "lucide-react";
import styles from "./empty-schedule.module.scss";

export const EmptySchedule: FunctionComponent = () => {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.iconWrapper}>
        <CalendarX
          size={64}
          className={styles.icon}
        />
      </div>
      <h3 className={styles.title}>Không có lịch khám</h3>
      <p className={styles.description}>
        Hiện tại không tìm thấy lịch khám phù hợp với tiêu chí của bạn. Vui lòng
        thay đổi bộ lọc hoặc chọn ngày khác.
      </p>
    </div>
  );
};
