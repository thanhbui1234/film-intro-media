import Image from "next/image";
import {
  ArrowUpRight,
  Bookmark,
  Play,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MotionArticle, MotionDiv } from "@/components/site/motion-wrapper";
import { Globe } from "../ui/globe";

const featuredStories = [
  {
    title: "Inside the independent newsroom stack for fast editorial teams",
    category: "Publishing",
    time: "8 min read",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Short-form video calendars that keep production moving",
    category: "Video",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Audience dashboards for creators, editors, and sponsors",
    category: "Analytics",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
];

const metrics = [
  ["42K", "monthly readers"],
  ["18", "active channels"],
  ["94%", "page speed score"],
];

export function MediaHome() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
          alt="Editorial media studio"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/58" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-end gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pb-8"
          >
            <Badge className="mb-5 bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Sparkles className="mr-1 size-3.5" />
              New media base
            </Badge>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Publish stories, video, and creator updates from one polished base.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A production-ready Next.js starter with SEO metadata, shadcn/ui,
              Tailwind CSS, and motion-ready sections for a modern media brand.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-slate-950 hover:bg-cyan-100"
              >
                Start reading
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <Play className="size-4" />
                Watch brief
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="mb-2 grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {metrics.map(([value, label]) => (
              <div
                key={label}
                className="rounded-md border border-white/20 bg-white/12 p-5 backdrop-blur"
              >
                <div className="text-3xl font-semibold">{value}</div>
                <div className="mt-1 text-sm text-slate-200">{label}</div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </section>
      <Globe />
      {/* Featured Stories */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="secondary" className="mb-3">
              <TrendingUp className="mr-1 size-3.5" />
              Featured
            </Badge>
            <h2 className="text-3xl font-semibold tracking-normal">
              Editorial picks
            </h2>
          </div>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input placeholder="Search articles, videos, reports" />
            <Button size="icon">
              <Search className="size-4" />
              <span className="sr-only">Search media</span>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredStories.map((story, index) => (
            <MotionArticle
              key={story.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Card className="h-full overflow-hidden rounded-lg border-slate-200 bg-white shadow-none transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{story.category}</Badge>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="size-4" />
                      <span className="sr-only">Save story</span>
                    </Button>
                  </div>
                  <CardTitle className="text-xl leading-7 tracking-normal">
                    {story.title}
                  </CardTitle>
                  <CardDescription>{story.time}</CardDescription>
                </CardHeader>
              </Card>
            </MotionArticle>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal">
              Built for editorial velocity
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Use this as a base for a media site, creator publication, digital
              magazine, or content hub with clean defaults and room to scale.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["SEO metadata", "Responsive layout", "Motion sections", "UI kit"].map(
              (item) => (
                <div key={item} className="rounded-md border border-slate-200 p-5">
                  <h3 className="font-semibold">{item}</h3>
                  <Separator className="my-3" />
                  <p className="text-sm leading-6 text-slate-600">
                    Ready to customize without changing the project structure.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
