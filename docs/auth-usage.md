# Auth System Usage Guide

## Overview

Hệ thống auth đã được thiết lập để:

- Lưu token vào localStorage
- Lưu thông tin user (userName, fullName, email) vào Redux store với persistence

## Files Created/Modified

### 1. Auth Slice

- `src/libs/redux/features/auth/authSlice.ts` - Redux slice for auth state
- `src/libs/redux/rootReducer.ts` - Updated to include auth reducer
- `src/libs/redux/store.ts` - Updated persist config to include auth

### 2. Utilities

- `src/utils/tokenStorage.ts` - Token management utilities
- `src/hooks/useAuth.ts` - Custom hook for auth functionality

### 3. Example Component

- `src/components/AuthHandler.tsx` - Demo component showing usage

## Usage Examples

### 1. Login from URL parameters (your use case)

```typescript
import { useAuth } from '@/hooks/useAuth';

const { loginFromUrl } = useAuth();

// Your URL params string
const urlParams =
  'userId=0&userName=%2B84762611994&fullName=Nguy%E1%BB%85n%20Xu%C3%A2n%20Tr%E1%BB%8Dng&number=&email=%2B84762611994&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IiIsInN1YiI6MCwidXNlck1vbmdvSWQiOiI2NWYyNjkyNTc3YmFjZjAwMjQzYmQ5ZjciLCJpYXQiOjE3NjY0NjMyMDgsImV4cCI6NDkyMjIyMzIwOH0._vSk_OxUg4A_hZVp6A9sEF3l67u3czmhQss5WhLFlYE&historyBookingCount=0&patientCount=0&isCS=false&userMongoId=65f2692577bacf00243bd9f7';

const success = loginFromUrl(urlParams);
```

### 2. Manual login

```typescript
const { login } = useAuth();

login({
  userId: '0',
  userName: '+84762611994',
  fullName: 'Nguyễn Xuân Trọng',
  email: '+84762611994',
  token: 'your_jwt_token_here',
  userMongoId: '65f2692577bacf00243bd9f7',
});
```

### 3. Access auth state

```typescript
const { isAuthenticated, userInfo, getToken } = useAuth();

console.log('Is authenticated:', isAuthenticated);
console.log('User info:', userInfo);
console.log('Token:', getToken());
```

### 4. Logout

```typescript
const { logout } = useAuth();

logout(); // Clears both localStorage and Redux store
```

## What happens when you login:

1. **Token** → Saved to localStorage with key 'auth_token'
2. **User Info** → Saved to Redux store and automatically persisted
3. **State** → `isAuthenticated` becomes `true`

## Persistence:

- **Token**: Persists in localStorage (survives browser refresh/close)
- **User Info**: Persists in Redux store via redux-persist (survives browser refresh/close)
- Both will be automatically restored when the app loads

## Test the implementation:

1. Add `<AuthHandler />` to any page to test
2. Click "Login with URL Data" to see it work
3. Refresh page - data should persist
4. Check localStorage and Redux DevTools to verify storage
