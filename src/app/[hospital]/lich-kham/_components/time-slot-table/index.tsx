import { DoctorScheduleList } from "@/app/[hospital]/lich-kham/_components/doctor-schedule-list";
import { FunctionComponent } from "react";
import styles from "./time-slot-table.module.scss";

type MorningSlot = "7:30 - 10:30" | "8:00 - 11:00";
type AfternoonSlot = "13:00 - 16:30" | "13:30 - 17:00";

type Props =
  | {
      timeOfDay: "morning";
      timeSlot: MorningSlot;
    }
  | {
      timeOfDay: "afternoon";
      timeSlot: AfternoonSlot;
    };
export const TimeSlotTable: FunctionComponent<Props> = ({
  timeOfDay,
  timeSlot,
}) => {
  return (
    <div className={styles.timeSlotTable}>
      <div className={styles.timeOfDay}>
        {timeOfDay} ({timeSlot})
      </div>
      <DoctorScheduleList />
    </div>
  );
};
