import { getTranslations } from "next-intl/server";
import styles from "../specialty-detail.module.scss";

export default async function SpecialtyHeaderMetadata({
  updatedAt,
  author,
}: {
  updatedAt: string;
  author?: string;
}) {
  const tSpecialty = await getTranslations("specialty.detail");

  return (
    <div className={styles.det_metadata}>
      <span>
        {tSpecialty("update")} {new Date(updatedAt).toLocaleDateString("vi-VN")}
      </span>
      <span className={styles.det_separator}>•</span>
      <span>
        {tSpecialty("author")} {author ?? tSpecialty("authorDefault")}
      </span>
    </div>
  );
}
