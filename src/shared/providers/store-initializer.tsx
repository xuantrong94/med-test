"use client";

import { useRef } from "react";
import { useUserStore } from "@/shared/stores/use-user.store";
import { UserDetailResponse } from "@/types/user";
import { TokenStorage } from "@/shared/api/user.api";

interface StoreInitializerProps {
  user: UserDetailResponse | null;
  token?: string | null;
}

export function StoreInitializer({ user, token }: StoreInitializerProps) {
  const initialized = useRef(false);

  if (!initialized.current) {
    if (user) {
      // Initialize the global store with the fetched SSR user data
      useUserStore.setState({ user, loading: false });

      // If token is provided from SSR (cookies), initialize API client seamlessly
      if (token && typeof window !== "undefined") {
        TokenStorage.set(token);
      }
    }
    initialized.current = true;
  }

  return null;
}
