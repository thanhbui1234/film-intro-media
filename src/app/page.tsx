import type { Metadata } from "next";
import { MediaHome } from "@/components/site/media-home";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover stories, video, and creator updates on Namham DP — a modern media platform for digital publishing.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        type="WebPage"
        name="Namham DP — Home"
        description="Discover stories, video, and creator updates on Namham DP."
        url="https://namham-dp.com"
      />
      <MediaHome />
    </>
  );
}
