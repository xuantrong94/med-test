import Link from "next/link";
import { DoctorDetail } from "../doctor-detail";
import styles from "./main-content.module.scss";
import { DoctorCta, DoctorDetailSchedule } from "@/types/doctor";
import { Schedule } from "@/types/schedule";
import React from "react";

import { BookingTreeChild } from "@/app/[hospital]/lich-kham/_types";
import { GeneralScheduleTable } from "../general-schedule-table";
import { Partner } from "@/types/partner";
import { LabelWrapper } from "../LabelWrapper";

import { ProcessedWeeklyDay } from "../../_api/types";
import { WeeklyGeneralScheduleTable } from "../weekly-general-schedule-table";

type Props = {
  doctor: DoctorDetailSchedule;
  schedule: Schedule;
  popupContent?: string;
  bookingCta: DoctorCta;
  generalScheduleServices?: BookingTreeChild[];
  partnerInfo?: Partner;
  weeklyDays?: ProcessedWeeklyDay[];
  backUrl?: string;
};

export const MainContent: React.FC<Props> = ({
  doctor,
  bookingCta,
  generalScheduleServices,
  partnerInfo,
  weeklyDays,
  backUrl,
}) => {
  return (
    <div className={`${styles.container} container`}>
      {backUrl && (
        <Link
          href={backUrl}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            color: "#00b5f1",
            fontWeight: 500,
            textDecoration: "none",
            padding: "12px 0 8px",
          }}
        >
          ← Quay lại
        </Link>
      )}
      <LabelWrapper
        label='Doctor Detail Section'
        color='#1890ff'
      >
        <DoctorDetail
          doctor={doctor}
          partnerInfo={partnerInfo}
        />
      </LabelWrapper>
      {weeklyDays && weeklyDays.length > 0 ? (
        <LabelWrapper
          label='Weekly Schedule Table (NEW)'
          color='#ff4d4f'
        >
          <WeeklyGeneralScheduleTable
            days={weeklyDays}
            partnerId={bookingCta.partnerId}
            doctorId={bookingCta.doctorId || ""}
          />
        </LabelWrapper>
      ) : (
        generalScheduleServices &&
        generalScheduleServices.length > 0 && (
          <LabelWrapper
            label='Schedule Table'
            color='#52c41a'
          >
            <GeneralScheduleTable
              services={generalScheduleServices}
              bookingCta={bookingCta}
            />
          </LabelWrapper>
        )
      )}
    </div>
  );
};
