"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { getUrlByKey } from "@/shared/constants/urls";
import styles from "@/layouts/Header/Header.module.scss";
import CaretRightOutlined from "@ant-design/icons/lib/icons/CaretRightOutlined";
import { useTranslations } from "next-intl";

// Map URL keys to translation dictionary keys
const urlKeyToTranslationKey: Record<string, string> = {
  home: "home",
  "co-so-y-te": "facility",
  "benh-vien-cong": "publicHospital",
  "benh-vien-tu": "privateHospital",
  "phong-kham": "clinic",
  "phong-mach": "doctorsOffice",
  "xet-nghiem": "laboratory",
  "tiem-chung": "vaccination",
  "dich-vu-y-te": "medicalService",
  "dat-kham-chuyen-khoa": "specialtyAppointment",
  "goi-video-voi-bac-si": "videoConsultation",
  "dat-lich-xet-nghiem": "labAppointment",
  "mua-thuoc-tai-an-khang": "pharmacyAnKhang",
  "giup-viec-ca-nhan": "personalAssistant",
  "kham-doanh-nghiep": "corporateCheckup",
  "dat-kham-theo-bac-si": "doctorAppointment",
  "dat-lich-chup-phim-noi-soi": "imagingEndoscopy",
  "thanh-toan-vien-phi": "hospitalFeePayment",
  "goi-kham-suc-khoe": "healthCheckupPackage",
  "y-te-tai-nha": "homeHealthcare",
  "dat-kham-ngoai-gio": "afterHoursAppointment",
  "kham-suc-khoe-thong-tu": "circularHealthCheckup",
  "bai-kiem-tra-tram-cam": "depressionTest",
  "kham-suc-khoe-doanh-nghiep": "corporateHealthCheckup",
  "tin-tuc": "news",
  "tin-dich-vu": "serviceNews",
  "tin-y-te": "medicalNews",
  "y-hoc-thuong-thuc": "generalMedicine",
  "huong-dan": "guide",
  "cai-dat-ung-dung": "installApp",
  "dat-lich-kham": "bookingGuide",
  "tu-van-kham-benh-qua-video": "videoConsultationGuide",
  "quy-trinh-hoan-phi": "refundProcess",
  "cau-hoi-thuong-gap": "faq",
  "quy-trinh-di-kham": "examinationProcess",
  "cong-dong-hoi-dap-kham-chua-benh": "qnaCommunity",
  "lien-he-hop-tac": "contact",
  "co-so-y-te-hop-tac": "facilityContact",
  "phong-mach-hop-tac": "doctorOfficeContact",
  "quang-cao": "advertising",
  "tuyen-dung": "recruitment",
  "ve-medpro": "about",
  "dieu-khoan-dich-vu": "terms",
  "chinh-sach-bao-mat": "privacy",
  "quy-dinh-su-dung": "rules",
};

export function NavigatorItem({
  icon,
  label,
  url,
  children = [],
  itemKey, // Provide a custom prop name to avoid React's 'key' conflicts since it's passed but not mapped here initially. But DrawerNavigators maps `key={item.key}`. Let's fix that.
}: Readonly<{
  icon?: StaticImageData;
  itemKey?: string;
  label: string;
  url: string;
  children?: string[];
}>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("navigation");
  const hasChildren = children.length > 0;

  const toggleExpanded = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const getTranslation = (k: string, fallback: string) => {
    const translationKey = urlKeyToTranslationKey[k] as Parameters<typeof t>[0];
    if (translationKey) {
      try {
        const translated = t(translationKey);
        return translated || fallback;
      } catch {
        return fallback;
      }
    }
    return fallback;
  };

  return (
    <div className={styles.item}>
      <button
        className={styles.header}
        onClick={toggleExpanded}
      >
        {icon && (
          <div className={styles.icon}>
            <Image
              src={icon}
              alt={label}
              width={24}
              height={24}
            />
          </div>
        )}
        <a
          href={url}
          className={styles.link}
        >
          {itemKey ? getTranslation(itemKey, label) : label}
        </a>
        {hasChildren && (
          <div
            className={`${styles.expandIcon} ${isExpanded ? styles.expanded : ""}`}
          >
            <CaretRightOutlined />
          </div>
        )}
      </button>

      {hasChildren && isExpanded && (
        <div className={styles.children}>
          {children.map(childKey => {
            const childUrl = getUrlByKey(childKey);
            if (!childUrl) return null;

            return (
              <a
                key={childKey}
                href={childUrl.url}
                className={styles.childItem}
              >
                {getTranslation(childKey, childUrl.label)}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
