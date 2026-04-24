import { interceptors } from "./interceptors";
import { env } from "@/config";

// Auth token management
let accessToken: string | null = null;

export function setAccessToken(token: string | null) {
  accessToken = token;
}

export function getAccessToken(): string | null {
  return accessToken;
}

// Add auth header to requests
interceptors.addRequestInterceptor(async (url, options) => {
  if (options.skipAuth) {
    return { url, options };
  }

  const token = getAccessToken();
  const isInternalApi = url.startsWith(env.api.baseURL);

  // Only add Bearer token for internal API calls to avoid leaking tokens
  // or overwriting specific headers for external calls (like Strapi)
  if (token && isInternalApi) {
    return {
      url,
      options: {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      },
    };
  }

  return { url, options };
});

// Handle 401 responses and token refresh
interceptors.addResponseInterceptor(async response => {
  if (response.status === 401) {
    // Implement token refresh logic here
    // For example:
    // const newToken = await refreshToken();
    // setAccessToken(newToken);
    // Then retry the original request
  }

  return response;
});
