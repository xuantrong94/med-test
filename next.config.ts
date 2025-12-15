import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bo-api.medpro.com.vn',
        port: '5000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.medpro.vn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'resource.medpro.com.vn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.medpro.com.vn',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
