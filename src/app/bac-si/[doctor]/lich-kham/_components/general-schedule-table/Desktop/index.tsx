import React, { Suspense } from "react";
import { BookingTreeChild } from "@/app/[hospital]/lich-kham/_types";
import { DoctorCta } from "@/types/doctor";
import { WorkScheduleCell } from "../../work-schedule-cell";
import styles from "../general-schedule-table.module.scss";

type Props = {
  services: BookingTreeChild[];
  bookingCta: DoctorCta;
  weekDays: any[];
  buildBookingUrl: (cta: DoctorCta, serviceId?: string) => string;
};

export default function DesktopScheduleTable({
  services,
  bookingCta,
  weekDays,
  buildBookingUrl,
}: Props) {
  return (
    <div className={styles.gridTable}>
      <div className={styles.gridHeader}>
        <div className={styles.headerCell}>Thứ</div>
        <div className={styles.headerCell}>Ca</div>
        <div className={styles.headerCell}>Giờ khám</div>
        <div className={styles.headerCell}>Phòng</div>
        <div className={styles.headerCell}>Dịch vụ & Giá</div>
        <div className={styles.headerCell}>Thao tác</div>
      </div>

      {weekDays.map(day => {
        const apiDate = day.fullDate!.replace(/-/g, "");
        return (
          <Suspense
            key={apiDate}
            fallback={<ScheduleRowSkeleton />}
          >
            <ScheduleDayRow
              day={day}
              apiDate={apiDate}
              services={services}
              bookingCta={bookingCta}
              buildBookingUrl={buildBookingUrl}
            />
          </Suspense>
        );
      })}
    </div>
  );
}

function ScheduleRowSkeleton() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 80px 150px 150px 1fr 120px",
        gap: "16px",
        padding: "20px 16px",
        borderBottom: "1px solid #f5f5f5",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "24px",
          background: "#f0f0f0",
          borderRadius: "4px",
          width: "60px",
        }}
      />
      <div
        style={{
          height: "24px",
          background: "#f0f0f0",
          borderRadius: "4px",
          width: "40px",
        }}
      />
      <div
        style={{
          height: "24px",
          background: "#f0f0f0",
          borderRadius: "4px",
          width: "80px",
        }}
      />
      <div
        style={{
          height: "24px",
          background: "#f0f0f0",
          borderRadius: "4px",
          width: "100px",
        }}
      />
      <div
        style={{
          height: "24px",
          background: "#f5f5f5",
          borderRadius: "4px",
          flex: 1,
        }}
      />
      <div
        style={{
          height: "36px",
          background: "#f0f0f0",
          borderRadius: "6px",
          width: "100px",
        }}
      />
    </div>
  );
}

async function ScheduleDayRow({
  day,
  apiDate,
  services,
  bookingCta,
  buildBookingUrl,
}: any) {
  return (
    <div className={styles.gridRow}>
      <div
        className={`${styles.cell} ${styles.dayOfWeek}`}
        data-label='Thứ'
      >
        {day.dateOfWeek}
        <div
          style={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#8c8c8c",
            marginTop: "4px",
          }}
        >
          {day.fullDate}
        </div>
      </div>

      <div
        className={styles.cell}
        data-label='Ca'
      >
        <WorkScheduleCell
          doctorId={bookingCta.doctorId || ""}
          services={services}
          subjectId={bookingCta.subjectId || ""}
          partnerId={bookingCta.partnerId}
          treeId={bookingCta.treeId || "DOCTOR"}
          date={apiDate}
          displayType='shift'
          buildBookingUrl={(sId: string) => buildBookingUrl(bookingCta, sId)}
        />
      </div>

      <div
        className={styles.cell}
        data-label='Giờ khám'
      >
        <WorkScheduleCell
          doctorId={bookingCta.doctorId || ""}
          services={services}
          subjectId={bookingCta.subjectId || ""}
          partnerId={bookingCta.partnerId}
          treeId={bookingCta.treeId || "DOCTOR"}
          date={apiDate}
          displayType='time'
          buildBookingUrl={(sId: string) => buildBookingUrl(bookingCta, sId)}
        />
      </div>

      <div
        className={styles.cell}
        data-label='Phòng'
      >
        <WorkScheduleCell
          doctorId={bookingCta.doctorId || ""}
          services={services}
          subjectId={bookingCta.subjectId || ""}
          partnerId={bookingCta.partnerId}
          treeId={bookingCta.treeId || "DOCTOR"}
          date={apiDate}
          displayType='room'
          buildBookingUrl={(sId: string) => buildBookingUrl(bookingCta, sId)}
        />
      </div>

      <div
        className={styles.cell}
        data-label='Dịch vụ & Giá'
      >
        <WorkScheduleCell
          doctorId={bookingCta.doctorId || ""}
          services={services}
          subjectId={bookingCta.subjectId || ""}
          partnerId={bookingCta.partnerId}
          treeId={bookingCta.treeId || "DOCTOR"}
          date={apiDate}
          displayType='service'
          buildBookingUrl={(sId: string) => buildBookingUrl(bookingCta, sId)}
        />
      </div>

      <div
        className={styles.cell}
        data-label='Thao tác'
      >
        <WorkScheduleCell
          doctorId={bookingCta.doctorId || ""}
          services={services}
          subjectId={bookingCta.subjectId || ""}
          partnerId={bookingCta.partnerId}
          treeId={bookingCta.treeId || "DOCTOR"}
          date={apiDate}
          displayType='action'
          buildBookingUrl={(sId: string) => buildBookingUrl(bookingCta, sId)}
        />
      </div>
    </div>
  );
}
