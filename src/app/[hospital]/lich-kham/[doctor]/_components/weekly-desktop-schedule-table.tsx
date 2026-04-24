import { ProcessedWeeklyDay } from "../_api/types";
import { WeeklyWorkScheduleCell } from "./weekly-work-schedule-cell";
import styles from "./general-schedule-table/general-schedule-table.module.scss";
import { normalizeRoomName } from "@/lib/utils/room";

type Props = {
  days: ProcessedWeeklyDay[];
  partnerId: string;
  doctorId: string;
  feature?: string;
  subjectId: string;
};

export function WeeklyDesktopScheduleTable({
  days,
  partnerId,
  doctorId,
  feature,
  subjectId,
}: Props) {
  return (
    <div className={styles.desktopGrid}>
      <div className={styles.gridHeader}>
        <div className={styles.headerCell}>Thứ</div>
        <div className={styles.headerCell}>Ca</div>
        <div className={styles.headerCell}>Giờ khám</div>
        <div className={styles.headerCell}>Phòng</div>
        <div className={styles.headerCell}>Dịch vụ & Giá</div>
        <div className={styles.headerCell}>Thao tác</div>
      </div>

      {days.map((day, dayIdx) => {
        if (!day.shifts || day.shifts.length === 0) return null;

        // Group shifts by Room within this day
        const roomGroups: Record<string, typeof day.shifts> = {};
        day.shifts.forEach(shift => {
          const roomName = normalizeRoomName(shift.roomName);
          if (!roomGroups[roomName]) roomGroups[roomName] = [];
          roomGroups[roomName].push(shift);
        });

        const roomEntries = Object.entries(roomGroups);
        const isLastDay = dayIdx === days.length - 1;

        const daySeparatorClass = isLastDay
          ? styles.noSeparator
          : styles.daySeparator;

        return (
          <div
            key={day.date}
            className={`${styles.dayGroup} ${daySeparatorClass}`}
          >
            {/* Left Pane: Vertically Centered Day Column */}
            <div
              className={`${styles.cell} ${styles.dayOfWeek}`}
              data-label='Thứ'
              style={{ justifyContent: "center" }}
            >
              {day.dayOfWeek}
              <div
                style={{
                  fontSize: "12px",
                  color: "#8c8c8c",
                  fontWeight: "normal",
                  marginTop: "4px",
                }}
              >
                {day.displayDate}
              </div>
            </div>

            {/* Right Pane: Rooms Container */}
            <div className={styles.roomsContainer}>
              {roomEntries.map(([roomName, roomShifts], roomIdx) => {
                const isLastRoomOfDay = roomIdx === roomEntries.length - 1;
                const roomSeparatorClass = isLastRoomOfDay
                  ? ""
                  : styles.roomSeparator;

                return (
                  <div
                    key={`${day.date}-${roomName}`}
                    className={`${styles.gridRow} ${roomSeparatorClass}`}
                  >
                    <div
                      className={styles.cell}
                      data-label='Ca'
                    >
                      <WeeklyWorkScheduleCell
                        shifts={roomShifts}
                        displayType='shift'
                        partnerId={partnerId}
                        doctorId={doctorId}
                        timemiliseconds={day.timemiliseconds}
                        date={day.date}
                        feature={feature}
                        subjectId={subjectId}
                      />
                    </div>

                    <div
                      className={styles.cell}
                      data-label='Giờ khám'
                    >
                      <WeeklyWorkScheduleCell
                        shifts={roomShifts}
                        displayType='time'
                        partnerId={partnerId}
                        doctorId={doctorId}
                        timemiliseconds={day.timemiliseconds}
                        date={day.date}
                        feature={feature}
                        subjectId={subjectId}
                      />
                    </div>

                    <div
                      className={styles.cell}
                      data-label='Phòng'
                    >
                      <WeeklyWorkScheduleCell
                        shifts={roomShifts}
                        displayType='room'
                        partnerId={partnerId}
                        doctorId={doctorId}
                        timemiliseconds={day.timemiliseconds}
                        date={day.date}
                        feature={feature}
                        subjectId={subjectId}
                      />
                    </div>

                    <div
                      className={styles.cell}
                      data-label='Dịch vụ & Giá'
                    >
                      <WeeklyWorkScheduleCell
                        shifts={roomShifts}
                        displayType='service'
                        partnerId={partnerId}
                        doctorId={doctorId}
                        timemiliseconds={day.timemiliseconds}
                        date={day.date}
                        feature={feature}
                        subjectId={subjectId}
                      />
                    </div>

                    <div
                      className={styles.cell}
                      data-label='Thao tác'
                    >
                      <WeeklyWorkScheduleCell
                        shifts={roomShifts}
                        displayType='action'
                        partnerId={partnerId}
                        doctorId={doctorId}
                        timemiliseconds={day.timemiliseconds}
                        date={day.date}
                        feature={feature}
                        subjectId={subjectId}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
