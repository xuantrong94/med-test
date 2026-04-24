"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { userApi, TokenStorage } from "@/shared/api/user.api";
import { useUserStore } from "@/shared/stores/use-user.store";
import { useToast } from "@/shared/stores/use-toast.store";

// Use a module-level lock to prevent double execution during React Strict Mode
let isAuthInitCalled = false;

export const useInitAuth = () => {
  const searchParams = useSearchParams();
  const fromOptimize = searchParams.get("fromOptimize");
  const { setUser, setLoading } = useUserStore();
  const toast = useToast();

  useEffect(() => {
    if (isAuthInitCalled) return;
    isAuthInitCalled = true;

    const initAuth = async () => {
      // 1. Record the time the useEffect starts
      (window as any).authInitTime = performance.now();
      console.log(
        `[AUTH-FLOW] 1. initAuth started at: ${(window as any).authInitTime.toFixed(2)}ms`
      );

      setLoading(true);
      try {
        if (
          fromOptimize === "true" &&
          process.env.NEXT_PUBLIC_ENABLE_FAKE_LOGIN === "true"
        ) {
          console.log(
            `[AUTH-FLOW] 2. Detected fromOptimize=true & ENABLE_FAKE_LOGIN. Calling API...`
          );
          console.time("[AUTH-FLOW] API Call Duration");

          // Auto login for optimization demo
          const phone = process.env.NEXT_PUBLIC_SAMPLE_USER_PHONE || "";
          const pass = process.env.NEXT_PUBLIC_SAMPLE_USER_PASS;

          // Format phone number to match sample (+84...)
          const formattedPhone = phone.startsWith("0")
            ? `+84${phone.slice(1)}`
            : phone;

          if (formattedPhone && pass) {
            const loginRes = await userApi.loginWithPassword({
              phone: formattedPhone,
              password: pass,
            });
            console.timeEnd("[AUTH-FLOW] API Call Duration");
            console.log(`[AUTH-FLOW] 3. API finished. Setting user store...`);
            setUser(loginRes);
          }
        } else {
          // Check if already logged in from previous session
          const token = TokenStorage.get();
          if (token) {
            console.log(
              `[AUTH-FLOW] Detected existing token. Fetching user info...`
            );
            const userData = await userApi.getMe();
            setUser(userData);
          }
        }
      } catch (error: any) {
        console.timeEnd("[AUTH-FLOW] API Call Duration");
        console.error("[AUTH-FLOW] Auth initialization failed:", error);
        // Only show error message if we were specifically trying to auto-login
        if (fromOptimize === "true") {
          toast.error(
            error?.message ||
              "Phiên đăng nhập hết hạn hoặc thông tin không chính xác"
          );
        }
        // Clear invalid tokens to prevent repeated 401s
        TokenStorage.clear();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [fromOptimize, setUser, setLoading, toast]);
};
