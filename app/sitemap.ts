import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { products } from "@/components/sections/content";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.SITE_URL || "https://askstudios.net";

    // Define static routes
    const staticRoutes = [
        "",
        "/about",
        "/blog",
        "/contact",
        "/portfolio",
        "/privacy",
        "/products",
        "/services",
        "/tambola-privacy-policy",
        "/terms",
    ].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Get dynamic blog routes
    const posts = getAllPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // Get dynamic product routes
    const productRoutes = products.map((product) => ({
        url: `${siteUrl}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...productRoutes];
}
