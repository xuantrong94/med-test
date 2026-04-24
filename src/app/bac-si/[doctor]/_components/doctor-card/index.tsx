import { IResult } from "../../types";
import styles from "../../[doctor].module.scss";
import Image from "next/image";
import { IconLocation } from "@/assets/icons/common";
import Link from "next/link";
import { useState } from "react";

const femaleAvatar =
  "https://cdn.medpro.vn/prod-partner/b9eecd90-6e2e-48f9-b510-0460dff5dd8b-doctorfemale.jpg";
const maleAvatar =
  "https://cdn.medpro.vn/prod-partner/3ee52d40-60a4-492b-af06-f759cce2d5d2-doctormale.jpg";

export default function DoctorCard({
  title,
  gender,
  days,
  desc2,
  hospitalAddress,
  tags,
  role,
  treatments,
  price,
  cta,
  imageUrl,
  doctorDescription,
}: IResult) {
  const [imageError, setImageError] = useState<boolean>(false);
  const bookingUrl = `https://medpro.vn/chon-lich-kham?feauture=booking.${cta.treeId}&partnerId=${cta.partnerId}&doctorId=${cta.doctorId}&bookingPage=/bac-si`;
  const hasDetailPage = cta.treeId === "TELEMEDNOW";

  // Determine which image to show
  const getImageSrc = (): string => {
    if (imageError || !imageUrl) {
      return gender === "0" ? femaleAvatar : maleAvatar;
    }
    return imageUrl;
  };

  const handleImageError = (): void => {
    setImageError(true);
  };

  return (
    <div className={styles.doctorCard}>
      <div className={styles.topCard}>
        <div className={styles.avatar}>
          <Image
            src={getImageSrc()}
            onError={handleImageError}
            alt={title}
            fill
          />
          {hasDetailPage && (
            <Link href={doctorDescription.slug}>Xem chi tiết</Link>
          )}
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>
            <span>{role}</span> <span>{title}</span> {" | "}
            {tags &&
              tags.map((tag, index) => (
                <span key={tag.id}>
                  {index === 0 ? "" : " - "}
                  {tag.name}
                </span>
              ))}
          </h3>
          <p className={styles.specialty}>
            <strong>Chuyên khoa: </strong>
            <span>{treatments ?? "Đang cập nhật..."}</span>
          </p>
          <p className={styles.specialty}>
            <strong>Lịch khám: </strong>
            <span>{days}</span>
          </p>
          <p className={styles.specialty}>
            <strong>Giá khám: </strong>
            <span>{price}</span>
          </p>
        </div>
      </div>
      <div className={styles.botCard}>
        <div className={styles.hospitalInfo}>
          <Image
            src={IconLocation}
            alt='icon-location'
            width={24}
          />
          <div className={styles.hospitalAddress}>
            <strong>{desc2}</strong>
            <span>{hospitalAddress}</span>
          </div>
        </div>
        <Link href={bookingUrl}>Đặt ngay</Link>
      </div>
    </div>
  );
}
