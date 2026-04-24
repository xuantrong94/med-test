"use client";

import { useState, ChangeEvent, useMemo } from "react";
import Input from "antd/es/input";
import Image from "next/image";
import Skeleton from "antd/es/skeleton";
import styles from "@/layouts/Header/Header.module.scss";
import {
  Search,
  Loader2,
  CheckCircle2,
  ChevronsRight,
  CircleX,
} from "lucide-react";
import ConfigProvider from "antd/es/config-provider";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/fetch/client";
import { Specialty } from "@/types/specialty";
import { ResultItem } from "@/types/result.item";
import Link from "next/link";
import { getPageBySymptom } from "@/lib/api/pages";
import { StrapiPage } from "@/types/page";
import { env } from "@/config";

export const HeaderSearchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 300);

  // 1. Search API from Medpro Core
  const mainSearchQuery = useQuery<Specialty[]>({
    queryKey: ["header-search-medpro", debouncedSearchValue],
    queryFn: async () => {
      if (!debouncedSearchValue || debouncedSearchValue.length < 2) return [];
      return await api.search<Specialty[]>(
        {
          search_key: debouncedSearchValue,
          limit: 3,
        },
        { caller: "HeaderSearchbar" }
      );
    },
    enabled: debouncedSearchValue.length >= 2,
    staleTime: 5 * 60 * 1000,
  });

  // 2. Search Symptom/Page from Strapi
  const symptomSearchQuery = useQuery<StrapiPage[]>({
    queryKey: ["header-search-symptom", debouncedSearchValue],
    queryFn: async () => {
      if (!debouncedSearchValue || debouncedSearchValue.length < 2) return [];
      const pageResults = await getPageBySymptom(debouncedSearchValue);
      // Log kết quả pageResults để Kyle xác nhận
      console.log(">>> [Search] pageResults from Strapi:", pageResults);
      return pageResults;
    },
    enabled: debouncedSearchValue.length >= 2,
    staleTime: 5 * 60 * 1000,
  });

  const displayCategories = useMemo(() => {
    const medproResults = mainSearchQuery.data || [];
    const symptomResults = symptomSearchQuery.data || [];

    // Filter Medpro results (skip "Tất cả")
    const filteredMedpro = medproResults.slice(1, 4);

    // Map Strapi pages to a virtual "Specialty" category
    if (symptomResults.length > 0) {
      const symptomCategory: Specialty = {
        category: "symptom",
        categoryName: "Chuyên khoa theo triệu chứng",
        search_key: debouncedSearchValue,
        results: symptomResults.map(page => {
          const imageUrl = page.banner?.imageMobile?.url || "";
          const fullImageUrl = imageUrl 
            ? (imageUrl.startsWith('http') ? imageUrl : `${env.api.strapiURL}${imageUrl}`)
            : "/images/specialty-dermatology.png"; // Default fallback

          return {
            id: page.documentId,
            title: page.title,
            imageUrl: fullImageUrl,
            circleLogo: fullImageUrl,
            partnerId: "",
            treeId: "",
            category: "symptom",
            desc2: page.slug, // Storing slug here for routing logic
            partner: {
              isContractSigned: false,
              address: "Thông tin y khoa",
            },
          };
        }) as any,
        hospitals: [],
        doctors: [],
        subjects: [],
        cities: [],
        services: [],
        tags: [],
        total: symptomResults.length,
      };

      return [...filteredMedpro, symptomCategory];
    }

    return filteredMedpro;
  }, [mainSearchQuery.data, symptomSearchQuery.data, debouncedSearchValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const isSearching =
    mainSearchQuery.isLoading ||
    mainSearchQuery.isFetching ||
    symptomSearchQuery.isLoading ||
    symptomSearchQuery.isFetching;
  const showDropdown = isFocused && searchValue.length >= 2;

  // Render Skeleton while searching
  const renderSkeletons = () => (
    <div className={styles.skeletonWrapper}>
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className={styles.resultItem}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.logoWrapper}>
            <Skeleton.Avatar
              active
              size={48}
              shape='circle'
            />
          </div>
          <div className={styles.info}>
            <Skeleton
              active
              paragraph={{ rows: 1, width: "100%" }}
              title={{ width: "60%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.headerSearchbar}>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              colorBgContainer: "#eaeaea",
              colorBorder: "transparent",
              hoverBorderColor: "#1677ff",
              activeBorderColor: "#1677ff",
              activeBg: "#fff",
              hoverBg: "#fff",
            },
          },
        }}
      >
        <Input
          placeholder='Tìm kiếm chuyên khoa'
          value={searchValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          prefix={
            <Search
              size={18}
              color='#a0a0a0'
            />
          }
          suffix={
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {isSearching ? (
                <Loader2
                  size={16}
                  className={styles.spin}
                  color='#1677ff'
                />
              ) : (
                searchValue && (
                  <CircleX
                    size={18}
                    color='#bcbcbc'
                    style={{ cursor: "pointer" }}
                    onClick={clearSearch}
                  />
                )
              )}
            </div>
          }
          size='large'
          style={{
            borderRadius: 999,
            height: 46,
            padding: "10px 20px",
          }}
        />
      </ConfigProvider>

      {showDropdown && (
        <div className={styles.dropdownContainer}>
          <div className={styles.resultsList}>
            {isSearching ? (
              renderSkeletons()
            ) : displayCategories.length > 0 ? (
              displayCategories.map((cat: Specialty) => {
                const catResults = cat.results?.slice(0, 3) || [];
                if (catResults.length === 0) return null;

                return (
                  <div
                    key={cat.category}
                    className={styles.categorySection}
                  >
                    <div className={styles.dropdownHeader}>
                      <span>
                        {cat.categoryName.toLowerCase() === "csyt"
                          ? "Cơ Sở Y Tế"
                          : cat.categoryName}
                      </span>
                      <Link
                        className={styles.seeAll}
                        href={`https://medpro.vn/tim-kiem?kw=${searchValue}&tab=${cat.category}`}
                      >
                        Xem tất cả <ChevronsRight size={14} />
                      </Link>
                    </div>

                    {catResults.map((item: ResultItem) => {
                      let navigateUrl: string;
                      let isExternal = true;

                      switch (cat.category) {
                        case "hospital":
                          navigateUrl = `https://medpro.vn/${item.partnerId}/hinh-thuc-dat-kham`;
                          break;
                        case "doctor":
                          navigateUrl = `https://medpro.vn/chon-lich-kham?feature=booking.DATE&partnerId=${item.partnerId}&doctorId=${item.id}&bookingPage=%2Fdich-vu-y-te%2Fdat-kham-chuyen-khoa&subjectId=${item.subjectId}&serviceId=${item.serviceId}&date=${item.date}`;
                          break;
                        case "subject":
                          navigateUrl = `https://medpro.vn/chon-lich-kham?feature=booking.DATE&partnerId=${item.partnerId}&bookingPage=%2Fdich-vu-y-te%2Fdat-kham-chuyen-khoa`;
                          break;
                        case "package":
                          navigateUrl = `https://medpro.vn/chon-lich-kham?feature=booking.PACKAGE&partnerId=${item.partnerId}&serviceId=${item.serviceId}&bookingPage=%2Fdich-vu-y-te%2Fdat-kham-chuyen-khoa&subjectId=${item.subjectId}`;
                          break;
                        case "symptom":
                          navigateUrl = `/${item.desc2}`;
                          isExternal = false;
                          break;
                        default:
                          navigateUrl = `https://medpro.vn/`;
                          break;
                      }
                      return (
                        <Link
                          href={navigateUrl}
                          key={item.id}
                          className={styles.resultItem}
                          target={isExternal ? "_blank" : undefined}
                        >
                          <div className={styles.logoWrapper}>
                            <Image
                              src={
                                item.circleLogo ||
                                item.imageUrl ||
                                "/images/specialty-dermatology.png"
                              }
                              alt={item.title}
                              width={48}
                              height={48}
                              unoptimized={true}
                              onError={(e) => {
                                // Fallback if image fail to load
                                (e.target as HTMLImageElement).src = "/images/specialty-dermatology.png";
                              }}
                            />
                          </div>
                          <div className={styles.info}>
                            <div className={styles.title}>
                              {item.title}
                              {item.partner?.isContractSigned && (
                                <span className={styles.verified}>
                                  <CheckCircle2
                                    size={14}
                                    fill='currentColor'
                                    color='#fff'
                                  />
                                </span>
                              )}
                            </div>
                            <div className={styles.address}>
                              {item.hospitalAddress ||
                                item.desc2 ||
                                item.partner?.address}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <div className={styles.emptyState}>Không tìm thấy kết quả</div>
            )}
          </div>

          <div className={styles.dropdownFooter}>
            <div className={styles.seeAllFooter}>
              Xem tất cả <ChevronsRight size={16} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
