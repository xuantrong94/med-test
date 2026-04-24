# Hướng dẫn Hệ thống Xác thực (Auth System)

Tài liệu này hướng dẫn cách hoạt động và cấu hình hệ thống xác thực trong dự án Medpro SEO Optimize (Next.js 16 V2).

## 1. Cơ chế SSR Cookie Authentication

Hệ thống được thiết kế để giải quyết vấn đề "flicker" (nháy màn hình) khi người dùng quay lại từ Portal Medpro V1.

### Cách thức hoạt động:
1. **Server-Side Fetching (`layout.tsx`)**: Khi người dùng truy cập bất kỳ trang nào, Server của Next.js sẽ kiểm tra Cookie có tên là `token`.
2. **Pre-fetching**: Nếu có token, Server sẽ gọi trực tiếp API `/user/detail-info` để lấy thông tin người dùng ngay trong quá trình render trên Server.
3. **Hydration (`StoreInitializer`)**: Dữ liệu người dùng từ Server sẽ được truyền qua Component `StoreInitializer` để đưa vào Zustand Store (`useUserStore`) ngay khi ứng dụng khởi chạy trên Client.

### Lợi ích:
- Không có độ trễ khi hiển thị tên người dùng.
- SEO tốt hơn vì thông tin người dùng hiển thị ngay trên HTML gốc.
- Trải nghiệm mượt mà (Zero-Flicker).

---

## 2. Chức năng Fake Login (Demo/Development)

Để phục vụ việc phát triển giao diện (UI) và demo flow mà không cần phải thực sự đăng nhập qua Portal, dự án hỗ trợ chế độ Fake Login.

### Cấu hình biến môi trường:
Trong tệp `.env` hoặc `.env.local`, hãy cấu hình các biến sau:

```env
# Bật/Tắt chức năng Fake Login (Mặc định nên tắt trên Production)
NEXT_PUBLIC_ENABLE_FAKE_LOGIN=true

# Thông tin tài khoản giả lập
NEXT_PUBLIC_SAMPLE_USER_PHONE=0965859088
NEXT_PUBLIC_SAMPLE_USER_PASS=123123
```

### Cách sử dụng:
Khi `NEXT_PUBLIC_ENABLE_FAKE_LOGIN=true`, bạn chỉ cần thêm tham số `fromOptimize=true` vào URL.
Ví dụ: `http://localhost:3000/chuyen-khoa?fromOptimize=true`

Hệ thống sẽ tự động gọi API đăng nhập bằng tài khoản mẫu và lưu token vào cả **LocalStorage** và **Cookie**.

---

## 3. Quản lý Token

Token được quản lý tập trung tại `src/shared/api/user.api.ts` thông qua đối tượng `TokenStorage`.

- **`TokenStorage.set(token)`**: Lưu token vào LocalStorage (cho client) và Cookie (cho SSR).
- **`TokenStorage.clear()`**: Xóa token khỏi cả LocalStorage và Cookie (dùng khi Đăng xuất).

---

## 4. Lưu ý quan trọng

- **Production**: Đảm bảo đặt `NEXT_PUBLIC_ENABLE_FAKE_LOGIN=false` trên môi trường Production để bảo mật.
- **SSO**: Vì V1 và V2 chạy chung domain `medpro.vn`, việc chia sẻ Cookie `token` là cơ chế chính để "ghép nối" hai hệ thống.
- **Next.js 15/16**: Lưu ý `cookies()` là một `Promise`, luôn phải sử dụng `await cookies()` trong Server Components.
