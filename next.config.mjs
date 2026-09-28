/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "destined-weevil.10web.cloud",
      },
    ],
  },
};

export default nextConfig;
