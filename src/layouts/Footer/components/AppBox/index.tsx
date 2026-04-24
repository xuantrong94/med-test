import Image from "next/image";
import { MEDPRO_BADGES } from "../../content";
import styles from "../../Footer.module.scss";
import Link from "next/link";

export default function AppBox() {
  return (
    <div className={styles.appBox}>
      {MEDPRO_BADGES.map(item => (
        <Link
          key={item.alt}
          href={item.href}
          className={styles.link}
        >
          <Image
            src={item.src}
            alt={item.alt}
          />
        </Link>
      ))}
    </div>
  );
}
