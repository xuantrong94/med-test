import Link from "next/link";
import LayoutBreadcrumb from "@/layouts/layout-breadcrumb";
import { Metadata } from "next";
import specialties from "@/shared/constants/specialties";
import SpecialtySearchbar from "../_components/specialty-searchbar";
import SpecialtyItem from "../_components/specialty-item";
import styles from "./specialty-page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Chuyên khoa - Đặt khám chuyên khoa trực tuyến",
    description:
      "Khám phá các chuyên khoa y tế đa dạng và đặt lịch khám chuyên khoa trực tuyến nhanh chóng, tiện lợi với dịch vụ chăm sóc sức khỏe toàn diện của chúng tôi.",
    keywords:
      "chuyên khoa, đặt khám chuyên khoa, dịch vụ y tế, chăm sóc sức khỏe, lịch khám trực tuyến, bác sĩ chuyên khoa, tư vấn y tế, khám bệnh, phòng khám đa khoa, dịch vụ y tế chất lượng",
  };
}

export default async function SpecialistAppointmentPage() {
  return (
    <LayoutBreadcrumb
      items={[
        { title: <Link href="/">Trang chủ</Link> },
        { title: `Chuyên khoa` },
      ]}
    >
      <div className={styles.list_specialtyListWrapper}>
        <SpecialtySearchbar />
        <div className="container">
          <div className={styles.list_specialtyList}>
            {specialties.map((specialty, index) => (
              <SpecialtyItem
                key={specialty.id}
                id={specialty.id}
                name={specialty.name}
                slug={specialty.slug}
                icon={specialty.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutBreadcrumb>
  );
}
