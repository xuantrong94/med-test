/**
 * Environment variables configuration
 * Centralized management of all environment variables with type safety and validation
 */

// Define the environment variable schema
interface EnvConfig {
  // Node.js environment
  NODE_ENV: "development" | "production" | "test";

  // API URLs
  NEXT_PUBLIC_API_URL: string;
  NEXT_PUBLIC_SEARCH_API_URL: string;
  NEXT_PUBLIC_STRAPI_URL: string;
  NEXT_PUBLIC_APP_URL: string;

  // Strapi configuration (server-side only)
  STRAPI_URL: string;
  STRAPI_API_URL: string;
  STRAPI_API_TOKEN: string;

  // CMS (New for Posts)
  NEXT_PUBLIC_CMS_API_URL: string;

  // Caching strategy (can be false for no-store or number in seconds)
  NEXT_PUBLIC_DEMO_MODE: string;
}

/**
 * Get environment variable with validation
 */
function getEnvVar(key: keyof EnvConfig, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

/**
 * Get optional environment variable
 */
function getOptionalEnvVar(
  key: keyof EnvConfig,
  defaultValue: string = ""
): string {
  return process.env[key] || defaultValue;
}

/**
 * Validate required environment variables on startup
 */
function validateEnv(): void {
  // Client variables with defaults - just ensure they can be accessed
  const clientVarsWithDefaults = {
    NEXT_PUBLIC_API_URL: "https://api-v2.medpro.com.vn",
    NEXT_PUBLIC_STRAPI_URL: "https://dev-strapi.medpro.com.vn",
  } as const;

  const requiredServerVars = ["STRAPI_URL", "STRAPI_API_TOKEN"] as const;

  // Validate client-side variables (using same defaults as in env object)
  for (const [key, defaultValue] of Object.entries(clientVarsWithDefaults)) {
    getEnvVar(key as keyof EnvConfig, defaultValue);
  }

  // Only validate server-side variables on server
  if (typeof window === "undefined") {
    for (const key of requiredServerVars) {
      getEnvVar(key);
    }
  }
}

// Validate on module load
validateEnv();

/**
 * Environment configuration object
 * All environment variables are accessed through this centralized config
 */
export const env = {
  // Environment
  NODE_ENV: (process.env.NODE_ENV || "development") as EnvConfig["NODE_ENV"],
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",

  // Client-side API configuration
  api: {
    baseURL: getEnvVar("NEXT_PUBLIC_API_URL", "https://api-v2.medpro.com.vn"),
    searchURL: getEnvVar(
      "NEXT_PUBLIC_SEARCH_API_URL",
      "https://api-hotfix.medpro.com.vn/mongo/service/search"
    ),
    strapiURL: getEnvVar(
      "NEXT_PUBLIC_STRAPI_URL",
      "https://dev-strapi.medpro.com.vn"
    ),
  },

  // App URLs
  app: {
    url: getOptionalEnvVar("NEXT_PUBLIC_APP_URL", "http://localhost:3000"),
    canonicalURL: getOptionalEnvVar(
      "NEXT_PUBLIC_APP_URL",
      "http://localhost:3000"
    ),
  },

  // Server-side Strapi configuration
  strapi: {
    url: getOptionalEnvVar(
      "NEXT_PUBLIC_STRAPI_URL",
      "https://dev-strapi.medpro.com.vn"
    ),
    apiURL: getOptionalEnvVar("NEXT_PUBLIC_STRAPI_URL", ""),
    token: getOptionalEnvVar("STRAPI_API_TOKEN", ""),

    // Helper method to get the appropriate Strapi URL
    getBaseURL(): string {
      return this.url || this.apiURL || "https://dev-strapi.medpro.com.vn";
    },
  },

  // CMS configuration
  cms: {
    baseURL: getEnvVar("NEXT_PUBLIC_CMS_API_URL", "https://cms.medpro.com.vn"),
  },

  // Global Caching Toggle (True = no-store for all, False = use individual revalidate times)
  isDemoMode: process.env.NEXT_PUBLIC_DEMO_MODE !== "false",
} as const;

export default env;
