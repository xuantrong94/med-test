/**
 * Function to slugify Vietnamese text
 * Examples: "Nhi khoa" -> "nhi-khoa", "Sản phụ khoa" -> "san-phu-khoa"
 */
export function slugify(text: string): string {
  if (!text) return "";

  return text
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}
