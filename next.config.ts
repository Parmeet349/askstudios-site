import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-of-use",
        destination: "/terms",
        permanent: true,
      },
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
      {
        source: "/tambola-eula",
        destination: "/tambola-terms",
        permanent: true,
      },
      {
        source: "/tambola-caller-terms",
        destination: "/tambola-terms",
        permanent: true,
      },
      {
        source: "/tambola-caller-privacy-policy",
        destination: "/tambola-privacy-policy",
        permanent: true,
      },
      {
        source: "/tambola-privacy",
        destination: "/tambola-privacy-policy",
        permanent: true,
      },
      {
        source: "/flagquest-privacy",
        destination: "/flagquest-privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
