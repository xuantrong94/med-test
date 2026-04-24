import LayoutBreadcrumb from "@/layouts/layout-breadcrumb";
import Link from "next/link";
import { MainContent } from "./_components/main-content";
import { Metadata } from "next";
import { getHospitalBySlug } from "./_contents/hospitals";
import { notFound } from "next/navigation";
import { getCurrentDate } from "@/lib/utils/date";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hospital: string }>;
}): Promise<Metadata> {
  const { hospital } = await params;
  const hospitalData = getHospitalBySlug(hospital);
  const title = hospitalData
    ? `Lịch Khám - ${hospitalData.name}`
    : "Lịch Khám Bệnh Viện";

  return {
    title: title,
    description: `Xem lịch khám bệnh tại ${hospitalData?.name || "bệnh viện"}, đặt lịch hẹn khám bác sĩ trực tuyến. Tìm kiếm theo chuyên khoa, bác sĩ và thời gian phù hợp.`,
  };
}

const currentDate = getCurrentDate();

export default async function HospitalSchedule({
  params,
  searchParams,
}: {
  params: Promise<{ hospital: string }>;
  searchParams: Promise<{
    subjectId?: string;
    featureId?: string;
    role?: string;
    date?: string;
    doctor?: string;
    type?: "doctor" | "feature";
    page?: string;
  }>;
}) {
  const [
    { hospital },
    { subjectId, featureId, role, date, doctor, type, page },
  ] = await Promise.all([params, searchParams]);
  const hospitalData = getHospitalBySlug(hospital);

  if (!hospitalData) {
    return notFound();
  }

  return (
    <LayoutBreadcrumb
      items={[
        {
          title: <Link href={"/"}>Trang chủ</Link>,
        },
        {
          title: (
            <Link href={`/${hospitalData.slug}`}>{hospitalData.name}</Link>
          ),
        },
        {
          title: "Lịch khám",
        },
      ]}
    >
      <MainContent
        partnerId={hospitalData.partnerId}
        subjectId={subjectId || ""}
        featureId={featureId || ""}
        role={role || ""}
        date={date || currentDate}
        doctor={doctor || ""}
        type={type}
        page={page || "1"}
      />
    </LayoutBreadcrumb>
  );
}
