// src/app/blog/page.tsx
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <SiteShell>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Thoughts"
          title="Blog"
          description="Articles, case studies, and technical write-ups from ASK Studios."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <GlassCard key={post.slug}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{post.description}</p>
                </div>
                <div className="text-xs text-slate-400">
                  <div>{new Date(post.date).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-300/80">
                <div className="flex gap-2">
                  {(post.tags || []).map((t) => (
                    <span key={t} className="rounded-full bg-slate-800/80 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-emerald-300 hover:underline"
                >
                  Read → 
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
