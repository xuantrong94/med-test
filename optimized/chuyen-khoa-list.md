# Báo cáo Tối ưu hóa Hiệu suất: Trang Danh sách Chuyên khoa

**Đường dẫn**: `/chuyen-khoa`

## 1. Cấu trúc Trang

- **Breadcrumb Nav**: Điều hướng trang chủ.
- **Search Section**: Thanh tìm kiếm chuyên khoa nhanh.
- **Grid Section**: Lưới danh sách các thẻ chuyên khoa (Gồm Icon và Tên).

## 2. Chức năng Trang

- Liệt kê toàn bộ danh sách chuyên khoa có sẵn trong hệ thống (Dữ liệu tĩnh từ constant).
- Cho phép người dùng tìm kiếm nhanh chuyên khoa theo tên (Filter Client-side).
- Điều hướng người dùng đến trang chi tiết của từng chuyên khoa.

## 3. Vấn đề (Trước khi tối ưu)

- **SEO Low Indexing**: Toàn bộ danh sách chuyên khoa được render bởi Client Component (`"use client"`), làm giảm khả năng "đọc" nội dung của một số bot tìm kiếm.
- **LCP (Largest Contentful Paint) kém**: Các icon chuyên khoa không được ưu tiên tải, gây ra hiện tượng hình ảnh xuất hiện trễ.
- **Hydration Cost**: Trình duyệt phải xử lý logic cho toàn bộ danh sách ngay khi tải trang, gây tốn tài nguyên cho các thiết bị yếu.
- **Dữ liệu dư thừa**: Mảng `specialties` bị lặp lại trong cả HTML tĩnh và bundle JS.

## 4. Quá trình Audit

- Đo đạc kích thước HTML (~294 KB).
- Kiểm tra cấu trúc DOM: Phát hiện việc render lặp lại và thiếu thuộc tính ưu tiên cho hình ảnh đầu trang.
- Đánh giá khả năng SEO: Nhận thấy danh sách chuyên khoa quan trọng nhưng lại bị phụ thuộc hoàn toàn vào JavaScript phía Client.

## 5. Giải pháp Triển khai

- **Hybrid SSR Architecture**: Chuyển trang thành Server Component. Toàn bộ 42 chuyên khoa hiện được render trực tiếp vào HTML tĩnh, giúp SEO tối đa.
- **Zustand State Sync**: Sử dụng Zustand store để quản lý `searchTerm`. Thanh Search (Client) và các Item (Client-SSR) giao tiếp qua store để thực hiện Filter mà không cần render lại toàn bộ trang.
- **Image Optimization (Modern Attributes)**:
  - Áp dụng `fetchPriority="high"` và `loading="eager"` cho 8 chuyên khoa đầu tiên (Above the fold).
  - Giữ `loading="lazy"` cho các chuyên khoa còn lại để tiết kiệm băng thông.
- **Client-side Filtering**: Giữ lại trải nghiệm tìm kiếm tức thì (Instant Filter) bằng cách cho phép từng `SpecialtyItem` tự ẩn/hiện dựa trên state từ Zustand.

## 6. Kết quả (Before -> After)

| Tiêu chí            | Trước tối ưu        | Sau tối ưu      | Ghi chú                             |
| :------------------ | :------------------ | :-------------- | :---------------------------------- |
| **SEO**             | Hạn chế             | **Tối ưu nhất** | Toàn bộ link/text có sẵn trong HTML |
| **LCP Performance** | Trung bình          | **Rất nhanh**   | Nhờ `fetchPriority="high"`          |
| **Hydration**       | Nặng (Toàn bộ list) | **Nhẹ**         | Item chỉ hydrate logic ẩn/hiện      |
| **UX Search**       | Mượt mà             | **Mượt mà**     | Giữ nguyên trải nghiệm lọc tức thì  |

---

_Báo cáo được thực hiện bởi Antigravity Senior Performance Engineer._
