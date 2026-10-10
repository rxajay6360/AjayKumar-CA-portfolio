import type { Metadata } from "next";
import { Cinzel, Inter, Syne } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";

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
    "C.A. Ajay Kumar",
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
      <body className="bg-[#070707] text-[#f2f2f2] font-sans min-h-screen selection:bg-[#ff2a3b] selection:text-white relative overflow-x-hidden">
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <symbol id="face" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="98" fill="#0d0d0d" />
              <path d="M40 200c4-40 30-52 60-52s56 12 60 52z" fill="#151515" />
              <path
                d="M52 92c-4-50 22-72 50-72s52 24 46 74c-2 30-10 58-14 66H66c-8-14-12-40-14-68z"
                fill="#1b1209"
              />
              <ellipse cx="100" cy="100" rx="38" ry="48" fill="#c98f6a" />
              <path d="M62 84c10-30 66-34 78 0-18-16-58-16-78 0z" fill="#1b1209" />
              <ellipse cx="84" cy="98" rx="6" ry="4.5" fill="#fff" />
              <ellipse cx="116" cy="98" rx="6" ry="4.5" fill="#fff" />
              <circle cx="84" cy="98" r="3" fill="#2a160a" />
              <circle cx="116" cy="98" r="3" fill="#2a160a" />
              <path
                d="M75 90q9-5 18 0M107 90q9-5 18 0"
                stroke="#1b1209"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M98 104q-3 12 2 14"
                stroke="#a46c4a"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M88 128q12 8 24 0"
                stroke="#8a3d3d"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="62" cy="106" r="2.5" fill="#ff2a3b" />
              <circle cx="138" cy="106" r="2.5" fill="#ff2a3b" />
            </symbol>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
