# Tài Liệu Bàn Giao Dự Án: Medpro SEO Optimization

Chào Kyle,

Đây là tài liệu bàn giao chi tiết cho dự án `medpro-seo-optimize`. Tài liệu này được thiết kế để giúp người mới tiếp quản có thể nắm bắt toàn bộ dự án, kiến trúc và các quy tắc cốt lõi chỉ trong vòng 1 giờ.

---

## 🚀 Tổng Quan Dự Án

**Medpro SEO Optimization** là một ứng dụng frontend hiệu năng cao, được xây dựng với mục tiêu tối ưu hóa SEO, Core Web Vitals và trải nghiệm người dùng cho nền tảng Medpro. Dự án tập trung vào các chiến lược Server-Side Rendering (SSR), Partial Prerendering (PPR) và tối ưu hóa bundle.

---

## 🛠 Công Nghệ Sử Dụng (Tech Stack)

| Danh mục          | Công nghệ                                  |
| :---------------- | :----------------------------------------- |
| **Framework**     | Next.js 16 (App Router)                    |
| **Ngôn ngữ**      | TypeScript (Strict Mode)                   |
| **Thư viện UI**   | Ant Design (v6)                            |
| **Styling**       | SCSS Modules + Global Sass (Design Tokens) |
| **Quản lý State** | Zustand                                    |
| **Data Fetching** | TanStack Query (React Query) v5            |
| **Đa ngôn ngữ**   | `next-intl`                                |
| **CMS**           | Strapi                                     |
| **Môi trường**    | Vercel / Kubernetes (Standalone output)    |

---

## 📂 Cấu Trúc Thư Mục (`src/`)

- `app/`: Chứa toàn bộ routes, layouts và các components đặc thù của trang. Sử dụng App Router của Next.js.
- `assets/`: Chứa styles toàn cục (`scss/abstracts`), fonts và hình ảnh tĩnh.
- `components/`: Các UI components dùng chung, phân loại theo tính năng (VD: `city-select`, `search-bar`).
- `config/`: Các hằng số của ứng dụng, API endpoints và cấu hình môi trường.
- `i18n/`: Cấu hình đa ngôn ngữ và logic middleware.
- `lib/`: Logic cốt lõi, custom hooks, API clients (`fetch`) và các hàm tiện ích (utils).
- `services/`: Lớp xử lý logic nghiệp vụ, tương tác với API bên ngoài (Strapi, Medpro API).
- `types/`: Định nghĩa các interfaces và types cho TypeScript.

---

## ⚖️ Quy Tắc Phát Triển Cốt Lõi (Bắt Buộc)

### 1. Chiến Lược Styling

- **SCSS Modules**: Mỗi component bắt buộc phải có file `[name].module.scss` đi kèm.
- **Design Tokens**: Tuyệt đối **không hard-code** mã màu, khoảng cách (spacing), hay font-size. Phải sử dụng các biến (variables) từ `@/assets/styles/abstracts/variables`.
- **Lý do**: Đảm bảo tính nhất quán của giao diện và dễ dàng bảo trì/thay đổi theme sau này.

### 2. Hiệu Năng & Rendering

- **Server Components First**: Ưu tiên sử dụng Server Components cho Static Site Generation (SSG). Chỉ dùng `"use client"` khi thực sự cần tương tác (event, state).
- **Loại bỏ Waterfall**: Tránh `await` tuần tự cho các fetch độc lập; sử dụng `Promise.all()` để tối ưu tốc độ tải trang.
- **Tối ưu Bundle**: Tránh "Barrel Imports" từ các thư viện lớn như `lucide-react`, `antd`. Hãy import trực tiếp từ module cụ thể để giảm kích thước file JS.
- **Partial Prerendering (PPR)**: Sử dụng `Suspense` để bao bọc các thành phần dynamic, giúp trang web hiển thị nội dung tĩnh ngay lập tức trong khi chờ dữ liệu động.

### 3. Quản Lý Dữ Liệu

- **Server Actions**: Sử dụng cho các tác vụ thay đổi dữ liệu (mutations) hoặc lấy dữ liệu nhạy cảm cần bảo mật API Token.
- **React Query**: Sử dụng để đồng bộ hóa trạng thái phía client, quản lý cache và loading state.

---

## 📄 Các Trang & Routes Chính

1.  **Trang Chủ (`/`)**: Giao diện tổng quan và thanh tìm kiếm chính.
2.  **Chi Tiết Chuyên Khoa (`/chuyen-khoa/[specialty]`)**: Trang trọng tâm về SEO, hiển thị danh sách bệnh viện/bác sĩ theo chuyên khoa. Hỗ trợ lọc theo Tỉnh thành/Quận huyện.
3.  **Chi Tiết Bệnh Viện (`/[hospital]`)**: Thông tin chi tiết về từng cơ sở y tế.
4.  **Hồ Sơ Bác Sĩ (`/bac-si`)**: Các trang tìm kiếm và thông tin chi tiết của bác sĩ.

---

## ⚡ Quy Trình Phát Triển

### Lệnh Cơ Bản

```bash
# Cài đặt thư viện
yarn install

# Chạy môi trường phát triển
yarn dev

# Build sản phẩm
yarn build

# Phân tích kích thước bundle
ANALYZE=true yarn build
```

### Cấu Hình Môi Trường

Kiểm tra file `.env.local` cho các tham số:

- `NEXT_PUBLIC_API_BASE_URL`: API cốt lõi của Medpro.
- `STRAPI_URL` & `STRAPI_API_TOKEN`: Kết nối hệ thống quản lý nội dung Strapi.

---

## 📈 Checklist Tối Ưu SEO & Lighthouse

- [ ] **Lighthouse Score**: Đảm bảo tất cả các chỉ số (Performance, Accessibility, SEO) đạt trên 90 điểm.
- [ ] **CLS (Layout Shift)**: Sử dụng skeleton loaders đúng kích thước để tránh nhảy giao diện khi tải dữ liệu.
- [ ] **Metadata**: Sử dụng hàm `generateMetadata` để tối ưu thẻ tiêu đề và mô tả cho từng trang.
- [ ] **Images**: Luôn sử dụng `next/image` với thuộc tính `priority` cho các ảnh nằm trong màn hình đầu tiên (LCP).

---

**Người soạn thảo: Antigravity (Senior AI Lead)**
_Vui lòng liên hệ Kyle nếu bạn có bất kỳ thắc mắc nào về kiến trúc chuyên sâu._
