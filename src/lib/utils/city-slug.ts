export const normalizeCitySlug = (name: string): string => {
  if (!name) return "";

  return name
    .toLowerCase()
    .replace(/^thành phố /i, "")
    .replace(/^tỉnh /i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric except spaces and hyphens
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Remove consecutive hyphens
};
