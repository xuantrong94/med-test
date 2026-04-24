import styles from "./[doctor].module.scss";
import LayoutBreadcrumb from "@/layouts/layout-breadcrumb";
import Link from "next/link";
import { ContentBox } from "./_components/content-box";
import { getSpecialtyName as getName } from "@/shared/constants/specialties";
import { Metadata } from "next";

// generate metadata for SEO
export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ doctor: string }>;
}>): Promise<Metadata> {
  const { doctor } = await params;
  const subjects = getName(doctor);
  return {
    title: `Bác sĩ chuyên khoa ${subjects} - Tư vấn và đặt lịch khám trực tuyến`,
    description: `Tìm kiếm bác sĩ chuyên khoa ${subjects} uy tín trên MedPro. Đặt lịch khám trực tuyến nhanh chóng và tiện lợi với các chuyên gia hàng đầu.`,
    keywords: `bác sĩ ${subjects}, tư vấn bác sĩ ${subjects}, đặt lịch khám ${subjects}, bác sĩ trực tuyến ${subjects}, chuyên gia y tế ${subjects}`,
  };
}

export default async function DoctorDetailPage({
  params,
}: Readonly<{
  params: Promise<{ doctor: string }>;
}>) {
  const { doctor } = await params;
  const subjects = getName(doctor);
  return (
    <LayoutBreadcrumb
      items={[
        { title: <Link href='/'>Trang chủ</Link> },
        { title: <Link href='/bac-si'>Bác sĩ</Link> },
        { title: `Bác sĩ ${subjects}` },
      ]}
    >
      <div className={styles.titleBox}>
        <h1 className={styles.title}>Danh sách bác sĩ</h1>
      </div>
      <ContentBox />
    </LayoutBreadcrumb>
  );
}
