import styles from "./app.module.scss";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("common");
  return (
    <div
      className={styles.app}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {t("home")} Medpro
    </div>
  );
}
