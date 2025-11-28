// src/app/blog/[slug]/page.tsx
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import AuthorCard from "@/components/blog/AuthorCard";
import Image from "next/image";
import Link from "next/link";

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
  const siteUrl = process.env.SITE_URL || "https://askstudios.net";
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: fm.title,
    description: fm.description || undefined,
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
  // Support Next versions where params might be a Promise
  const { slug } = (await params) as { slug: string };

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const { frontMatter, contentHtml, reading } = post;

  // find 3 related posts by tag (fallback: latest posts)
  const all = getAllPosts();
  const related = all
    .filter((p) => p.slug !== slug && (p.tags || []).some((t: string) => (frontMatter.tags || []).includes(t)))
    .slice(0, 3);

  const fallbackRelated = related.length ? related : all.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Blog"
          title={frontMatter.title}
          description={frontMatter.description || ""}
        />

        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          {/* Article */}
          <article className="prose prose-lg prose-invert max-w-none text-slate-100">
            {/* Featured image (if present) */}
            {frontMatter.image && (
              <div className="mb-6 rounded-xl overflow-hidden border border-slate-700/60">
                <Image
                  src={frontMatter.image}
                  alt={frontMatter.title}
                  width={1600}
                  height={900}
                  quality={80}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="mb-4 text-xs text-slate-400">
              <span>{formatDate(frontMatter.date)}</span>
              <span className="mx-2">•</span>
              <span>{Math.ceil(reading.minutes)} min read</span>
              {frontMatter.author?.name && (
                <>
                  <span className="mx-2">•</span>
                  <span>By {frontMatter.author.name}</span>
                </>
              )}
            </div>

            {/* Excerpt / intro (description) */}
            {frontMatter.description && (
              <p className="lead text-slate-300">{frontMatter.description}</p>
            )}

            {/* The rendered HTML from MD/MDX */}
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

            {/* Bottom CTA */}
            <div className="mt-12">
              <GlassCard>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-semibold text-slate-50">
                    Like this post?
                  </div>
                  <div className="text-sm text-slate-300">
                    If you want help building anything like this — a chatbot, AI feature, or a custom app — we’d love to chat.
                  </div>
                  <div className="flex gap-3">
                    <Link href="/contact" className="inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300">
                      Start a project
                    </Link>
                    <a href="mailto:info@askstudios.net" className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-emerald-400">
                      Email us
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>
          </article>

          {/* Aside */}
          <aside className="space-y-6">
            <GlassCard>
              {/* Author */}
              <div className="flex items-start justify-between gap-3">
                <AuthorCard author={frontMatter.author} />
              </div>

              {/* Tags */}
              <div className="mt-4 text-xs text-slate-400">
                Tags
                <div className="mt-2 flex flex-wrap gap-2">
                  {(frontMatter.tags || []).map((t) => (
                    <span key={t} className="rounded-full bg-slate-800/80 px-2 py-0.5 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-4 text-xs">
                <div className="text-slate-200 font-semibold">Share this post</div>
                <div className="mt-2 flex gap-2">
                  <a
                    href={`mailto:?subject=${encodeURIComponent(frontMatter.title)}&body=${encodeURIComponent(`${process.env.SITE_URL || "https://askstudios.net"}/blog/${slug}`)}`}
                    className="rounded-md px-3 py-1 text-xs bg-slate-800/60 hover:bg-slate-800"
                  >
                    Email
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontMatter.title)}&url=${encodeURIComponent(`${process.env.SITE_URL || "https://askstudios.net"}/blog/${slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md px-3 py-1 text-xs bg-slate-800/60 hover:bg-slate-800"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">Related</div>
                <div className="mt-3 space-y-3">
                  {fallbackRelated.map((p) => (
                    <div key={p.slug} className="flex items-start justify-between gap-2">
                      <div>
                        <Link href={`/blog/${p.slug}`} className="font-medium text-slate-100 hover:underline">
                          {p.title}
                        </Link>
                        <div className="text-xs text-slate-400">{p.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">Quick info</div>
                <div className="mt-3 text-sm text-slate-300">
                  <div><strong>Published:</strong> {formatDate(frontMatter.date)}</div>
                  <div className="mt-1"><strong>Reading time:</strong> {Math.ceil(reading.minutes)} min</div>
                </div>
              </div>
            </GlassCard>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
