import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/before-you-go-privacy-policy",
        destination: "/before-you-go/privacy",
        permanent: true,
      },
      {
        source: "/before-you-go-terms",
        destination: "/before-you-go/terms",
        permanent: true,
      },
      {
        source: "/before-you-go-support",
        destination: "/before-you-go/support",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
