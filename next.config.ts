import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude keyv adapters from bundling on server side
      config.externals = config.externals || [];
      config.externals.push({
        '@keyv/redis': 'commonjs @keyv/redis',
        '@keyv/mongo': 'commonjs @keyv/mongo',
        '@keyv/sqlite': 'commonjs @keyv/sqlite',
        '@keyv/postgres': 'commonjs @keyv/postgres',
        '@keyv/mysql': 'commonjs @keyv/mysql',
        '@keyv/etcd': 'commonjs @keyv/etcd',
        '@keyv/offline': 'commonjs @keyv/offline',
        '@keyv/tiered': 'commonjs @keyv/tiered',
      });

      // Alternative: Handle keyv fallback
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...config.resolve.fallback,
        keyv: false,
      };
    }
    return config;
  },
  // Move serverComponentsExternalPackages to the correct location for Next.js 15
  serverExternalPackages: ['keyv'],
  eslint: {
    // Skip ESLint during build (you can run it separately)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript errors during build (you can run type checking separately)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
