import { BannerSaleBooking } from "@/assets/images/banners";
import styles from "./../[doctor].module.scss";
import Image from "next/image";
export default function InfoBox() {
  return (
    <div className={styles.infoBox}>
      <Image
        src={BannerSaleBooking}
        alt='Banner Sale Booking'
      />
    </div>
  );
}
