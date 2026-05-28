import type { Metadata } from "next";
import { Code2, Server, Layers, Gauge, Shield, Workflow } from "lucide-react";

import { JsonLd } from "@/components/site/json-ld";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Technical Stack",
  description:
    "Explore the technical architecture behind Namham DP — Next.js 16, React Server Components, Tailwind CSS 4, and modern web performance.",
  alternates: {
    canonical: "/technical-stuff",
  },
  openGraph: {
    title: "Technical Stack | Namham DP",
    description:
      "Explore the technical architecture behind Namham DP — Next.js 16, React Server Components, and modern web performance.",
    url: "https://namham-dp.com/technical-stuff",
  },
};

const stack = [
  {
    icon: Layers,
    name: "Next.js 16",
    description:
      "App Router with React Server Components for optimal SEO and streaming. Turbopack for instant dev feedback.",
    tags: ["RSC", "Streaming", "Turbopack"],
  },
  {
    icon: Code2,
    name: "React 19",
    description:
      "Latest React with Server Components, Actions, and concurrent features for smooth user interactions.",
    tags: ["Server Components", "Actions", "Concurrent"],
  },
  {
    icon: Gauge,
    name: "Tailwind CSS 4",
    description:
      "Utility-first CSS with CSS variables for theming, zero-runtime overhead, and automatic tree-shaking.",
    tags: ["CSS Variables", "Zero Runtime", "PostCSS"],
  },
  {
    icon: Server,
    name: "Server-Side Rendering",
    description:
      "Content rendered on the server for instant FCP, better SEO indexing, and reduced client JavaScript.",
    tags: ["SEO", "Performance", "Accessibility"],
  },
  {
    icon: Shield,
    name: "Base UI + shadcn/ui",
    description:
      "Accessible headless primitives styled with CVA variants. WCAG-compliant components out of the box.",
    tags: ["Accessibility", "CVA", "Headless"],
  },
  {
    icon: Workflow,
    name: "Framer Motion",
    description:
      "Declarative animations with GPU-accelerated transforms. Client islands keep the bundle minimal.",
    tags: ["GPU Accelerated", "Client Islands", "60fps"],
  },
];

const principles = [
  {
    title: "Server First",
    description:
      "All content renders as Server Components by default. Client JavaScript is only shipped for interactive elements like animations and forms.",
  },
  {
    title: "Progressive Enhancement",
    description:
      "Core content works without JavaScript. Animations and interactions layer on top without blocking the critical rendering path.",
  },
  {
    title: "SEO by Default",
    description:
      "Structured data (JSON-LD), semantic HTML, Open Graph metadata, and dynamic sitemaps are built into the architecture — not bolted on.",
  },
  {
    title: "Performance Budget",
    description:
      "Target 95+ Lighthouse score. Images use next/image for automatic optimization. Fonts are self-hosted to eliminate render-blocking requests.",
  },
];

export default function TechnicalStuffPage() {
  return (
    <>
      <JsonLd
        type="WebPage"
        name="Technical Stack — Namham DP"
        description="Explore the technical architecture behind Namham DP."
        url="https://namham-dp.com/technical-stuff"
      />
      <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
        {/* Header */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <Badge className="mb-4 bg-cyan-400 text-slate-950">
              <Code2 className="mr-1 size-3.5" />
              Under the Hood
            </Badge>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Technical Stack
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              A modern, performance-focused architecture built for editorial
              speed and SEO excellence.
            </p>
          </div>
        </section>

        {/* Stack Grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Core Technologies</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Every technology choice is driven by performance, developer
            experience, and content delivery speed.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <tech.icon className="size-7 text-slate-700" />
                <h3 className="mt-3 text-lg font-semibold">{tech.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {tech.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tech.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mx-auto max-w-7xl" />

        {/* Architecture Principles */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Architecture Principles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
