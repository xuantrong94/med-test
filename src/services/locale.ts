"use server";

import { cookies } from "next/headers";

const LOCALE_COOKIE = "NEXT_LOCALE";
// Default to Vietnamese since this is medpro.vn
const defaultLocale = "vi";

export async function getUserLocale() {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE_COOKIE)?.value || defaultLocale;
  return locale;
}

export async function setUserLocale(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "strict",
  });
}
