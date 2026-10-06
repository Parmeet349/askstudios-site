// src/app/blog/[slug]/page.tsx
import SiteShell from "@/components/layout/SiteShell";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import AuthorCard from "@/components/blog/AuthorCard";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Tag,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const fm = post.frontMatter;
  const siteUrl = process.env.SITE_URL || "https://www.askstudios.net";
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${fm.title} | ASK Studios`,
    description: fm.description || undefined,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: fm.title,
      description: fm.description,
      url,
      images: fm.image ? [{ url: `${siteUrl}${fm.image}` }] : undefined,
    },
    twitter: {
      title: fm.title,
      description: fm.description,
      images: fm.image ? [`${siteUrl}${fm.image}`] : undefined,
    },
  };
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = (await params) as { slug: string };

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const { frontMatter, contentHtml, reading } = post;

  const all = getAllPosts();
  const related = all
    .filter((p) => p.slug !== slug && (p.tags || []).some((t: string) => (frontMatter.tags || []).includes(t)))
    .slice(0, 3);

  const fallbackRelated = related.length ? related : all.filter((p) => p.slug !== slug).slice(0, 3);
  const siteUrl = process.env.SITE_URL || "https://www.askstudios.net";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontMatter.title,
    description: frontMatter.description || undefined,
    image: frontMatter.image ? `${siteUrl}${frontMatter.image}` : undefined,
    datePublished: frontMatter.date,
    dateModified: frontMatter.date,
    author: {
      "@type": "Person",
      name: frontMatter.author?.name || "Parmeet Singh Banga",
    },
    publisher: {
      "@type": "Organization",
      name: "ASK Studios",
      url: "https://www.askstudios.net",
      logo: {
        "@type": "ImageObject",
        url: "https://www.askstudios.net/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-tech text-xs text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 font-tech text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 text-violet-400">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formatDate(frontMatter.date)}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{Math.ceil(reading.minutes)} min read</span>
            </span>
            {frontMatter.author?.name && (
              <>
                <span>•</span>
                <span className="text-zinc-300">By {frontMatter.author.name}</span>
              </>
            )}
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-chiseled-titanium sm:text-4xl lg:text-5xl">
            {frontMatter.title}
          </h1>

          {frontMatter.description && (
            <p className="text-lg leading-relaxed text-zinc-300/90 pt-2">
              {frontMatter.description}
            </p>
          )}
        </header>

        {/* Main Content Layout */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          {/* Article Body */}
          <article className="lg:col-span-8">
            {frontMatter.image && (
              <div className="mb-8 overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl">
                <Image
                  src={frontMatter.image}
                  alt={frontMatter.title}
                  width={1600}
                  height={900}
                  quality={85}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div
              className="prose prose-lg prose-invert max-w-none text-zinc-300 leading-relaxed font-sans prose-headings:font-display prose-headings:text-white prose-a:text-violet-400 hover:prose-a:text-violet-300 prose-code:font-tech prose-code:text-emerald-300"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Bottom Project Inquiry CTA */}
            <div className="mt-16 rounded-3xl border border-violet-500/25 bg-gradient-to-r from-violet-950/30 via-[#070514]/90 to-emerald-950/30 p-8 shadow-2xl backdrop-blur-2xl">
              <h3 className="font-display text-2xl font-bold text-white">
                Interested in building software like this?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Whether you need a mobile app, high-performance web platform, or custom AI automation, ASK Studios can design and ship a production version for you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 font-tech text-xs font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-indigo-500"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:info@askstudios.net"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-tech text-xs text-zinc-300 hover:bg-white/[0.08] transition-colors"
                >
                  Email Engineering
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Author Card */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-2xl">
              <div className="font-tech text-xs uppercase tracking-wider text-zinc-400 mb-4">
                Author
              </div>
              <AuthorCard author={frontMatter.author} />
            </div>

            {/* Tags */}
            {(frontMatter.tags || []).length > 0 && (
              <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-2xl">
                <div className="flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-zinc-400">
                  <Tag className="h-3.5 w-3.5 text-violet-400" />
                  <span>Topics</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(frontMatter.tags || []).map((t: string) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-tech text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-2xl">
              <div className="flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-zinc-400">
                <Share2 className="h-3.5 w-3.5 text-cyan-400" />
                <span>Share Article</span>
              </div>
              <div className="mt-4 flex gap-2 font-tech text-xs">
                <a
                  href={`mailto:?subject=${encodeURIComponent(frontMatter.title)}&body=${encodeURIComponent(`${siteUrl}/blog/${slug}`)}`}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-zinc-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  Email
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontMatter.title)}&url=${encodeURIComponent(`${siteUrl}/blog/${slug}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-zinc-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  Twitter / X
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-2xl">
              <div className="flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-zinc-400">
                <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                <span>Related Dispatches</span>
              </div>
              <div className="mt-4 space-y-4">
                {fallbackRelated.map((p) => (
                  <div key={p.slug} className="group">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="font-display text-sm font-bold text-white transition-colors group-hover:text-violet-200"
                    >
                      {p.title}
                    </Link>
                    <div className="mt-1 text-xs text-zinc-400 line-clamp-2">
                      {p.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
