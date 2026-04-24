# Báo cáo Đánh giá Codebase theo Vercel React Best Practices

**Thư mục kiểm tra:** `src/app/chuyen-khoa`

Sau khi cắm bộ Rules mới nhất từ Vercel Engineer (`.agents/skills/vercel-react-best-practices`), tôi đã quét toàn bộ thư mục `chuyen-khoa` và phát hiện ra **4 vi phạm đáng chú ý** ảnh hưởng đến hiệu năng Render (Client-side) cũng như Bundle Size.

Dưới đây là chi tiết các vấn đề cùng hướng giải quyết:

---

### 1. Vi phạm `bundle-dynamic-imports` (Mức độ: CRITICAL)

**File:** `src/app/chuyen-khoa/[specialty]/_components/HospitalList.tsx`
Bạn đang sử dụng `next/dynamic` với option `ssr: false` cho các Component đơn giản:

```tsx
const HospitalCard = dynamic(() => import("./HospitalCard"), { ssr: false });
const CustomPagination = dynamic(
  () => import("@/components/custom/pagination"),
  { ssr: false }
);
```

- **Lý do sai sót:** `next/dynamic` sinh ra để lazy load các file thư viện cực kì nặng (như Map, Monaco Editor). Việc bạn disable SSR (`ssr: false`) ở một thẻ card/pagination nhỏ xíu sẽ phá hoại hoàn toàn SEO, ép Browser phải tải JS xong mới bắt đầu vẽ UI, gây ra hiện tượng giật chớp LCP (Layout Shift) khi user mới vào trang.
- **Cách sửa:** Chuyển về `import` trực tiếp thông thường.

### 2. Vi phạm `js-combine-iterations` & CPU Bottleneck (Mức độ: LOW-MEDIUM)

**File:** `src/app/chuyen-khoa/_components/specialty-list/index.tsx`
Logic filter đang tính toán lại `normalize(searchTerm)` lặp đi lặp lại ở mỗi vòng lặp `filter`.

```tsx
// ❌ Sai: Thực thi hàm normalize N lần
const searchedSpecialties = useMemo(() => {
  if (!searchTerm) return specialties;
  return specialties.filter(item =>
    normalize(item.name).includes(normalize(searchTerm))
  );
}, [searchTerm]);

// ✅ Đúng: Lưu giá trị tính 1 lần trước khi vào loop giúp giảm O(N) calls
const searchedSpecialties = useMemo(() => {
  if (!searchTerm) return specialties;
  const normalizedSearch = normalize(searchTerm);
  return specialties.filter(item =>
    normalize(item.name).includes(normalizedSearch)
  );
}, [searchTerm]);
```

### 3. Vi phạm `js-batch-dom-css` (Mức độ: MEDIUM)

**File:** `src/app/chuyen-khoa/[specialty]/_components/HospitalCard.tsx`
Component đang sử dụng các hooks từ React Event (`onMouseEnter`, `onMouseLeave`) để... chỉnh sửa DOM In-line CSS (`e.currentTarget.style.backgroundColor`).

```tsx
// ❌ Đoạn code sai:
<button
  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1d4ed8"; }}
  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#2563eb"; }}
>
```

- **Lý do sai sót:** Việc can thiệp trực tiếp DOM bằng JavaScript Events gây ra tình trạng React phải quản lý một rác thải Event Listeners trên từng phần tử, buộc Layout Thrashing và cực nặng cho Client.
- **Cách sửa:** **Hãy dùng CSS thuần túy**. Sửa lại file `.scss` hoặc thêm class `:hover` từ CSS/Tailwind, loại bỏ hoàn toàn Event Handler của React cho CSS effect.

### 4. Vi phạm `rendering-conditional-render` (Mức độ: LOW)

**File:** `src/app/chuyen-khoa/[specialty]/_components/HospitalList.tsx`
Dùng toán tử `&&` để render chuỗi có thể trả về falsy string.

```tsx
{
  searchQuery && <p>Không có kết quả cho tìm kiếm "{searchQuery}"</p>;
}
```

- **Vấn đề:** Mặc dù không crash, nhưng nếu `searchQuery` là `""` chuỗi rỗng thì React sẽ tự động tạo một empty text node `" "` vào trong DOM Tree, điều này là lãng phí tài nguyên vẽ.
- **Cách sửa:** Chuyển sang toán tử `ternary` rành mạch:
  `{searchQuery ? <p>... </p> : null}`

---

**💡 Action:** Bạn có muốn tôi tự động chạy **Refactor** (sửa) 4 file trên để tuân thủ Best Practices này luôn giúp codebase của bạn ở mức hoàn hảo không?
