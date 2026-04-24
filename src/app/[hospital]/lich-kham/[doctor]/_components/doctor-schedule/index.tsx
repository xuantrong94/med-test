import styles from "./doctor-schedule.module.scss";
import { Schedule, TimeSlot } from "@/types/schedule";
import { DoctorCta } from "@/types/doctor";
import Button from "antd/es/button";
import Link from "next/link";
import React, { useMemo } from "react";
import { formatBookingFeature } from "../../../_helpers";

const TELEMED_TREE_IDS = ["TELEMED", "TELEMEDNOW"];

// https://medpro.vn/chon-lich-kham?feature=booking.TELEMEDNOW&partnerId=digimed&doctorId=digimed_NAMNT&subjectId=digimed_SPK&serviceId=digimed_02&step=chon-ho-so

// https://medpro.vn/chon-lich-kham?feature=booking.DATE&partnerId=pkcxkbstri&doctorId=pkcxkbstri_TRIDM&subjectId=pkcxkbstri_CXK&serviceId=pkcxkbstri_001&date=1772616515000&timeId=001_2_16%3A30&step=chon-ho-so

interface Props {
  schedule: Schedule;
  selectedSlotId: string | null;
  onSelectSlot: (slot: TimeSlot) => void;
  treeId: string;
  popupContent?: string;
  bookingCta: DoctorCta;
}

const buildBookingUrl = (
  cta: DoctorCta,
  date?: number,
  timeId?: string | null
) => {
  const params = new URLSearchParams();

  // Normalize feature using the helper
  const formattedFeature = formatBookingFeature(cta.treeId);
  params.set("feature", formattedFeature);

  params.set("partnerId", cta.partnerId);
  if (cta.doctorId) params.set("doctorId", cta.doctorId);
  if (cta.subjectId) params.set("subjectId", cta.subjectId);
  if (cta.serviceId) params.set("serviceId", cta.serviceId);
  if (date) params.set("date", date.toString());
  if (timeId) params.set("timeId", timeId);
  params.set("step", "chon-ho-so");
  return `https://medpro.vn/chon-lich-kham?${params.toString()}`;
};

export const DoctorScheduleComponent: React.FC<Props> = ({
  schedule,
  selectedSlotId,
  onSelectSlot,
  treeId,
  popupContent,
  bookingCta,
}) => {
  const isTelemed = TELEMED_TREE_IDS.includes(treeId);
  const selectedDay = schedule?.days?.[0];
  const bookingUrl = buildBookingUrl(
    bookingCta,
    selectedDay?.timemiliseconds,
    isTelemed ? null : selectedSlotId
  );

  const timeSlots = useMemo(() => {
    const day = schedule?.days?.[0];
    if (!day) return [];

    if (day.timeSlots && day.timeSlots.length > 0) return day.timeSlots;

    if (day.shifts && day.shifts.length > 0) {
      return day.shifts.flatMap(shift => shift.timeSlotInDay || []);
    }

    return [];
  }, [schedule]);

  const groupedSlots = useMemo(() => {
    const morning: TimeSlot[] = [];
    const afternoon: TimeSlot[] = [];
    const evening: TimeSlot[] = [];

    timeSlots.forEach(slot => {
      const startHour = parseInt(slot.startTime.split(":")[0]);
      if (startHour < 12) {
        morning.push(slot);
      } else if (startHour < 18) {
        afternoon.push(slot);
      } else {
        evening.push(slot);
      }
    });

    return { morning, afternoon, evening };
  }, [timeSlots]);

  const renderSlots = (slots: TimeSlot[]) => {
    return (
      <div className={styles.grid}>
        {slots.map(slot => {
          const isSelected = selectedSlotId === slot.timeId;
          const isAvailable = slot.availableSlot > 0;

          return (
            <div
              key={slot.timeId}
              className={`${styles.slot} ${isSelected ? styles.selected : ""} ${
                !isAvailable ? styles.disabled : ""
              }`}
              onClick={() => isAvailable && onSelectSlot(slot)}
            >
              {slot.startTime}
            </div>
          );
        })}
      </div>
    );
  };

  if (isTelemed && popupContent) {
    return (
      <div className={styles.container}>
        <div className={styles.scheduleContent}>
          <h2>Tư vấn qua điện thoại</h2>
          <div
            className={styles.popupContent}
            dangerouslySetInnerHTML={{ __html: popupContent }}
          />
          <Link
            href={bookingUrl}
            target='_blank'
            className={styles.bookingBtn}
          >
            Đặt lịch
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.scheduleContent}>
        {groupedSlots.morning.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Buổi sáng</h3>
            {renderSlots(groupedSlots.morning)}
          </div>
        )}

        {groupedSlots.afternoon.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Buổi chiều</h3>
            {renderSlots(groupedSlots.afternoon)}
          </div>
        )}

        {groupedSlots.evening.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Buổi tối</h3>
            {renderSlots(groupedSlots.evening)}
          </div>
        )}
        <Link
          href={bookingUrl}
          target='_blank'
          className={styles.bookingBtn}
        >
          Đặt lịch
        </Link>
      </div>
    </div>
  );
};
