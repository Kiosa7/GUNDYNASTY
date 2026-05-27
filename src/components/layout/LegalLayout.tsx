import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-dvh bg-ff-black">
        {/* Hero band */}
        <div className="relative overflow-hidden border-b border-ff-cyan/10 bg-ff-graphite pt-32 pb-12">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "var(--section-top-glow)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hud-grid opacity-40"
          />
          <div className="relative mx-auto max-w-4xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-ff-cyan/70">
              / gundynasty.gg
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-grad-section md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-ff-white/45">{subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose-legal">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
