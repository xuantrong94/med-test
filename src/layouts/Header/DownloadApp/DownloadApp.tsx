import { IconApp } from "@/assets/icons/header";
import styles from "@/layouts/Header/Header.module.scss";
import Image from "next/image";

export default function DownloadApp() {
  return (
    <div className={styles.dl_container}>
      <Image
        src={IconApp}
        alt='app'
      />
      <div className={styles.content}>
        <div>
          <p>Tải ứng dụng Medpro tại đây</p>
        </div>
        <p>Ứng dụng đặt khám nhanh tại hơn 300 bệnh viện hàng đầu Việt Nam</p>
      </div>
    </div>
  );
}
