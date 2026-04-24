import Image, { StaticImageData } from "next/image";
import { FlagOptionItemProps } from "../../types";
import styles from "@/layouts/Header/Header.module.scss";
import React from "react";

export default function FlagOptionItem({
  img,
  text,
}: Readonly<FlagOptionItemProps>) {
  const Flag = img;

  return (
    <div className={styles.fo_container}>
      {typeof Flag === "function" ? (
        <Flag className={styles.flagIcon} />
      ) : (
        <Image
          src={Flag as StaticImageData}
          alt='flag'
          className={styles.flagIcon}
          width={20}
          height={20}
        />
      )}
      <span>{text}</span>
    </div>
  );
}
