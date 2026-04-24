# Environment Configuration

This document describes the centralized environment variable configuration system for the MedPro SEO Optimize application.

## Overview

The application now uses a centralized configuration system that:

- ✅ Provides type safety for all environment variables
- ✅ Validates required variables on startup
- ✅ Offers fallback values for optional variables
- ✅ Centralizes all environment variable access
- ✅ Separates client-side and server-side variables
- ✅ Supports different environments (development, production, test)

## Configuration Structure

```typescript
import { env } from "@/config";

// Environment detection
env.NODE_ENV; // 'development' | 'production' | 'test'
env.isDevelopment; // boolean
env.isProduction; // boolean
env.isTest; // boolean

// API configuration (client-side)
env.api.baseURL; // NEXT_PUBLIC_API_URL
env.api.strapiURL; // NEXT_PUBLIC_STRAPI_URL

// App URLs
env.app.url; // NEXT_PUBLIC_APP_URL
env.app.canonicalURL; // NEXT_PUBLIC_APP_URL (alias)

// Strapi configuration (server-side only)
env.strapi.url; // STRAPI_URL
env.strapi.apiURL; // STRAPI_API_URL
env.strapi.token; // STRAPI_API_TOKEN
env.strapi.getBaseURL(); // Helper method to get appropriate Strapi URL
```

## Environment Variables

### Required Client-Side Variables

These are available in the browser and must be prefixed with `NEXT_PUBLIC_`:

```env
NEXT_PUBLIC_API_URL=https://bo-api.medpro.com.vn
NEXT_PUBLIC_STRAPI_URL=https://dev-strapi.medpro.com.vn
```

### Optional Client-Side Variables

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000  # App base URL for canonical links
```

### Required Server-Side Variables

These are only available on the server:

```env
STRAPI_URL=https://dev-strapi.medpro.com.vn
STRAPI_API_TOKEN=your-strapi-api-token-here
```

### Optional Server-Side Variables

```env
STRAPI_API_URL=https://dev-strapi.medpro.com.vn  # Alternative Strapi URL
```

## Usage Examples

### Basic Usage

```typescript
import { env } from "@/config";

// Environment checks
if (env.isDevelopment) {
  console.log("Development mode");
}

// API calls
const response = await fetch(env.api.baseURL + "/endpoint");

// Strapi calls (server-side only)
const strapiUrl = env.strapi.getBaseURL();
```

### Component Usage

```typescript
import { env } from '@/config';

export default function MyComponent() {
  return (
    <div>
      {env.isDevelopment && <DebugInfo />}
      <img src={`${env.api.strapiURL}/uploads/image.jpg`} />
    </div>
  );
}
```

### API Route Usage

```typescript
import { env } from "@/config";

export async function GET() {
  const response = await fetch(`${env.strapi.getBaseURL()}/api/content`, {
    headers: {
      Authorization: `Bearer ${env.strapi.token}`,
    },
  });

  return Response.json(await response.json());
}
```

## Environment Files

The application supports multiple environment files in order of precedence:

1. `.env.local` (loaded in all environments, ignored by git)
2. `.env.staging` (only loaded in staging environment)
3. `.env` (default environment file)

### Development Setup

```bash
# .env.local
STRAPI_URL=https://dev-strapi.medpro.com.vn
STRAPI_API_TOKEN=your-development-token
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production Setup

```bash
# .env
STRAPI_URL=https://strapi.medpro.com.vn
STRAPI_API_TOKEN=your-production-token
NEXT_PUBLIC_APP_URL=https://medpro.com.vn
```

## Validation

The configuration system validates required environment variables on startup:

- **Client-side**: Validates `NEXT_PUBLIC_*` variables
- **Server-side**: Validates all required variables including server-only ones
- **Errors**: Throws descriptive errors for missing required variables

## Migration from Direct process.env Usage

### Before (❌)

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";
const isDev = process.env.NODE_ENV === "development";
```

### After (✅)

```typescript
import { env } from "@/config";

const apiUrl = env.api.baseURL;
const isDev = env.isDevelopment;
```

## Benefits

1. **Type Safety**: All environment variables are typed
2. **Validation**: Missing required variables are caught at startup
3. **Centralization**: Single source of truth for all config
4. **Documentation**: Self-documenting through TypeScript interfaces
5. **Maintainability**: Easy to add/modify configuration
6. **Error Prevention**: Eliminates runtime errors from missing env vars

## Adding New Environment Variables

1. **Update the `EnvConfig` interface** in `src/config/env.ts`
2. **Add the variable** to the appropriate section in the `env` object
3. **Update validation** if the variable is required
4. **Document the variable** in this README
5. **Add to environment files** as needed

Example:

```typescript
// 1. Update interface
interface EnvConfig {
  // ... existing vars
  NEXT_PUBLIC_NEW_FEATURE_URL: string;
}

// 2. Add to config object
export const env = {
  // ... existing config
  features: {
    newFeatureURL: getEnvVar("NEXT_PUBLIC_NEW_FEATURE_URL"),
  },
};
```
