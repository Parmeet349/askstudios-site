import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/60 py-8 text-center text-xs text-slate-500">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-slate-400/70">
          © {new Date().getFullYear()} ASK Studios. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="hover:text-slate-200 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-slate-200 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
