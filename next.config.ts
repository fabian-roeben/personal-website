import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fabianroeben.com',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
