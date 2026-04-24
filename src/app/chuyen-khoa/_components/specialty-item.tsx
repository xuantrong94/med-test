"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSpecialtyStore } from "@/shared/stores/use-specialty.store";
import normalize from "@/lib/utils/normalize";
import { BLUR_DATA_URL } from "@/shared/constants/images";
import styles from "../(specialty-list)/specialty-page.module.scss";

interface SpecialtyItemProps {
  id: string;
  name: string;
  slug: string;
  icon: string;
  index: number;
}

export default function SpecialtyItem({
  name,
  slug,
  icon,
  index,
}: SpecialtyItemProps) {
  const searchTerm = useSpecialtyStore((state) => state.searchTerm);

  const isVisible = useMemo(() => {
    if (!searchTerm) return true;
    return normalize(name).includes(normalize(searchTerm));
  }, [name, searchTerm]);

  if (!isVisible) return null;

  return (
    <Link
      href={`/chuyen-khoa/${slug}`}
      className={styles.list_specialtyItem}
    >
      <Image
        src={icon}
        alt={name}
        width={80}
        height={80}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        fetchPriority={index < 8 ? "high" : "auto"}
        loading={index < 8 ? "eager" : "lazy"}
      />
      <p>{name}</p>
    </Link>
  );
}
