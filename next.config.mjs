/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ytimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
