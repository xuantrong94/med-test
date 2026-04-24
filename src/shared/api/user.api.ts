import { api } from "@/lib/fetch/client";
import { setAccessToken } from "@/lib/fetch/auth-interceptor";
import { LoginRequest, LoginResponse, UserDetailResponse } from "@/types/user";

export const TOKEN_KEY = "token";

/**
 * Helper to manage token across Cookie, LocalStorage and API state.
 */
export const TokenStorage = {
  get: () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  set: (token: string) => {
    if (typeof window === "undefined") return;

    // 1. Save to LocalStorage for persistent client session
    localStorage.setItem(TOKEN_KEY, token);

    // 2. Save to Cookie for SSR (Server Side Rendering) and Middleware support
    // Expires in 7 days
    const maxAge = 7 * 24 * 60 * 60;
    document.cookie = `${TOKEN_KEY}=${token}; path=/; Max-Age=${maxAge}; SameSite=Lax`;

    // 3. Update active API instance state
    setAccessToken(token);
  },

  clear: () => {
    if (typeof window === "undefined") return;

    localStorage.removeItem(TOKEN_KEY);
    document.cookie = `${TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    setAccessToken(null);

    // Optional: Refresh page to clear all states if needed
    // window.location.href = '/login';
  },
};

/**
 * User API Service
 */
export const userApi = {
  /**
   * Đăng nhập bằng số điện thoại/username và mật khẩu
   * POST /user/medpro-login-password
   */
  loginWithPassword: async (params: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
      "/user/medpro-login-password",
      params,
      {
        skipAuth: true, // Login doesn't need existing token
        caller: "loginWithPassword",
      }
    );

    // Automatically sync token after successful login
    if (response.token) {
      TokenStorage.set(response.token);
    }

    return response;
  },

  /**
   * Lấy thông tin chi tiết người dùng
   * GET /user/detail-info
   */
  getMe: async (): Promise<UserDetailResponse> => {
    return api.get<UserDetailResponse>("/user/detail-info", {
      caller: "getMe",
    });
  },

  /**
   * Đăng xuất và xóa sạch session
   */
  logout: () => {
    TokenStorage.clear();
  },
};