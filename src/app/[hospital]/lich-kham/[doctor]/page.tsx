import LayoutBreadcrumb, {
  BreadcrumbSkeleton,
} from "@/layouts/layout-breadcrumb";
import Link from "next/link";
import { getDoctorDetail } from "@/shared/api/getDoctorDetail.api";
import { getHospitalBySlug } from "../_contents/hospitals";
import { Suspense } from "react";
import { DoctorScheduleSkeleton } from "./_components/doctor-schedule-skeleton";
import { DoctorDetailSchedule } from "@/types/doctor";
import { ScheduleContainer } from "./_components/schedule-container";
import { LabelWrapper } from "./_components/LabelWrapper";
import { getPartnerInfo } from "@/shared/api/getPartnerInfo.api";
import { Partner } from "@/types/partner";
import { env } from "@/config/env";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ hospital: string; doctor: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doctor: doctorId, hospital } = await params;

  try {
    const doctor = await getDoctorDetail("", doctorId);

    if (!doctor || !doctor.id) {
      return {
        title: "Không tìm thấy thông tin bác sĩ | Medpro",
        description: "Thông tin bác sĩ không tồn tại hoặc đã bị gỡ bỏ.",
      };
    }

    const partnerName = doctor.partner?.name || "";
    const doctorName = doctor.title || "";

    const title = `Đặt lịch khám ${doctorName} - ${partnerName} | Medpro`;
    const description = `Thông tin lịch khám, chuyên khoa và đặt lịch hẹn với ${doctorName} tại ${partnerName}. Đăng ký khám nhanh chóng qua Medpro.`;
    const url = `${env.app.url}/${hospital}/lich-kham/${doctorId}`;

    const keywords = [
      `bác sĩ ${doctorName}`,
      `đặt lịch khám ${doctorName}`,
      partnerName,
      "Medpro",
      "đặt lịch khám bệnh",
      "khám bệnh online",
      ...(doctor.description?.specialty || []),
    ].filter(Boolean);

    return {
      title,
      description,
      keywords: keywords.join(", "),
      alternates: {
        canonical: url,
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Medpro",
        locale: "vi_VN",
        type: "profile",
        images: doctor.imageUrl
          ? [
              {
                url: doctor.imageUrl,
                width: 800,
                height: 600,
                alt: doctorName,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: doctor.imageUrl ? [doctor.imageUrl] : [],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Lịch Khám Bác Sĩ | Medpro",
      description: "Xem lịch khám và đặt hẹn với bác sĩ qua Medpro.",
    };
  }
}

export default async function DoctorSchedulePage({
  params,
  searchParams,
}: {
  params: Promise<{ hospital: string; doctor: string }>;
  searchParams: Promise<{
    date?: string;
    feature?: string;
    subjectId?: string;
  }>;
}) {
  const [{ doctor: doctorId, hospital }, { date, subjectId, feature }] =
    await Promise.all([params, searchParams]);

  return (
    <Suspense
      key={`${doctorId}-${date}-${subjectId}`}
      fallback={
        <>
          <BreadcrumbSkeleton />
          <DoctorScheduleSkeleton showBreadcrumb={false} />
        </>
      }
    >
      <DoctorScheduleContent
        doctorId={doctorId}
        date={date}
        subjectId={subjectId}
        feature={feature}
        hospital={hospital}
      />
    </Suspense>
  );
}

import {
  pruneDoctorDetail,
  prunePartner,
} from "@/app/[hospital]/lich-kham/_helpers/pruning";

async function DoctorScheduleContent({
  doctorId,
  date,
  subjectId: sSubjectId,
  feature,
  hospital,
}: {
  doctorId: string;
  date?: string;
  subjectId?: string;
  feature?: string;
  hospital: string;
}) {
  const partnerId = doctorId.split("_")[0];

  const [partnerInfoRaw, doctorRaw] = await Promise.all([
    getPartnerInfo(partnerId).catch(err => {
      console.error("::: ~ Error fetching partner info:", err);
      return null;
    }),
    getDoctorDetail("", doctorId).catch(err => {
      console.error("::: ~ Error fetching doctor detail:", err);
      return null;
    }),
  ]);

  if (!doctorRaw) {
    const hospitalData = getHospitalBySlug(hospital);
    const hospitalName = hospitalData?.name || "Bệnh viện";
    return (
      <LayoutBreadcrumb
        items={[
          { title: <Link href={"/"}>Trang chủ</Link> },
          { title: <Link href={`/${hospital}`}>{hospitalName}</Link> },
          { title: "Lịch khám" },
        ]}
      >
        <div className='container py-10 text-center'>
          <h2>Không tìm thấy thông tin bác sĩ</h2>
          <p>Vui lòng thử lại sau hoặc quay về trang chủ.</p>
        </div>
      </LayoutBreadcrumb>
    );
  }

  // Prune data as early as possible
  const doctor = pruneDoctorDetail(doctorRaw);
  const partnerInfo = prunePartner(partnerInfoRaw);

  if (!doctor) {
    const hospitalData = getHospitalBySlug(hospital);
    const hospitalName = hospitalData?.name || "Bệnh viện";
    return (
      <LayoutBreadcrumb
        items={[
          { title: <Link href={"/"}>Trang chủ</Link> },
          { title: <Link href={`/${hospital}`}>{hospitalName}</Link> },
          { title: "Lịch khám" },
        ]}
      >
        <div className='container py-10 text-center'>
          <h2>Không tìm thấy thông tin bác sĩ</h2>
        </div>
      </LayoutBreadcrumb>
    );
  }

  const hospitalData = getHospitalBySlug(hospital);
  const hospitalName = hospitalData?.name || "Bệnh viện";

  const {
    title,
    imageUrl,
    subjects = [],
    services = [],
    partner,
    description,
  } = doctor;

  const doctorDetailSchedule: any = doctor;

  // Determine active service and subject based on URL params or default to first
  const selectedService = services[0];
  const selectedSubject = sSubjectId
    ? subjects.find((s: any) => s.id === sSubjectId) || subjects[0]
    : subjects[0];

  if (!selectedService || !selectedSubject) {
    return (
      <LayoutBreadcrumb
        items={[
          { title: <Link href={"/"}>Trang chủ</Link> },
          { title: <Link href={`/${hospital}`}>{hospitalName}</Link> },
          { title: <Link href={`/${hospital}/lich-kham`}>Lịch khám</Link> },
          { title: title },
        ]}
      >
        <div className='container py-10 text-center'>
          <h2>Bác sĩ hiện không có lịch khám</h2>
        </div>
      </LayoutBreadcrumb>
    );
  }

  const cta = selectedService.ctas?.[0];
  if (!cta) {
    return (
      <LayoutBreadcrumb
        items={[
          { title: <Link href={"/"}>Trang chủ</Link> },
          { title: <Link href={`/${hospital}`}>{hospitalName}</Link> },
          { title: <Link href={`/${hospital}/lich-kham`}>Lịch khám</Link> },
          { title: title },
        ]}
      >
        <div className='container py-10 text-center'>
          <h2>Dịch vụ hiện tại không khả dụng</h2>
        </div>
      </LayoutBreadcrumb>
    );
  }

  return (
    <LayoutBreadcrumb
      items={[
        { title: <Link href={"/"}>Trang chủ</Link> },
        { title: <Link href={`/${hospital}`}>{hospitalName}</Link> },
        { title: <Link href={`/${hospital}/lich-kham`}>Lịch khám</Link> },
        { title: title },
      ]}
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              name: title,
              image: imageUrl,
              description:
                description?.seo_description ||
                description?.selfIntroduction ||
                "",
              url: `${env.app.url}/${hospital}/lich-kham/${doctorId}`,
              medicalSpecialty: description?.specialty || [],
              memberOf: {
                "@type": "MedicalOrganization",
                name: partner?.name || "",
                address: partner?.address || "",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Trang chủ",
                  item: `${env.app.url}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: hospitalName,
                  item: `${env.app.url}/${hospital}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Lịch khám",
                  item: `${env.app.url}/${hospital}/lich-kham`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: title,
                  item: `${env.app.url}/${hospital}/lich-kham/${doctorId}`,
                },
              ],
            },
          ]),
        }}
      />
      <LabelWrapper
        label='Schedule Page Root (Container)'
        color='#9c27b0'
      >
        <ScheduleContainer
          doctorId={doctor.id}
          subjectId={selectedSubject.id}
          feature={feature}
          date={date}
          partnerId={partnerId}
          doctorDetailSchedule={doctorDetailSchedule}
          cta={cta}
          popupContent={selectedService.popupContent}
          partnerInfo={partnerInfo}
          backUrl={`/${hospital}/lich-kham`}
          caller='DoctorSchedulePage'
        />
      </LabelWrapper>
    </LayoutBreadcrumb>
  );
}
