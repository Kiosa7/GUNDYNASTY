import type { Metadata, Viewport } from "next";
import { Orbitron, Rajdhani, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creators.company }],
  keywords: [
    "GUNDYNASTY",
    "Gun Dynasty",
    "Free Fire E-sports",
    "Free Fire México",
    "FF Esports LATAM",
    "equipo profesional Free Fire",
    "ffesportslatam",
    "esports México",
    "roster Free Fire",
    "Free Fire torneos",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/images/logo-gd.png", type: "image/png" },
      { url: "/icons/logo-gd.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/logo-gd.png",
    apple: "/images/logo-gd.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
