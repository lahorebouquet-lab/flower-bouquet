import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/product-category/bouquets",
        destination: "/bouquets",
        permanent: true,
      },
      {
        source: "/collections/bouquets",
        destination: "/bouquets",
        permanent: true,
      },
      {
        source: "/collections/roses",
        destination: "/roses",
        permanent: true,
      },
      {
        source: "/collections/sunflowers",
        destination: "/sunflowers",
        permanent: true,
      },
      {
        source: "/collections/money-bouquets",
        destination: "/money-bouquets",
        permanent: true,
      },
      {
        source: "/collections/wedding-decor",
        destination: "/wedding-decor",
        permanent: true,
      },
      {
        source: "/collections/gifts-cakes",
        destination: "/gifts-and-cakes",
        permanent: true,
      },
      {
        source: "/occasions/birthday",
        destination: "/birthday-surprises",
        permanent: true,
      },
      {
        source: "/price-guide",
        destination: "/prices",
        permanent: true,
      },
      {
        source: "/collections/beautiful-gajray-garlands-mala-lahore",
        destination: "/collections/fresh-flower-gajray",
        permanent: true,
      },
      {
        source: "/collections/gajray-garlands-mala-lahore",
        destination: "/collections/fresh-flower-gajray",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
