import LayoutBreadcrumb, {
  BreadcrumbSkeleton,
} from "@/layouts/layout-breadcrumb";
import Link from "next/link";
import { getDoctorDetail } from "@/shared/api/getDoctorDetail.api";
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
  params: Promise<{ doctor: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { doctor: slug } = await params;
  const sParams = await searchParams;
  const doctorId = sParams?.doctorId as string | undefined;

  try {
    const doctor = await getDoctorDetail(slug, doctorId || "");

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
    const url = `${env.app.url}/bac-si/${slug}/lich-kham`;

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
  params: Promise<{ doctor: string }>;
  searchParams: Promise<{
    date?: string;
    doctorId?: string;
    feature?: string;
    subjectId?: string;
  }>;
}) {
  const [{ doctor: slug }, { date, doctorId, subjectId }] = await Promise.all([
    params,
    searchParams,
  ]);

  return (
    <Suspense
      fallback={
        <>
          <BreadcrumbSkeleton />
          <DoctorScheduleSkeleton showBreadcrumb={false} />
        </>
      }
    >
      <DoctorScheduleContent
        slug={slug}
        date={date}
        doctorId={doctorId}
        subjectId={subjectId}
      />
    </Suspense>
  );
}

async function DoctorScheduleContent({
  slug,
  date,
  doctorId,
  subjectId: sSubjectId,
}: {
  slug: string;
  date?: string;
  doctorId?: string;
  subjectId?: string;
}) {
  let partnerInfo: Partner | undefined;
  if (doctorId) {
    const partnerIdFromSlug = slug.split("-")[0];
    try {
      const response = await getPartnerInfo(partnerIdFromSlug);
      partnerInfo = response;
    } catch (error) {
      console.error("::: ~ Error fetching partner info:", error);
    }
  }

  let doctor;
  try {
    doctor = await getDoctorDetail(slug, doctorId || "");
  } catch (error) {
    console.error("::: ~ Error fetching doctor detail:", error);
    return (
      <LayoutBreadcrumb
        items={[
          { title: <Link href={"/"}>Trang chủ</Link> },
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

  const {
    title,
    role,
    services = [],
    partnerId,
    price,
    treatments,
    imageUrl,
    subjects = [],
    description,
    partner,
  } = doctor;

  const doctorDetailSchedule: DoctorDetailSchedule = {
    title,
    role,
    price,
    partnerId,
    treatments: treatments || "",
    services,
    subjects,
    imageUrl,
    description: description || (doctor as any).doctorDescription,
    partner,
  };

  // Determine active service and subject based on URL params or default to first
  const selectedService = services[0];
  const selectedSubject = sSubjectId
    ? subjects.find(s => s.id === sSubjectId) || subjects[0]
    : subjects[0];

  if (!selectedService || !selectedSubject) {
    return (
      <LayoutBreadcrumb
        items={[
          { title: <Link href={"/"}>Trang chủ</Link> },
          { title: <Link href={`/bac-si/${slug}`}>{title}</Link> },
          { title: "Lịch khám" },
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
          { title: <Link href={`/bac-si/${slug}`}>{title}</Link> },
          { title: "Lịch khám" },
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
        { title: <Link href={`/bac-si/${slug}`}>{title}</Link> },
        { title: "Lịch khám" },
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
              url: `${env.app.url}/bac-si/${slug}/lich-kham`,
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
                  name: title,
                  item: `${env.app.url}/bac-si/${slug}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Lịch khám",
                  item: `${env.app.url}/bac-si/${slug}/lich-kham`,
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
          date={date}
          partnerId={partnerId}
          doctorDetailSchedule={doctorDetailSchedule}
          cta={cta}
          popupContent={selectedService.popupContent}
          partnerInfo={partnerInfo}
          backUrl={`/bac-si/${slug}`}
        />
      </LabelWrapper>
    </LayoutBreadcrumb>
  );
}
