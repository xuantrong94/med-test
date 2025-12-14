# Hướng dẫn Khai báo và Sử dụng Slice với Dữ liệu API (RTK Query)

Tài liệu này hướng dẫn cách thêm một luồng dữ liệu mới từ API vào ứng dụng bằng cách sử dụng **Redux Toolkit Query (RTK Query)** với pattern `injectEndpoints`.

Hiện tại dự án đang sử dụng `apiSlice` làm base API service, vì vậy chúng ta sẽ không tạo `createAsyncThunk` thủ công mà sẽ "tiêm" (inject) endpoints vào `apiSlice`.

## 1. Cấu trúc thư mục

Nên đặt các file liên quan đến một tính năng vào `src/libs/redux/features/[featureName]`.

Ví dụ với tính năng **Product**:

```
src/libs/redux/features/product/
└── productSlice.ts  <-- Nơi khai báo endpoints
```

## 2. Khai báo API Endpoints

Tạo file slice (ví dụ `productSlice.ts`) và sử dụng `apiSlice.injectEndpoints`.

```typescript
// src/libs/redux/features/product/productSlice.ts
import { apiSlice } from '@/libs/redux/services/apiSlice';

// Định nghĩa kiểu dữ liệu cho response (nếu chưa có trong shared/endpoints)
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Sử dụng injectEndpoints để thêm endpoints vào apiSlice trung tâm
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Khai báo Query (lấy dữ liệu)
    getProducts: builder.query<Product[], void>({
      query: () => '/products', // Đường dẫn API (sẽ nối vào baseUrl trong apiSlice)
      // keepUnusedDataFor: 60, // (Tùy chọn) Thời gian cache tính bằng giây
    }),

    // Khai báo Query có tham số
    getProductById: builder.query<Product, string>({
      query: id => `/products/${id}`,
    }),

    // Khai báo Mutation (thay đổi dữ liệu: POST, PUT, DELETE)
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: body => ({
        url: '/products',
        method: 'POST',
        body,
      }),
      // Invalidate tags nếu cần làm mới danh sách sau khi tạo
      // invalidatesTags: ['Product'],
    }),
  }),
});

// RTK Query tự động sinh ra các hooks dựa trên tên endpoint
// Quy tắc: use + [TênEndpoint] + [Query/Mutation]
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
} = productApiSlice;
```

## 3. Sử dụng trong Component

Sử dụng các hooks đã export ở bước trên trong React component.

```tsx
// src/components/ProductList.tsx
'use client';

import React from 'react';
import { useGetProductsQuery } from '@/libs/redux/features/product/productSlice';

export default function ProductList() {
  // Hook trả về data, trạng thái loading, error...
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <div>Đang tải...</div>;
  if (isError) return <div>Đã xảy ra lỗi: {JSON.stringify(error)}</div>;

  return (
    <ul>
      {products?.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}
```

## 4. (Tùy chọn) Kết hợp với Slice thường

Nếu bạn cần quản lý state phía client **không liên quan đến cache API** (ví dụ: filter đang chọn, form input), bạn có thể tạo một `createSlice` thông thường trong cùng thư mục.

```typescript
// src/libs/redux/features/product/productUiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const productUiSlice = createSlice({
  name: 'productUi',
  initialState: { filter: 'all' },
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = productUiSlice.actions;
export default productUiSlice.reducer;
```

Sau đó nhớ thêm reducer này vào `rootReducer.ts` nếu sử dụng.
Tuy nhiên, với dữ liệu từ API, **chỉ cần bước 1, 2, 3 là đủ**.
