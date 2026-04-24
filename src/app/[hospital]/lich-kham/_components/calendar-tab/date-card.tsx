import { FunctionComponent } from "react";
import styles from "./calendar-tab.module.scss";

type Props = {
  dateOfWeek: string;
  date: string;
  month: string;
  isToday?: boolean;
  isInput?: boolean;
};
export const DateCard: FunctionComponent<Props> = ({
  dateOfWeek,
  date,
  month,
  isToday,
  isInput,
}) => {
  return (
    <div
      className={`${styles.cardWrapper} ${isInput ? styles.inputDate : ""} ${isToday ? styles.today : ""}`}
    >
      <div className={styles.dateOfWeek}>{dateOfWeek}</div>
      <div className={styles.theDate}>
        {date}/{month}
      </div>
    </div>
  );
};
