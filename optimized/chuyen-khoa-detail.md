# Báo cáo Tối ưu hóa Hiệu suất: Trang Chi tiết Chuyên khoa

**Đường dẫn**: `/chuyen-khoa/[specialty]` (Ví dụ: `/chuyen-khoa/da-lieu`)

## 1. Cấu trúc Trang

- **Header Section**: Breadcrumb, Banner quảng cáo.
- **Info Section**: Tên chuyên khoa, Icon đại diện.
- **Content Section**: Bài viết mô tả chi tiết chuyên khoa (có tính năng Thu gọn/Mở rộng).
- **Tabbed Interface**:
  - **Cơ sở y tế**: Danh sách bệnh viện/phòng khám (có filter Thành phố/Quận huyện, Phân trang).
  - **Chuyên khoa liên quan**: Các chuyên khoa thuộc cùng nhóm.
  - **Bài viết**: Các tin tức, hướng dẫn liên quan.

## 2. Chức năng Trang

- Hiển thị thông tin chuyên sâu về một chuyên khoa y tế.
- Tìm kiếm và đặt lịch khám tại các cơ sở y tế có chuyên khoa này.
- Điều hướng người dùng đến các nội dung liên quan để tăng tính kết nối (Internal Link).

## 3. Vấn đề (Trước khi tối ưu)

- **HTML Payload quá lớn**: Lên đến **538 KB** (Target là < 40 KB).
- **RSC Data Bloat**: Script tag chứa JSON payload (`__NEXT_DATA__` tương đương trong App Router) lên đến **198 KB**.
- **Render lãng phí**: Cả 3 Tab (Cơ sở y tế, Chuyên khoa, Bài viết) đều được render và serialize dữ liệu cùng lúc, ngay cả khi người dùng chưa nhấn vào.
- **Dữ liệu dư thừa**: Object bệnh viện (`ResultItem`) chứa rất nhiều mảng lồng nhau (dịch vụ, giá tiền, metadata...) không được sử dụng ở UI nhưng vẫn bị gửi xuống Client.
- **Content Duplication**: Nội dung bài viết mô tả bị lặp lại 2 lần: một lần trong HTML tĩnh và một lần trong JSON payload của Client Component.

## 4. Quá trình Audit

- Sử dụng `curl` và `python scripts` để đo chính xác kích thước HTML và từng script tag.
- Phân tích JSON payload để tìm ra "kẻ tội đồ" chiếm dung lượng (Phát hiện `sect_hospitalSection` và `content` chiếm 90% dung lượng script).
- Kiểm tra Network Tab để xác định thời gian `Content Download` (Bị bottleneck tại 1.14s trên localhost).

## 5. Giải pháp Triển khai

- **URL-based Tabs**: Chuyển trạng thái Tab sang URL (`?tab=...`). Server chỉ render và gửi dữ liệu của Tab đang hoạt động.
- **Data Pruning (Gọt tỉa dữ liệu)**: Định nghĩa interface `PrunedHospital`, chỉ map các field cần thiết (ID, Tên, Địa chỉ, Logo, CTA) trước khi gửi xuống Client. Loại bỏ hoàn toàn các mảng dữ liệu lồng nhau.
- **Server Component Content**: Refactor `ContentRenderer` thành Server Component. Tách logic tương tác (Show More/Less) vào một wrapper Client Component siêu nhẹ (`ExpandableWrapper`).
- **Server-Side Pagination**: Thực hiện cắt mảng (slice) 12 item ngay tại Server thay vì gửi toàn bộ danh sách đã filter xuống Client.

## 6. Kết quả (Before -> After)

| Thông số                  | Trước tối ưu | Sau tối ưu    | Cải thiện                              |
| :------------------------ | :----------- | :------------ | :------------------------------------- |
| **Kích thước HTML (Raw)** | 538 KB       | **250 KB**    | **~53%**                               |
| **Kích thước RSC JSON**   | 198 KB       | **9.6 KB**    | **~95%**                               |
| **Content Download**      | 1.14s        | **~0.2s**     | **~80%**                               |
| **SEO**                   | Trung bình   | **Tuyệt vời** | Nội dung các tab có URL riêng để index |

---

_Báo cáo được thực hiện bởi Antigravity Senior Performance Engineer._
