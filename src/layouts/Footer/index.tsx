import Link from "next/link";
import styles from "./Footer.module.scss";
import { FOOTER_DESKTOP } from "@/shared/constants/urls";
import InfoBox from "./components/InfoBox";
import DcmaBox from "./components/DcmaBox";
import AppBox from "./components/AppBox";
import CollapseNav from "./components/CollapseNav";
import NavMenu from "./components/NavMenu";
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
  "dat-kham-tai-co-so": "datKhamTaiCoSo",
  "dat-lich-tiem-chung": "datLichTiemChung",
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

export default function Footer() {
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

  const getSectionTranslation = (label: string) => {
    const key = sectionLabelToKey[label] as Parameters<typeof t>[0];
    if (key) {
      try {
        return t(key) || label;
      } catch {
        return label;
      }
    }
    return label;
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles.container}`}>
          {/* Start Info Box */}
          <div className={styles.infoBoxContainer}>
            <InfoBox />
          </div>
          {/* End Info Box */}

          {/* Spacer for Mobile */}
          <div className={styles.spacer} />

          {/* Start Mobile Collapse Nav */}
          <div className={styles.mobileOnly}>
            <CollapseNav />
          </div>
          {/* End Mobile Collapse Nav */}

          {/* Start Desktop Links */}
          <div className={styles.linksBox}>
            {FOOTER_DESKTOP.map(section => (
              <div
                key={section.label}
                className={styles.linkSection}
              >
                <p className={styles.sectionTitle}>
                  {getSectionTranslation(section.label)}
                </p>
                <ul className={styles.linkList}>
                  {section.items.map(link => (
                    <li
                      key={link.label}
                      className={styles.linkItem}
                    >
                      <Link
                        href={link.url}
                        className={styles.link}
                      >
                        {getTranslation(link.key, link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={styles.desktopOnly}>
              <AppBox />
            </div>
          </div>
          {/* End Desktop Links */}

          {/* Spacer for Mobile */}
          <div className={styles.spacer} />

          {/* Mobile AppBox */}
          <div className={styles.mobileOnly}>
            <AppBox />
          </div>
        </div>
      </footer>
      <DcmaBox />
      <div className={styles.mobileOnly}>
        <NavMenu />
      </div>
    </>
  );
}
