# Authorization System Production Guide

## Tổng quan

Hệ thống authorization đã được thiết lập để xử lý đăng nhập tự động qua URL **path segments** (không dùng query parameters) và cập nhật UI header theo trạng thái đăng nhập.

## Luồng hoạt động

### 1. Authorization URL (Định dạng mới - PATH SEGMENTS)

```
/[hospital]/authorized/userId=0&userName=%2B84762611994&fullName=Nguy%E1%BB%85n%20Xu%C3%A2n%20Tr%E1%BB%8Dng&number=&email=%2B84762611994&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IiIsInN1YiI6MCwidXNlck1vbmdvSWQiOiI2NWYyNjkyNTc3YmFjZjAwMjQzYmQ5ZjciLCJpYXQiOjE3NjY0NjMyMDgsImV4cCI6NDkyMjIyMzIwOH0._vSk_OxUg4A_hZVp6A9sEF3l67u3czmhQss5WhLFlYE&historyBookingCount=0&patientCount=0&isCS=false&userMongoId=65f2692577bacf00243bd9f7
```

**⚠️ Lưu ý quan trọng: URL KHÔNG có dấu "?" - tất cả parameters được truyền như path segments**

### 2. Các bước xử lý

1. User truy cập URL `/[hospital]/authorized/[...path-segments]` với parameters
2. Page tự động parse path segments và đăng nhập user
3. Hiển thị loading screen với thông báo "Đang xử lý đăng nhập..."
4. Nếu thành công: Hiển thị "Đăng nhập thành công!" và redirect về `/[hospital]`
5. Nếu thất bại: Hiển thị thông báo lỗi với nút "Quay về trang chủ"

### 3. Lưu trữ dữ liệu

- **Token**: Lưu vào `localStorage` với key `auth_token`
- **User Info**: Lưu vào Redux store và persist tự động
  - `userName`: Tên đăng nhập
  - `fullName`: Họ tên đầy đủ
  - `email`: Email
  - `userId`: ID người dùng
  - `userMongoId`: MongoDB ID

### 4. Cập nhật Header UI

#### Desktop Header

- **Chưa đăng nhập**: Hiển thị button "Đăng nhập"
- **Đã đăng nhập**: Hiển thị dropdown với:
  - Tên người dùng (fullName)
  - Email
  - Nút "Đăng xuất"

#### Mobile Header (HeaderDrawer)

- **Chưa đăng nhập**: Hiển thị button "Đăng nhập"
- **Đã đăng nhập**: Hiển thị:
  - Card thông tin user (fullName, email)
  - Nút "Đăng xuất" màu đỏ

## Files đã tạo/cập nhật

### Core Auth System

- `src/libs/redux/features/auth/authSlice.ts` - Redux slice cho auth state
- `src/utils/tokenStorage.ts` - Utilities cho localStorage
- `src/hooks/useAuth.ts` - Custom hook cho auth functionality

### Pages

- `src/app/[hospital]/authorized/[...info]/page.tsx` - **Production page** xử lý authorization với catch-all route

### UI Components

- `src/components/layouts/partner-layout/Header.tsx` - Updated desktop header
- `src/components/layouts/partner-layout/HeaderDrawer.tsx` - Updated mobile header
- `src/components/AuthTester.tsx` - Development testing component

### Configuration

- `src/libs/redux/rootReducer.ts` - Added auth reducer
- `src/libs/redux/store.ts` - Updated persist config

## Testing

### Development Testing

1. Add `<AuthTester />` vào bất kỳ page nào
2. Click icon 🔒 ở góc phải màn hình
3. Copy URL test và navigate để test

### Production Testing

1. Deploy application
2. Access URL: `https://yourdomain.com/hospital-name/authorized/userId=0&userName=...&token=...`
3. Verify authorization flow
4. Check header UI changes
5. Test logout functionality

## Các tính năng chính

### ✅ Auto Login from URL

- Parse URL parameters tự động
- Validate required fields (token, userId)
- Save data to appropriate stores

### ✅ Persistent Storage

- Token persist qua browser refresh
- User info persist qua Redux

### ✅ UI State Management

- Header tự động cập nhật theo auth state
- Responsive design (desktop + mobile)
- Dropdown menu cho desktop
- User card cho mobile

### ✅ Error Handling

- Handle missing/invalid parameters
- User-friendly error messages
- Fallback redirect to homepage

### ✅ Security

- Token stored in localStorage
- User data in encrypted Redux persist
- Auto logout functionality

## Production Deployment Notes

1. **Environment Variables**: Không cần thêm env vars
2. **Build**: Chạy `npm run build` bình thường
3. **URL Structure**: Đảm bảo route `/[hospital]/authorized/[...segments]` accessible (catch-all route)
4. **HTTPS**: Recommend sử dụng HTTPS cho production
5. **Token Validation**: Consider thêm JWT validation nếu cần

## Troubleshooting

### Lỗi thường gặp

- **"Login failed"**: Check URL parameters format
- **Header không cập nhật**: Check Redux DevTools
- **Token không lưu**: Check localStorage permissions

### Debug Tools

- Redux DevTools: Xem auth state
- Browser DevTools > Application > Local Storage: Xem token
- Console logs: Check authorization process
