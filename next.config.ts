import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    webpackMemoryOptimizations: true,
  },
  webpack: ( config, { isServer } ) => {
    config.cache = false;
    return config;
  },
  turbopack: {}
};

export default nextConfig;
