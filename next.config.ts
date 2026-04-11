import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // опционально, но полезно
  output: 'export',       // <-- это заставляет Next.js создавать out/ после билда
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;