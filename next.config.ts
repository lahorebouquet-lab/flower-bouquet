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
        destination: "/sunflower-bouquet-lahore",
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
        destination: "/gajray-lahore",
        permanent: true,
      },
      {
        source: "/collections/gajray-garlands-mala-lahore",
        destination: "/gajray-lahore",
        permanent: true,
      },
      // SEO audit Oct 2026: merge duplicate pages into one URL each
      {
        source: "/flower-delivery-dha-lahore",
        destination: "/delivery-areas/dha",
        permanent: true,
      },
      {
        source: "/flower-delivery-gulberg-lahore",
        destination: "/delivery-areas/gulberg",
        permanent: true,
      },
      {
        source: "/flower-delivery-bahria-town-lahore",
        destination: "/delivery-areas/bahria-town",
        permanent: true,
      },
      {
        source: "/flower-delivery-model-town-lahore",
        destination: "/delivery-areas/model-town",
        permanent: true,
      },
      {
        source: "/flower-delivery-johar-town-lahore",
        destination: "/delivery-areas/johar-town",
        permanent: true,
      },
      {
        source: "/flower-delivery-cantt-lahore",
        destination: "/delivery-areas/cantt",
        permanent: true,
      },
      {
        source: "/flower-delivery-wapda-town-lahore",
        destination: "/delivery-areas/wapda-town",
        permanent: true,
      },
      {
        source: "/flower-delivery-valencia-town-lahore",
        destination: "/delivery-areas/valencia-town",
        permanent: true,
      },
      {
        source: "/flower-delivery-lake-city-lahore",
        destination: "/delivery-areas/lake-city",
        permanent: true,
      },
      {
        source: "/flower-delivery-askari-lahore",
        destination: "/delivery-areas/askari",
        permanent: true,
      },
      {
        source: "/flower-delivery-eme-society-lahore",
        destination: "/delivery-areas/eme-society",
        permanent: true,
      },
      {
        source: "/flower-delivery-iqbal-town-lahore",
        destination: "/delivery-areas/iqbal-town",
        permanent: true,
      },
      {
        source: "/flower-delivery-faisal-town-lahore",
        destination: "/delivery-areas/faisal-town",
        permanent: true,
      },
      {
        source: "/sunflowers",
        destination: "/sunflower-bouquet-lahore",
        permanent: true,
      },
      {
        source: "/blog/send-flowers-to-lahore-from-abroad",
        destination: "/send-flowers-to-lahore-from-abroad",
        permanent: true,
      },
      {
        source: "/valentines-day-2027",
        destination: "/valentine-day-flowers-lahore",
        permanent: true,
      },
      {
        source: "/collections/fresh-flower-gajray",
        destination: "/gajray-lahore",
        permanent: true,
      },
      {
        source: "/products/hova-hair-volume-powder",
        destination: "/gifts-and-cakes",
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
