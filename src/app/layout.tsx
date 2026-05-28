import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://film-intro-media.vercel.app"),
  title: {
    default: "Namham DP | Modern Media Platform",
    template: "%s | Namham DP",
  },
  description:
    "A modern media platform for digital publishing, video, and creator content. Built with Next.js, shadcn/ui, and Tailwind CSS.",
  applicationName: "Namham DP",
  keywords: [
    "media platform",
    "digital publishing",
    "creator content",
    "video publishing",
    "editorial platform",
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
      "A modern media platform for digital publishing, video, and creator content.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namham DP | Modern Media Platform",
    description:
      "A modern media platform for digital publishing, video, and creator content.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className="min-h-full">
        <JsonLd type="WebSite" />
        <JsonLd type="Organization" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
