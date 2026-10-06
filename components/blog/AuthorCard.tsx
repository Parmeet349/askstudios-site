// src/components/blog/AuthorCard.tsx
import Image from "next/image";

export default function AuthorCard({ author }: { author?: any }) {
  if (!author) return null;
  return (
    <div className="flex items-center gap-3.5">
      {author.avatar ? (
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-violet-500/30 p-0.5 shadow-md">
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 font-display text-sm font-bold text-violet-300">
          {author.name ? author.name.charAt(0) : "A"}
        </div>
      )}
      <div>
        <div className="font-display text-sm font-bold text-white">{author.name}</div>
        <div className="font-tech text-xs text-violet-400">
          {author.twitter ? `@${author.twitter}` : author.email || "Principal Engineer"}
        </div>
      </div>
    </div>
  );
}
