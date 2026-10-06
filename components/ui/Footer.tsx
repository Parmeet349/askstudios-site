import Link from "next/link";
import AskLogo from "./AskLogo";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-white/[0.08] pt-12 pb-8 text-xs text-zinc-500">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Studio Info */}
        <div className="flex flex-col items-start gap-3 max-w-sm">
          <AskLogo />
          <p className="text-xs leading-relaxed text-zinc-400 mt-2">
            Independent product studio based in Ontario, Canada. Designing and
            engineering native mobile applications, intelligent AI pipelines,
            and scaled web software.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500 mt-1">
            <span>🇨🇦 Ontario, Canada</span>
            <span>·</span>
            <a
              href="mailto:info@askstudios.net"
              className="hover:text-emerald-400 transition-colors"
            >
              info@askstudios.net
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
          <div>
            <span className="font-tech text-xs uppercase tracking-wider text-zinc-200 block mb-3 font-bold">
              Products
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/brieflyca"
                  className="hover:text-white transition-colors"
                >
                  BrieflyCA (News)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/autolog"
                  className="hover:text-white transition-colors"
                >
                  AutoLog (Vehicles)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/resumerail"
                  className="hover:text-white transition-colors"
                >
                  ResumeRail (AI)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/before-you-go"
                  className="hover:text-white transition-colors"
                >
                  Before You Go
                </Link>
              </li>
              <li>
                <Link
                  href="/products/tambola-caller"
                  className="hover:text-white transition-colors"
                >
                  Tambola Caller
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-tech text-xs uppercase tracking-wider text-zinc-200 block mb-3 font-bold">
              Studio
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Client Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About the Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-tech text-xs uppercase tracking-wider text-zinc-200 block mb-3 font-bold">
              Legal & Policies
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/flagquest-privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  FlagQuest Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/tambola-privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Tambola Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-6 font-mono text-[11px] text-zinc-500">
        <p>© {new Date().getFullYear()} ASK Studios. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Crafted with Next.js, React 19 & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
