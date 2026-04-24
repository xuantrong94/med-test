/**
 * Configuration index
 * Central export for all configuration modules
 */

import envConfig, { env } from "./env";

// Re-export the main config
export { env, envConfig };

// Re-export server logger functions

// Re-export commonly used config values for convenience
export const { NODE_ENV, isDevelopment, isProduction, api, app, strapi } = env;

const config = {
  env,
};

export default config;
