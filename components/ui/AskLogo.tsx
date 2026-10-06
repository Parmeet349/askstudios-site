"use client";

import Link from "next/link";

interface AskLogoProps {
  className?: string;
  showText?: boolean;
}

export default function AskLogo({
  className = "",
  showText = true,
}: AskLogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 outline-none ${className}`}
    >
      {/* Precision Geometric Monogram */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-white/[0.12] to-white/[0.03] p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#090b10] border border-white/10">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300"
          >
            {/* Triangular ASK Monogram Geometry */}
            <path
              d="M16 4L6 24H11.5L16 14.5L20.5 24H26L16 4Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            {/* Stylized S Curve across crossbar */}
            <path
              d="M12 18.5C12 17.5 13.5 16.8 16 16.8C18.5 16.8 20 17.5 20 18.5C20 19.8 17.5 20.2 15 20.8C12.5 21.4 11 22.2 11 23.5C11 25.5 13.5 26.5 16 26.5C18.5 26.5 21 25.5 21 23.5"
              stroke="#090b10"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 18.5C12 17.5 13.5 16.8 16 16.8C18.5 16.8 20 17.5 20 18.5C20 19.8 17.5 20.2 15 20.8C12.5 21.4 11 22.2 11 23.5C11 25.5 13.5 26.5 16 26.5C18.5 26.5 21 25.5 21 23.5"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xs font-bold tracking-[0.22em] text-white transition-colors duration-200 group-hover:text-emerald-200">
            ASK STUDIOS
          </span>
          <span className="text-[9px] font-mono tracking-widest text-zinc-400">
            ONTARIO · CA
          </span>
        </div>
      )}
    </Link>
  );
}
