"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconHeaderLogo from "@/assets/icons/header/header_logo.svg";
import FlagSelect from "../FlagSelect";
import { DrawerCloseButton } from "./DrawerCloseButton";
import DrawerPatientInfo from "../DrawerPatientInfo/DrawerPatientInfo";
import { HEADER_MENU_WITH_COMMUNITY } from "@/shared/constants/urls";
import { NavigatorItem } from "../components/NavigatorItem/NavigatorItem";
import { HEADER_SUPPORTS } from "@/layouts/Header/content";
import { IconApp } from "@/assets/icons/header";
import styles from "@/layouts/Header/Header.module.scss";

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
  community: "community",
};

const contactKeyToTranslation: Record<string, string> = {
  facebook: "supportFacebook",
  zalo: "supportZalo",
  hotline: "supportHotline",
  email: "supportEmail",
};

const DrawerNavContent: React.FC = () => {
  const t = useTranslations("common");
  const tNav = useTranslations("navigation");

  const getNavTranslation = (key: string, fallback: string) => {
    const translationKey = urlKeyToTranslationKey[key] as any;
    if (translationKey) {
      try {
        return tNav(translationKey) || fallback;
      } catch {
        return fallback;
      }
    }
    return fallback;
  };

  const getContactTranslation = (key: string, fallback: string) => {
    const translationKey = contactKeyToTranslation[key] as any;
    if (translationKey) {
      try {
        return tNav(translationKey) || fallback;
      } catch {
        return fallback;
      }
    }
    return fallback;
  };

  return (
    <>
      {/* Drawer Top */}
      <div className={styles.dt_wrapper}>
        <Link
          href="/"
          className={styles.dt_logo}
        >
          <Image
            src={IconHeaderLogo}
            alt={t("logoAlt")}
            width={180}
            height={48}
            priority
          />
        </Link>
        <FlagSelect />
        <DrawerCloseButton label={t("close")} />
      </div>

      <DrawerPatientInfo />

      {/* Navigators */}
      <div className={styles.dn_container}>
        {HEADER_MENU_WITH_COMMUNITY.map((item) => (
          <NavigatorItem
            key={item.key}
            itemKey={item.key}
            icon={item.icon}
            label={getNavTranslation(item.key, item.label)}
            url={item.url}
          >
            {item.children}
          </NavigatorItem>
        ))}
      </div>
      <div className={styles.dn_spacer} />

      {/* Contacts */}
      <div>
        {HEADER_SUPPORTS.map((item) => (
          <Link
            key={item.key}
            className={styles.dc_item}
            href={item.url}
          >
            <div className={styles.header}>
              <div className={styles.icon}>
                <Image
                  src={item.icon}
                  alt={item.key}
                  width={24}
                  height={24}
                />
              </div>
              <span className={styles.link}>
                {getContactTranslation(item.key, item.label)}
              </span>
            </div>
          </Link>
        ))}
        <div className={styles.dc_spacer} />
      </div>

      {/* Download App */}
      <div className={styles.dl_container}>
        <Image
          src={IconApp}
          alt="app"
          width={48}
          height={48}
        />
        <div className={styles.content}>
          <div>
            <p>{t("downloadAppTitle") || "Tải ứng dụng Medpro tại đây"}</p>
          </div>
          <p>
            {t("downloadAppDesc") ||
              "Ứng dụng đặt khám nhanh tại hơn 300 bệnh viện hàng đầu Việt Nam"}
          </p>
        </div>
      </div>
    </>
  );
};

export default DrawerNavContent;
