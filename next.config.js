/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "2bprmmcsnadc6tz7.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
