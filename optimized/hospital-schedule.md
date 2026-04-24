# Báo cáo Tối ưu hóa Hiệu suất: Trang Lịch khám Bệnh viện

**Đường dẫn**: `/[hospital]/lich-kham` (Ví dụ: `/benh-vien-cho-ray/lich-kham`)

## 1. Cấu trúc Trang

- **Header**: Breadcrumb, Tên cơ sở y tế.
- **Filter Section**: Chọn Chuyên khoa, Chức danh, Tên bác sĩ, Ngày khám.
- **Type Toggle**: Chuyển đổi giữa xem theo "Dịch vụ/Ngày" và xem theo "Bác sĩ".
- **Main Content**:
  - **View Dịch vụ**: Bảng lịch khám theo ngày và các ca khám (Sáng/Chiều).
  - **View Bác sĩ**: Danh sách các thẻ bác sĩ (Doctor Card) có phân trang.

## 2. Chức năng Trang

- Cho phép người dùng tra cứu lịch khám của một bệnh viện cụ thể.
- Lọc bác sĩ theo chuyên khoa, chức danh và tên.
- Xem chi tiết lịch khám của từng bác sĩ hoặc từng dịch vụ.

## 3. Vấn đề (Trước khi tối ưu)

- **RSC Payload Bloat**:
  - Truyền toàn bộ danh sách bác sĩ (~100-200 item) xuống Client để thực hiện filter và phân trang.
  - Object bác sĩ (`SearchResultDoctor`) chứa nhiều thông tin thừa (giới thiệu bản thân, quá trình công tác, SEO metadata) không hiển thị trên trang danh sách.
- **Redundant Data**: Truyền toàn bộ object `Partner` (chứa hàng trăm dịch vụ, phòng khám) vào các Client Component của bộ lọc.
- **Hydration Cost**: Trình duyệt phải xử lý logic lọc và render hàng trăm node DOM ngay cả khi chỉ hiển thị 12 bác sĩ đầu tiên.

## 4. Quá trình Audit

- Sử dụng `curl` và `grep` để kiểm tra sự tồn tại của các trường dữ liệu thừa trong HTML/RSC payload (Ví dụ: `selfIntroduction`).
- Đo đạc kích thước RSC payload cho các bệnh viện lớn (Phát hiện dữ liệu bác sĩ chiếm tỷ trọng lớn).
- Phân tích mã nguồn phát hiện logic phân trang đang nằm ở phía Client (`filteredDoctors.slice`).

## 5. Giải pháp Triển khai

- **Server-side Filter & Pagination**:
  - Chuyển toàn bộ logic lọc (theo tên, chức danh, chuyên khoa) và phân trang (12 item/trang) sang Server Component (`DoctorsContent`).
  - Chỉ gửi chính xác 12 object bác sĩ của trang hiện tại xuống Client.
- **Data Pruning (Gọt tỉa dữ liệu)**:
  - Tạo helper `pruneDoctor` để loại bỏ các trường dữ liệu "nặng" không cần thiết.
  - Gọt tỉa dữ liệu `subjects` và `features` trước khi truyền vào các bộ lọc (`SubjectSelector`, `FeatureSelector`).
- **Shared Helpers**: Chuyển các logic xử lý string (normalize role, extract title) sang file helper dùng chung để chạy được ở cả Server và Client.

## 6. Kết quả (Before -> After)

| Tiêu chí                | Trước tối ưu                    | Sau tối ưu          | Cải thiện                                    |
| :---------------------- | :------------------------------ | :------------------ | :------------------------------------------- |
| **Payload Bác sĩ**      | Full List (~100+)               | **Fixed 12 items**  | Giảm theo tỷ lệ số lượng bác sĩ              |
| **Dữ liệu mỗi Bác sĩ**  | Full Object (Nhiều text thừa)   | **Pruned Object**   | Giảm dung lượng mỗi item                     |
| **Hydration Cost**      | Cao (Tính toán filter ở Client) | **Thấp**            | Client chỉ việc hiển thị dữ liệu có sẵn      |
| **Tốc độ chuyển trang** | Instant (nhưng lag ban đầu)     | **Nhanh & Ổn định** | Không gây lag trình duyệt khi xử lý mảng lớn |

---

_Báo cáo được thực hiện bởi Antigravity Senior Performance Engineer._
