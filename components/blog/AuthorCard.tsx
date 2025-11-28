// src/components/blog/AuthorCard.tsx
import Image from "next/image";

export default function AuthorCard({ author }: { author?: any }) {
  if (!author) return null;
  return (
    <div className="flex items-center gap-3">
      {author.avatar && (
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={author.avatar} alt={author.name} width={48} height={48} />
        </div>
      )}
      <div>
        <div className="text-sm font-semibold text-slate-50">{author.name}</div>
        <div className="text-xs text-slate-400">{author.twitter ? `@${author.twitter}` : author.email}</div>
      </div>
    </div>
  );
}
