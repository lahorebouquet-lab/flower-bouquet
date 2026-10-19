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
        source: "/flower-delivery-islamabad/f-10-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/f-11-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/g-6-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/g-7-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/g-9-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/g-10-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/g-13-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/i-8-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/i-9-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/i-10-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/e-7-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/e-11-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/d-12-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/b-17-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/blue-area-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/gulberg-greens-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
      {
        source: "/flower-delivery-islamabad/bahria-enclave-islamabad",
        destination: "/flower-delivery-islamabad",
        permanent: true,
      },
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
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
