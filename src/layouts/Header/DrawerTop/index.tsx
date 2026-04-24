import Link from "next/link";
import styles from "@/layouts/Header/Header.module.scss";
import IconHeaderLogo from "@/assets/icons/header/header_logo.svg";
import { BLUR_DATA_URL } from "@/shared/constants/images";
import FlagSelect from "../FlagSelect";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function DrawerTop({
  setShow,
}: {
  setShow?: (show: boolean) => void;
}) {
  const t = useTranslations("common");
  return (
    <div className={styles.dt_wrapper}>
      <Link
        href='/'
        className={styles.dt_logo}
      >
        <Image
          src={IconHeaderLogo}
          alt={t("logoAlt")}
          width={180}
          height={48}
          placeholder='blur'
          blurDataURL={BLUR_DATA_URL}
        />
      </Link>
      <FlagSelect />
      <button
        className={styles.dt_toggleButton}
        aria-label={t("close")}
        onClick={() => setShow?.(false)}
      >
        <CloseOutlined className='' />
      </button>
    </div>
  );
}
