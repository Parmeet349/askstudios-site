// src/app/rss/route.ts
import { getAllPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = process.env.SITE_URL || "https://askstudios.net";
  const feedItems = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      const title = escapeHtml(post.title || "");
      const desc = escapeHtml(post.description || "");
      const pubDate = new Date(post.date).toUTCString();
      return `
<item>
  <title>${title}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <pubDate>${pubDate}</pubDate>
  <description>${desc}</description>
</item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>ASK Studios — Blog</title>
  <link>${siteUrl}/blog</link>
  <description>Articles and case studies from ASK Studios</description>
  <language>en-us</language>
  ${feedItems}
</channel>
</rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
