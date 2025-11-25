// src/components/ui/Footer.tsx
"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <span>© {year} ASK Studios. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-300">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
