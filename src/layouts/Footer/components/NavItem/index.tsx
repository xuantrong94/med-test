"use client";

import Link from "next/link";
import Collapse from "antd/es/collapse";
import ConfigProvider from "antd/es/config-provider";
import styles from "../../Footer.module.scss";
import CaretRightOutlined from "@ant-design/icons/lib/icons/CaretRightOutlined";
import { useTranslations } from "next-intl";

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

const sectionLabelToKey: Record<string, string> = {
  "Dịch vụ y tế": "medicalService",
  "Cơ sở y tế": "facility",
  "Hướng dẫn": "guide",
  "Liên hệ hợp tác": "contact",
  "Tin tức": "news",
  "Về Medpro": "about",
};

export default function NavItem({
  label,
  items,
}: Readonly<{
  label: string;
  items?: Array<{ key: string; label: string; url: string }>;
}>) {
  const t = useTranslations("navigation");

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

  const getSectionTranslation = (lbl: string) => {
    const key = sectionLabelToKey[lbl] as Parameters<typeof t>[0];
    if (key) {
      try {
        return t(key) || lbl;
      } catch {
        return lbl;
      }
    }
    return lbl;
  };

  if (!items || items.length === 0) {
    return <div className={styles.navItem}>{getSectionTranslation(label)}</div>;
  }

  const collapseItems = [
    {
      key: "1",
      label: (
        <span className={styles.collapseLabel}>
          {getSectionTranslation(label)}
        </span>
      ),
      children: (
        <div className={styles.collapseContent}>
          {items.map(item => (
            <Link
              key={item.key}
              href={item.url}
              className={styles.subItem}
            >
              {getTranslation(item.key, item.label)}
            </Link>
          ))}
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            headerPadding: "6px 0px",
            contentPadding: "0px 0px 12px 0px",
            colorBorder: "transparent",
            colorBgContainer: "transparent",
          },
        },
      }}
    >
      <Collapse
        items={collapseItems}
        ghost
        className={styles.collapse}
        expandIconPlacement='end'
        expandIcon={() => (
          <CaretRightOutlined style={{ fontSize: "16px", color: "#2c3e50" }} />
        )}
      />
    </ConfigProvider>
  );
}
