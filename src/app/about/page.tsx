import type { Metadata } from "next";
import Image from "next/image";
import { Users, Target, Zap } from "lucide-react";

import { JsonLd } from "@/components/site/json-ld";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Namham DP — our mission to empower creators and editorial teams with modern digital publishing tools.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Namham DP",
    description:
      "Learn about Namham DP — our mission to empower creators and editorial teams.",
    url: "https://film-intro-media.vercel.app/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Editorial First",
    description:
      "We build tools that put content quality and publishing speed at the center of every workflow.",
  },
  {
    icon: Users,
    title: "Creator Focused",
    description:
      "From solo writers to full newsrooms, our platform scales with your team and audience.",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description:
      "Every page loads fast, ranks well, and delivers a smooth reading experience on any device.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="AboutPage"
        name="About Namham DP"
        description="Learn about Namham DP — our mission to empower creators and editorial teams."
        url="https://film-intro-media.vercel.app/about"
      />
      <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Team collaboration"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              About Namham DP
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              We are building the next generation of digital publishing tools —
              fast, accessible, and designed for modern editorial teams and
              independent creators.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Namham DP exists to remove friction from digital publishing. We
              believe every story deserves a fast, beautiful home on the web —
              without requiring a team of engineers to build it.
            </p>
          </div>
          <Separator className="mx-auto my-12 max-w-md" />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <value.icon className="size-8 text-slate-700" />
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold">The Team</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              A small, focused group of engineers, designers, and editorial
              professionals who understand what it takes to ship content at
              scale. We have shipped products used by newsrooms, indie creators,
              and media startups across the globe.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
