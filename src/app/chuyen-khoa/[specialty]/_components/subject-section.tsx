import { getSearchKey, getSearchKeys } from "@/shared/constants/specialties";
import SubjectList from "./subject-list";
import { Specialty } from "@/types/specialty";
import { ResultItem } from "@/types/result.item";
import { api } from "@/lib/fetch/client";
import { CITIES, DISTRICTS_MAP } from "@/shared/constants/cities";
import CitySelect from "@/components/city-select";
import styles from "../specialty-detail.module.scss";
import { getTranslations } from "next-intl/server";
import { env } from "@/config";
import EmptyState from "./empty-state";

/**
 * Normalizes string for searching
 */
const normalizeForSearch = (str: string) => {
  return str
    .normalize("NFC")
    .toLowerCase()
    .replace(/[-–—:/().[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

import { getCachedSearch } from "@/lib/api/search";

export default async function SubjectSection({
  specialty,
  searchParams,
}: {
  specialty: string;
  searchParams: Promise<{ city?: string; district?: string }>;
}) {
  const { city, district } = await searchParams;
  const searchKeys = getSearchKeys(specialty);
  const primarySearchKey = getSearchKey(specialty);

  const [searchResponses, t] = await Promise.all([
    Promise.all(searchKeys.map(key => getCachedSearch(key))),
    getTranslations("specialty.detail").catch(() => null),
  ]);

  if (!t) {
    return null;
  }

  // Aggregate and deduplicate results from all search keys
  const allRawResults: ResultItem[] = [];
  const seenIds = new Set<string>();

  if (searchResponses) {
    searchResponses.forEach(response => {
      if (!response) return;
      const subjectCategory = response.find(s => s.category === "subject");
      if (subjectCategory?.results) {
        subjectCategory.results.forEach(result => {
          if (!seenIds.has(result.id)) {
            seenIds.add(result.id);
            allRawResults.push(result);
          }
        });
      }
    });
  }

  const normalizedKey = normalizeForSearch(primarySearchKey);
  const keywords = normalizedKey.split(" ").filter(Boolean);

  const exactKeyResults =
    keywords.length === 0
      ? allRawResults
      : allRawResults.filter(item => {
          const isMatch = (target?: string) => {
            if (!target) return false;
            const normalizedTarget = normalizeForSearch(target);
            return keywords.every(word => normalizedTarget.includes(word));
          };

          return isMatch(item.title) || isMatch(item.partner?.name);
        });

  const cityObj = city ? CITIES.find(c => c.slug === city) : null;

  let districtObj = null;
  if (cityObj && district) {
    const districts = DISTRICTS_MAP[cityObj.id] || [];
    districtObj = districts.find(d => d.slug === district);
  }

  // 2. Filter Results by city_id and district_id
  // Ensure item.partner exists to avoid crashes in SpecialtyCard
  let filteredResults = exactKeyResults.filter(item => !!item.partner);

  if (cityObj) {
    filteredResults = filteredResults.filter(
      item => item.partner?.city_id === cityObj.id
    );

    if (districtObj) {
      filteredResults = filteredResults.filter(
        item => item.partner?.district_id === districtObj.id
      );
    }
  }

  return (
    <div className={styles.sect_hospitalSection}>
      <div className={styles.sect_header}>
        <div className={styles.sect_titleGroup}>
          <h2 className={styles.sect_sectionTitle}>{t("subjects")}</h2>
        </div>
        <div className={styles.sect_filterWrapper}>
          <CitySelect />
        </div>
      </div>

      <div className={styles.sect_listWrapper}>
        {filteredResults.length > 0 ? (
          <SubjectList
            results={filteredResults}
            searchKey={primarySearchKey}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
