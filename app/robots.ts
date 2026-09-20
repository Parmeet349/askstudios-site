import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.askstudios.net/sitemap.xml",
  };
}
