import { slugify } from "@/lib/utils/slugify";

/**
 * Danh sách các chuyên khoa (Subject Name) xuất hiện trong danh sách bài viết.
 * Dùng để filter hoặc hiển thị labels trên giao diện bài viết.
 */
export const POST_SUBJECTS = [
  { id: 2, name: "Nhi khoa", slug: slugify("Nhi khoa") },
  { id: 3, name: "Khám bệnh ngoài da", slug: slugify("Khám bệnh ngoài da") },
  { id: 4, name: "Sản phụ khoa", slug: slugify("Sản phụ khoa") },
  { id: 5, name: "Tâm lý", slug: slugify("Tâm lý") },
  { id: 6, name: "Nam khoa", slug: slugify("Nam khoa") },
  { id: 7, name: "Cơ Xương Khớp", slug: slugify("Cơ Xương Khớp") },
  { id: 8, name: "Nội thận", slug: slugify("Nội thận") },
] as const;

export type PostSubject = (typeof POST_SUBJECTS)[number];
