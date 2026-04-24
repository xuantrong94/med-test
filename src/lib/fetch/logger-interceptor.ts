import { interceptors } from "./interceptors";
import { env } from "@/config";

if (env.isDevelopment) {
  interceptors.addRequestInterceptor(async (url, options) => {
    console.log(`[API Request] ${options.method || "GET"} ${url}`, {
      headers: options.headers,
      body: options.body,
    });
    return { url, options };
  });

  interceptors.addResponseInterceptor(async response => {
    const clone = response.clone();
    const body = await clone.json().catch(() => null);

    console.log(`[API Response] ${response.status} ${response.url}`, {
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      body,
    });

    return response;
  });
}
