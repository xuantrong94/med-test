import styles from "./doctor-detail.module.scss";
import AuditOutlined from "@ant-design/icons/lib/icons/AuditOutlined";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import StarFilled from "@ant-design/icons/lib/icons/StarFilled";
import EnvironmentOutlined from "@ant-design/icons/lib/icons/EnvironmentOutlined";
import CheckCircleFilled from "@ant-design/icons/lib/icons/CheckCircleFilled";
import { DoctorDetailSchedule } from "@/types/doctor";
import { Partner } from "@/types/partner";
import React from "react";
import Image from "next/image";

type Props = {
  doctor: DoctorDetailSchedule;
  partnerInfo?: Partner;
  // selectedSlot: TimeSlot | null;
  // schedule: Schedule;
};

export const DoctorDetail: React.FC<Props> = ({ doctor, partnerInfo }) => {
  return (
    <div className={styles.container}>
      {/* <Steps /> */}
      <div className={styles.doctorCard}>
        <DoctorInfo
          doctor={doctor}
          showAddress={!partnerInfo}
        />
        <BookingInfoSummary
          doctor={doctor}
          partnerInfo={partnerInfo}
          // selectedSlot={selectedSlot}
          // schedule={schedule}
        />
      </div>
    </div>
  );
};

export const Steps = () => {
  const steps = [
    { title: "Specialty", status: "completed" },
    { title: "Appointment Type", status: "completed" },
    { title: "Date & Time", status: "current" },
    { title: "Basic Information", status: "pending" },
    { title: "Payment", status: "pending" },
    { title: "Confirmation", status: "pending" },
  ];

  return (
    <div className={styles.stepsContainer}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`${styles.step} ${styles[step.status]}`}>
            <div className={styles.stepIcon}>
              {step.status === "completed" ? (
                <CheckCircleFilled />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className={styles.stepTitle}>{step.title}</span>
          </div>
          {index < steps.length - 1 ? (
            <div className={styles.stepLine} />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export const DoctorInfo = ({
  doctor,
  showAddress = true,
}: {
  doctor: DoctorDetailSchedule;
  showAddress?: boolean;
}) => {
  const rating = doctor.description?.rating?.rate || 5.0;

  return (
    <div className={styles.infoSection}>
      <div
        className={styles.avatarWrapper}
        style={{ width: 100, height: 100, flexShrink: 0 }}
      >
        <Image
          width={100}
          height={100}
          src={doctor.imageUrl}
          alt={doctor.title}
          className={styles.avatar}
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={styles.details}
        style={{ paddingLeft: "24px" }}
      >
        <div className={styles.nameRow}>
          <h2 className={styles.name}>{doctor.title}</h2>
          <div className={styles.rating}>
            <StarFilled />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className={styles.role}>{doctor.role}</p>
        {showAddress && (
          <div className={styles.address}>
            <EnvironmentOutlined className={styles.icon} />
            <span>{doctor.partner?.address || "Hồ Chí Minh, Việt Nam"}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const BookingInfoSummary = ({
  doctor,
  partnerInfo,
  // selectedSlot,
  // schedule,
}: {
  doctor: DoctorDetailSchedule;
  partnerInfo?: Partner;
  // selectedSlot: TimeSlot | null;
  // schedule: Schedule;
}) => {
  const service = doctor.services?.[0]?.name || "N/A";
  const specialty = doctor.subjects?.[0]?.name || "N/A";

  return (
    <div className={styles.bookingSummary}>
      <div className={styles.partnerHeader}>
        <div className={styles.partnerIcon}>
          <HomeOutlined />
        </div>
        <div className={styles.partnerContent}>
          <h3 className={styles.partnerName}>{partnerInfo?.name}</h3>
          <p className={styles.partnerAddress}>
            <EnvironmentOutlined className={styles.icon} />
            {partnerInfo?.address}
          </p>
        </div>
      </div>

      <div className={styles.summaryDivider} />

      <h3 className={styles.summaryTitle}>Thông tin đặt khám</h3>
      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.itemIcon}>
            <AuditOutlined />
          </div>
          <div className={styles.itemContent}>
            <label>Chuyên khoa</label>
            <p>{specialty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
