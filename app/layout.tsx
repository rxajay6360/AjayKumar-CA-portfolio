import type { Metadata } from "next";
import { Cinzel, Inter, Syne } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import GrainOverlay from "@/components/GrainOverlay";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aajaykumar.art"),
  title: `${siteConfig.name} — 3D Artist | Texture Artist | Motion Graphics`,
  description: `${siteConfig.tagline}. ${siteConfig.bio}`,
  keywords: [
    "3D Artist",
    "Texture Artist",
    "Motion Graphics",
    "Autodesk Maya",
    "Substance 3D Painter",
    "Arnold Renderer",
    "Hard-Surface Modeling",
    "PBR Texturing",
    "C.A. Aajay Kumar",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aajaykumar.art",
    title: `${siteConfig.name} — Cinematic 3D Artist & Motion Designer`,
    description: siteConfig.bio,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-preview.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — 3D Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — 3D Artist & Motion Designer`,
    description: siteConfig.bio,
    images: ["/images/og-preview.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${cinzel.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#050505] text-[#eee] font-sans min-h-screen selection:bg-[#ff2a3b] selection:text-white relative overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
