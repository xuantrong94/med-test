# Task: Refactor Mobile Header — Context + Island Pattern

**Type:** Refactor / Performance  
**Priority:** High  
**Estimated effort:** 3–4 giờ  
**Affects:** `CLS`, `LCP`, `Client Bundle Size`

---

## Context & Motivation

Hiện tại `LayoutHeaderMobile` là một `"use client"` monolith — toàn bộ component bao gồm Logo, Image, Link, translations đều bị đưa vào client JS bundle chỉ vì cần `useState` cho Drawer toggle.

```
HIỆN TẠI — Client bundle của MobileHeader:
├── next/link
├── next/image
├── IconHeaderLogo (SVG asset)
├── useTranslations (client i18n runtime)
├── FlagSelect
├── useState + 2× useEffect
└── Drawer (dynamic)
```

Mục tiêu: áp dụng **Context + Island Pattern** — chỉ phần interactive (toggle state) là client, phần static (Logo, Image, nav links) là Server Component.

---

## Pattern Áp Dụng: Context + Minimal Client Island

```
DrawerProvider (Client — state only, không render HTML)
├── LayoutHeaderMobile (Server Component)
│   ├── Logo + Image          ← Server, không vào bundle
│   ├── FlagSelect            ← Client nhẹ, chấp nhận được
│   └── DrawerTrigger         ← Client, chỉ 1 button
└── DrawerOverlay             ← Client, quản lý animation + scroll lock
    └── DrawerNavContent      ← Server Component, render nav links
```

---

## File Structure Sau Refactor

```
src/layouts/Header/Mobile/
├── index.tsx                 ← Server Component (entry point)
├── DrawerProvider.tsx        ← "use client" — context only
├── DrawerTrigger.tsx         ← "use client" — 1 button
├── DrawerOverlay.tsx         ← "use client" — animation + scroll lock
└── DrawerNavContent.tsx      ← Server Component — nav links
```

---

## Chi Tiết Từng File

### 1. `index.tsx` — Server Component

**Yêu cầu:**

- Xóa `"use client"` directive
- Đổi `useTranslations` → `getTranslations` từ `next-intl/server`
- Function signature: `async function`
- Chỉ render static HTML: Logo, Image, wrapper divs
- Mount `DrawerProvider` bọc ngoài toàn bộ
- Mount `DrawerTrigger` và `DrawerOverlay` là client islands

**Fix kèm theo:**

- `decoding='sync'` → `decoding='async'` trên Image logo
- Giữ `fetchPriority='high'` và `loading='eager'` (LCP element)

```tsx
// Skeleton structure
export default async function LayoutHeaderMobile() {
  const t = await getTranslations("common");
  return (
    <DrawerProvider>
      <div className={styles.mb_mobile}>
        <header className={styles.mb_container}>
          <div className={styles.mb_wrapper}>
            <Link href="/">
              <Image fetchPriority="high" decoding="async" loading="eager" ... />
            </Link>
            <FlagSelect />
            <DrawerTrigger label={t("menu")} />
          </div>
        </header>
        <DrawerOverlay closeLabel={t("close")}>
          <DrawerNavContent />
        </DrawerOverlay>
      </div>
    </DrawerProvider>
  );
}
```

---

### 2. `DrawerProvider.tsx` — Client, State Only

**Yêu cầu:**

- `"use client"` directive
- Không render bất kỳ HTML element nào — chỉ `<Context.Provider>{children}</Context.Provider>`
- Export `DrawerProvider` component và `useDrawer` hook
- State: `isOpen: boolean`
- Actions: `open()`, `close()`, `toggle()`
- Dùng `useCallback` cho `open` và `close` để tránh unnecessary re-renders của consumers

```tsx
// Interface
interface DrawerContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
```

---

### 3. `DrawerTrigger.tsx` — Client, Single Button

**Yêu cầu:**

- `"use client"` directive
- Nhận prop `label: string` từ Server Component cha (đã được translate server-side)
- Gọi `useDrawer().toggle()` khi click
- Dùng `aria-expanded={isOpen}` cho accessibility
- Static import `MenuOutlined` từ `@ant-design/icons/lib/icons/MenuOutlined` (không dynamic)

```tsx
interface Props {
  label: string;
}
```

---

### 4. `DrawerOverlay.tsx` — Client, Animation + Side Effects

**Yêu cầu:**

- `"use client"` directive
- Nhận `children: React.ReactNode` — đây là Server Component content được pass xuống
- Nhận `closeLabel: string` từ Server Component cha
- Implement scroll lock + Escape key trong **một `useEffect` duy nhất** (không tách 2 như code cũ):

```tsx
useEffect(() => {
  if (!isOpen) return;
  document.body.style.overflow = "hidden";
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);
  return () => {
    document.body.style.overflow = ""; // "" chứ KHÔNG phải "unset"
    document.removeEventListener("keydown", onKey);
  };
}, [isOpen, close]);
```

- Backdrop render **ngoài** `<header>` element — không nằm trong landmark HTML
- CSS class toggle cho open/close animation thay vì conditional render (giữ DOM node, tránh re-mount)

```tsx
// Dùng className toggle, không unmount
<nav className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
  {children}
</nav>
```

---

### 5. `DrawerNavContent.tsx` — Server Component

**Yêu cầu:**

- Không có `"use client"` directive
- Fetch nav menu data nếu cần (hoặc nhận từ static config)
- Render `<Link>` components cho navigation items
- Không có state, không có event handlers

---

## Acceptance Criteria

### Functional

- [ ] Drawer mở/đóng khi click menu button
- [ ] Drawer đóng khi click backdrop
- [ ] Drawer đóng khi nhấn `Escape`
- [ ] Body scroll bị lock khi drawer mở
- [ ] Body scroll được restore khi drawer đóng (kể cả khi navigate away)
- [ ] `aria-expanded` đúng state trên trigger button

### Performance

- [ ] `next build` output: không có warning về `useSearchParams` từ MobileHeader
- [ ] Bundle analyzer: Logo SVG và `next/image` không xuất hiện trong client chunk của header
- [ ] Lighthouse mobile: không có CLS contribution từ header component
- [ ] `getTranslations` (server) thay thế hoàn toàn `useTranslations` (client) trong `index.tsx`

### Code Quality

- [ ] Chỉ có **một** `useEffect` trong `DrawerOverlay` (không phải 2 như code cũ)
- [ ] `document.body.style.overflow = ""` — không dùng `"unset"`
- [ ] Backdrop không nằm bên trong `<header>` element
- [ ] `DrawerProvider` không render bất kỳ HTML tag nào

---

## Các Lỗi Cũ Cần Fix Trong Task Này

| File                      | Lỗi                                 | Fix                  |
| ------------------------- | ----------------------------------- | -------------------- |
| `Mobile/index.tsx`        | `decoding='sync'` block main thread | → `decoding='async'` |
| `Mobile/index.tsx`        | `"use client"` không cần thiết      | → Server Component   |
| `DrawerOverlay.tsx` (mới) | `overflow = "unset"` sai API        | → `overflow = ""`    |
| `DrawerOverlay.tsx` (mới) | Backdrop bên trong `<header>`       | → Ra ngoài landmark  |
| `Mobile/index.tsx`        | 2 `useEffect` riêng biệt            | → Merge thành 1      |

---

## Không Nằm Trong Scope Task Này

- Fix `useSearchParams` trong `DesktopHeader` → task riêng
- Fix `HospitalList` image `unoptimized` → task riêng
- Migrate `BannerFrame` → task riêng
- CSS animation chi tiết cho Drawer → có thể làm trong task này hoặc tách ra

---

## References

- Conversation analysis: "Mobile Header + Drawer Context Pattern"
- Next.js docs: [Server and Client Composition Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- next-intl: `getTranslations` vs `useTranslations`
