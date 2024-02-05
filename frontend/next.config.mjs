/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [500, 768, 1200, 1920],
    minimumCacheTTL: 3600,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
        port: "6066",
        pathname: "/media/**",
      },
    ],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
