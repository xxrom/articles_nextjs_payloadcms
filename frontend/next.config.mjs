/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.77.17",
        port: "6066",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
