"use client";
import { useInitAuth } from "@/shared/hooks/use-init-auth";

export default function HeaderAuthInit() {
  useInitAuth();
  return null;
}
