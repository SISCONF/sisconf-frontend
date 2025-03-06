/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_IMAGES_HOST
    ? `https://${process.env.NEXT_PUBLIC_IMAGES_HOST}/`
    : undefined,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: process.env.IMAGES_HOST || "localhost",
      },
      {
        hostname: "sisconf-foods-images-bucket.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
