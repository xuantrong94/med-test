import { Metadata } from "next";
import specialties, { getSearchKey } from "@/shared/constants/specialties";

// Static metadata map for specialties
const specialtyMetadata: Record<string, Metadata> = {};

// Pre-populate metadata for all specialties
specialties.forEach(specialty => {
  specialtyMetadata[specialty.slug] = {
    title: `Chuyên khoa ${specialty.name} - Đặt lịch khám online`,
    description: `Đặt lịch khám chuyên khoa ${specialty.name} với các bác sĩ uy tín. Dịch vụ y tế chất lượng cao, tiện lợi và nhanh chóng.`,
    keywords: `${specialty.name.toLowerCase()}, đặt khám online, bác sĩ chuyên khoa, dịch vụ y tế`,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Chuyên khoa ${specialty.name} - MedPro`,
      description: `Đặt lịch khám chuyên khoa ${specialty.name} với các bác sĩ uy tín`,
      type: "website",
      siteName: "MedPro",
    },
    twitter: {
      card: "summary_large_image",
      title: `Chuyên khoa ${specialty.name} - MedPro`,
      description: `Đặt lịch khám chuyên khoa ${specialty.name} với các bác sĩ uy tín`,
    },
  };
});

export function getSpecialtyMetadata(slug: string): Metadata {
  return (
    specialtyMetadata[slug] || {
      title: "Chuyên khoa - MedPro",
      description: "Dịch vụ y tế chuyên nghiệp",
    }
  );
}

export default specialtyMetadata;
