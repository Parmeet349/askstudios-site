import { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Calendar, ArrowUpRight, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Technical Insights | ASK Studios",
  description:
    "Technical write-ups, architecture case studies, and engineering field notes on mobile apps, AI automation, and full-stack software from ASK Studios.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-6 pb-12">
          <Interactive3DHeading
            eyebrow="ENGINEERING DISPATCHES"
            badgeTelemetry="FIELD NOTES · ARCHITECTURE"
            title="Technical Insights &"
            highlight="Engineering Notes"
            variant="violet"
            description="Explore our articles, technical retrospectives, and architecture breakdowns on mobile development, AI integrations, and shipping production applications."
            align="center"
          />
        </section>

        {/* Blog Posts Grid */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-violet-500/35 hover:bg-[#0b081e]/90"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

              <div>
                <div className="flex items-center justify-between font-tech text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 text-violet-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] uppercase text-zinc-400">
                    Article
                  </span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-bold text-white transition-colors group-hover:text-violet-200">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {post.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {(post.tags || []).map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-tech text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-tech text-xs font-semibold text-violet-300 transition-colors group-hover:text-violet-200"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </SiteShell>
  );
}
