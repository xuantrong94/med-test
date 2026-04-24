# Loading Pattern with SearchParams in Next.js App Router

Tài liệu này hướng dẫn cách triển khai trạng thái Loading hiệu quả khi sử dụng `searchParams` làm bộ lọc (filter) trong Next.js (App Router).

---

## 1. Lý thuyết (Theory)

### Vấn đề (The Problem)
Trong Next.js App Router, khi bạn thay đổi `searchParams` (ví dụ thông qua `router.push`), Next.js thực hiện một **Server-side Navigation**. 
- Mặc định, trình duyệt sẽ giữ lại giao diện cũ (Stale UI) cho đến khi Server render xong giao diện mới.
- Các `Suspense` boundaries hiện có sẽ không tự động kích hoạt lại trừ khi component bị unmount.

### Giải pháp (The Solution)
Chúng ta cần kết hợp hai kỹ thuật:
1. **Client-side Feedback**: Sử dụng `useTransition` để biết khi nào quá trình chuyển trang đang diễn ra.
2. **Server-side Trigger**: Sử dụng `key` cho `Suspense` để buộc React hiển thị fallback (Skeleton) ngay khi tham số thay đổi.

---

## 2. Cấu trúc (Structure)

Mô hình triển khai gồm 3 thành phần chính:
1. **Trigger Component (Client)**: Nơi người dùng tương tác (Select, Pagination, Tabs).
2. **Parent Page (Server)**: Nhận `searchParams` và quản lý `Suspense`.
3. **Target Section (Server)**: Thành phần thực hiện data fetching dựa trên params.

---

## 3. Các kỹ thuật (Techniques)

### useTransition
Sử dụng `[isPending, startTransition] = useTransition()` để bọc lệnh điều hướng. `isPending` sẽ có giá trị `true` ngay khi bắt đầu chuyển trang cho đến khi trang mới được render xong.

### Suspense Key
Thêm một `key` duy nhất vào `Suspense` dựa trên các giá trị của `searchParams`.
```tsx
<Suspense key={city + district} fallback={<Skeleton />}>
  <Content city={city} />
</Suspense>
```
Khi `key` thay đổi, React coi đó là một component mới hoàn toàn, giúp hiển thị fallback ngay lập tức.

---

## 4. Xây dựng (Implementation)

### Bước 1: Tại Client Component (Trigger)
Sử dụng `useTransition` để cung cấp phản hồi ngay lập tức trên UI điều khiển.

```tsx
"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Select } from "antd";

export default function Filter() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onChange = (value: string) => {
    startTransition(() => {
      router.push(`?city=${value}`, { scroll: false });
    });
  };

  return <Select loading={isPending} onChange={onChange} />;
}
```

### Bước 2: Tại Server Page (Parent)
Sử dụng `key` cho `Suspense` để kích hoạt Skeleton ở vùng nội dung.

```tsx
export default async function Page({ searchParams }) {
  const { city, district } = await searchParams;
  const loadingKey = `${city}-${district}`;

  return (
    <Suspense key={loadingKey} fallback={<MySkeleton />}>
      <DataList city={city} district={district} />
    </Suspense>
  );
}
```

---

## 5. Use Cases

| Trường hợp | Mô tả |
| :--- | :--- |
| **Filter Địa điểm** | Chuyển đổi giữa các tỉnh thành/quận huyện mà không làm mất focus của người dùng. |
| **Phân trang (Pagination)** | Hiển thị Skeleton khi chuyển qua các trang dữ liệu khác nhau. |
| **Hệ thống Tab** | Kích hoạt loading khi chuyển đổi giữa các tab dữ liệu lấy từ API khác nhau. |
| **Tìm kiếm (Search)** | Cung cấp phản hồi loading ngay trong ô input khi người dùng gõ tìm kiếm. |

---

> [!TIP]
> Luôn sử dụng `{ scroll: false }` trong `router.push` nếu bạn không muốn trang tự động nhảy lên đầu khi người dùng đang thao tác ở giữa trang.
