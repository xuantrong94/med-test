import Link from "next/link";
import Image from "next/image";
import IconHeaderLogo from "@/assets/icons/header/header_logo.svg";
import FlagSelect from "../FlagSelect";
import { Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import styles from "@/layouts/Header/Header.module.scss";
import { DrawerProvider } from "./DrawerProvider";
import { DrawerTrigger } from "./DrawerTrigger";
import { DrawerOverlay } from "./DrawerOverlay";
import DrawerNavLoader from "./DrawerNavLoader";

export default async function LayoutHeaderMobile() {
  const t = await getTranslations("common");

  return (
    <DrawerProvider>
      <div className={styles.mb_mobile}>
        <header className={styles.mb_container}>
          <div className={styles.mb_wrapper}>
            <Link
              href="/"
              className={styles.mb_logo}
            >
              <Image
                src={IconHeaderLogo}
                alt={t("logoAlt")}
                width={160}
                height={48}
                fetchPriority="high"
                decoding="async"
                loading="eager"
              />
            </Link>
            <FlagSelect />
            <button
              className={styles.mb_search}
              aria-label={t("search") || "Tìm kiếm"}
            >
              <Search size={24} />
            </button>
            <DrawerTrigger label={t("menu")} />
          </div>
        </header>

        <DrawerOverlay closeLabel={t("close")}>
          <DrawerNavLoader />
        </DrawerOverlay>
      </div>
    </DrawerProvider>
  );
}
