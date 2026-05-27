import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LogoGD } from "@/components/icons/LogoGD";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileNav } from "@/components/layout/MobileNav";

const INSTAGRAM_URL =
  "https://www.instagram.com/gundynasty.gg?igsh=bXpyNzk3ZnhzdG5z&utm_source=qr";

const YOUTUBE_URL =
  "https://youtube.com/@gundynastyesport?si=RtM7RkIzyPZg3cuj";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-ff-cyan/10 bg-ff-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="group flex items-center gap-2.5"
        >
          <LogoGD
            priority
            className="h-9 w-auto transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_14px_rgba(0,229,199,0.55)]"
          />
          <span className="font-display text-lg font-extrabold tracking-[0.22em] text-ff-white">
            GUN<span className="text-ff-cyan/40">·</span>
            <span className="text-grad-neon">DYNASTY</span>
          </span>
        </Link>

        {/* Desktop: language + social links */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @gundynasty.gg"
            className="group flex items-center gap-2 rounded-sm border border-ff-cyan/20 px-3 py-2 font-heading text-xs uppercase tracking-widest text-ff-white/60 transition-all hover:border-ff-cyan/50 hover:text-ff-cyan hover:shadow-[var(--shadow-glow-cyan-sm)]"
          >
            <InstagramIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            <span>@gundynasty.gg</span>
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube @gundynastyesport"
            className="group flex items-center gap-2 rounded-sm border border-ff-cyan/20 px-3 py-2 font-heading text-xs uppercase tracking-widest text-ff-white/60 transition-all hover:border-ff-cyan/50 hover:text-ff-cyan hover:shadow-[var(--shadow-glow-cyan-sm)]"
          >
            <YoutubeIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            <span>YouTube</span>
          </a>
        </div>

        {/* Mobile: hamburger only */}
        <MobileNav />
      </div>
    </header>
  );
}
