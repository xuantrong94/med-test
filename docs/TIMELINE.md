# Lịch Sử Phát Triển Dự Án (Project Timeline)

Chào Kyle, dưới đây là tổng hợp các mốc phát triển quan trọng của dự án dựa trên lịch sử commit và các branch tính năng.

---

## 📌 Tổng Quan Phiên Bản

- **v1.1.0 (Hiện tại)**: Tối ưu hóa UI/UX lịch khám, tích hợp đa ngôn ngữ hoàn chỉnh và đạt điểm Lighthouse cao.
- **v1.0.0**: Hoàn thiện hệ thống core, tích hợp Strapi và các trang chuyên khoa/bác sĩ.

---

## 🗓 Timeline Chi Tiết

### 🚀 Giai Đoạn 1: Xây Dựng Nền Tảng & Nội Dung Động (v0.1.0 - v0.5.0)

_Tập trung vào cấu trúc cơ bản và tích hợp CMS Strapi._

- **WSSEO-1641**: Tái cấu trúc thư mục bác sĩ và chuyên khoa. Xây dựng trang `/bac-si/{slug-chuyen-khoa}`.
- **WSSEO-1647**: Tích hợp Strapi để quản lý nội dung động. Triển khai render Content và Banner theo cấu hình từ CMS.
- **Tối ưu hóa ban đầu**: Thực hiện "Code splitting" cho các file content lớn và áp dụng React Best Practices.

### 🏥 Giai Đoạn 2: Hệ Thống Lịch Khám & API (v0.6.0 - v0.8.0)

_Tập trung vào tính năng cốt lõi: Đặt lịch và tìm kiếm._

- **WSSEO-1650**: Triển khai trang Lịch khám theo Bệnh viện.
- **WSSEO-1671 & 1674**: Cấu hình API lấy thông tin bệnh viện và triển khai Search Params cho trang `/lich-kham`.
- **WSSEO-1687 & 1697**: Bổ sung lịch khám theo phòng, dịch vụ. Phân tách rõ rệt: Khám theo chuyên khoa và Khám theo bác sĩ.
- **WSSEO-1678**: Ra mắt trang mới `bac-si/<slug-bac-si>/lich-kham`.

### 🌍 Giai Đoạn 3: Đa Ngôn Ngữ & Tối ưu Hiệu Năng (v0.9.0 - v1.0.0)

_Nâng cấp trải nghiệm người dùng và mở rộng thị trường._

- **Internationalization (i18n)**: Tích hợp `next-intl`, hỗ trợ đa ngôn ngữ (Tiếng Việt, Tiếng Anh, Khmer...).
- **Lighthouse Optimization**: Nâng điểm Lighthouse từ **35 lên 77+** thông qua việc tối ưu asset prefix, image priority và giảm thiểu waterfall requests.
- **Refactor**: Tách biệt hoàn toàn UI và Logic để tăng khả năng bảo trì.

### 💎 Giai Đoạn 4: Hoàn Thiện & Tinh Chỉnh (v1.1.0 - Hiện tại)

_Chăm chút chi tiết UI/UX và độ ổn định._

- **WSSEO-1698 & 1699**: Điều chỉnh layout trang `/lich-kham`, bổ sung bộ lọc (Filter) lịch khám bác sĩ và hệ thống Audit Logs.
- **WSSEO-1700**: Thay đổi layout hiển thị lịch khám chi tiết, tối ưu hóa trải nghiệm người dùng trên mobile.
- **Fixes**: Xử lý các lỗi về ID mismatch trong bộ lọc và highlight ngày khám.

---

## 🛠 Các Nhánh Tính Năng Chính (Key Branches)

| Nhánh                       | Mục đích                                                           |
| :-------------------------- | :----------------------------------------------------------------- |
| `beta`                      | Nhánh phát triển chính, nơi tích hợp các tính năng đã test.        |
| `feat/internationalization` | Phát triển hệ thống đa ngôn ngữ.                                   |
| `WSSEO-XXXX`                | Các nhánh tính năng cụ thể theo ticket trên hệ thống quản lý task. |
| `optimized/chuyen-khoa`     | Các thay đổi tập trung vào tối ưu SEO cho trang chuyên khoa.       |

---

**Ghi chú cho người mới**: Khi tiếp quản, hãy chú ý các commit có tiền tố `perf:` và `refactor:` vì đây là những thay đổi quan trọng ảnh hưởng đến kiến trúc và hiệu năng của hệ thống.
