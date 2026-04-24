/**
 * Type definitions for environment configuration
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Node.js environment
      readonly NODE_ENV: "development" | "production" | "test";

      // Client-side public variables (available in browser)
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_STRAPI_URL: string;
      NEXT_PUBLIC_APP_URL?: string;

      // Server-side only variables
      STRAPI_URL?: string;
      STRAPI_API_URL?: string;
      STRAPI_API_TOKEN?: string;
    }
  }
}

export {};
