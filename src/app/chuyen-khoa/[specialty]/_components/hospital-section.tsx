import { getSearchKey, getSearchKeys } from "@/shared/constants/specialties";
import HospitalList from "./hospital-list";
import { ResultItem } from "@/types/result.item";
import { CITIES, DISTRICTS_MAP } from "@/shared/constants/cities";
import CitySelect from "@/components/city-select";
import styles from "../specialty-detail.module.scss";
import { getTranslations } from "next-intl/server";
import EmptyState from "./empty-state";

/**
 * Normalizes string for searching:
 * - Unicode NFC normalization
 * - Lowercase
 * - Replace separators (-, :, /, ., (), []) with spaces
 * - Collapse multiple spaces to maintain word boundaries
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

export default async function HospitalSection({
  specialty,
  searchParams,
}: {
  specialty: string;
  searchParams: Promise<{ city?: string; district?: string; page?: string }>;
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

  // Filter matches to avoid accent-insensitive backend search issues (e.g., "mắt" vs "mật")
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

  // 1. Identify filtering city/district from constants
  const cityObj = city ? CITIES.find(c => c.slug === city) : null;

  let districtObj = null;
  if (cityObj && district) {
    const districts = DISTRICTS_MAP[cityObj.id] || [];
    districtObj = districts.find(d => d.slug === district);
  }

  // 2. Filter Results by city_id and district_id
  // Ensure item.partner exists to avoid crashes in HospitalCard
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

  // 3. Generate Unique Hospitals from filtered results
  const seenPartnerIds = new Set<string>();
  const uniqueHospitals = filteredResults.filter(item => {
    if (!item.partnerId || seenPartnerIds.has(item.partnerId)) return false;
    seenPartnerIds.add(item.partnerId);
    return true;
  });

  // 4. Server-side pagination
  const PAGE_SIZE = 12;
  const { page } = await searchParams;
  const current = page ? Number(page) : 1;
  const startIndex = (current - 1) * PAGE_SIZE;
  const paginatedResults = uniqueHospitals
    .slice(startIndex, startIndex + PAGE_SIZE)
    .map(item => ({
      id: item.id,
      hospitalAddress: item.hospitalAddress,
      cta: item.cta,
      partner: {
        name: item.partner?.name,
        slug: item.partner?.slug,
        address: item.partner?.address,
        circleLogo: item.partner?.circleLogo,
      },
    }));

  return (
    <div className={styles.sect_hospitalSection}>
      <div className={styles.sect_header}>
        <div className={styles.sect_titleGroup}>
          <h2 className={styles.sect_sectionTitle}>
            Gợi ý danh sách bệnh viện
          </h2>
        </div>
        <div className={styles.sect_filterWrapper}>
          <CitySelect />
        </div>
      </div>

      <div className={styles.sect_listWrapper}>
        {uniqueHospitals.length > 0 ? (
          <HospitalList
            paginatedResults={paginatedResults}
            total={uniqueHospitals.length}
            searchKey={primarySearchKey}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
