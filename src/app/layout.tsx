import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://namham-dp.com"),
  title: {
    default: "Namham DP | Modern Media Platform",
    template: "%s | Namham DP",
  },
  description:
    "A modern media platform starter built with Next.js, shadcn/ui, Tailwind CSS, and framer-motion.",
  applicationName: "Namham DP",
  keywords: [
    "media platform",
    "digital publishing",
    "Next.js",
    "shadcn/ui",
    "framer-motion",
  ],
  authors: [{ name: "Namham DP" }],
  creator: "Namham DP",
  publisher: "Namham DP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://namham-dp.com",
    siteName: "Namham DP",
    title: "Namham DP | Modern Media Platform",
    description:
      "A modern media platform starter built with Next.js, shadcn/ui, Tailwind CSS, and framer-motion.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Editorial workspace with printed media and digital devices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namham DP | Modern Media Platform",
    description:
      "A modern media platform starter built with Next.js, shadcn/ui, Tailwind CSS, and framer-motion.",
    images: [
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
