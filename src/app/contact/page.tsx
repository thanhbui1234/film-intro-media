import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";

import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Namham DP team. Reach out for partnerships, support, or media inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Namham DP",
    description:
      "Get in touch with the Namham DP team for partnerships, support, or media inquiries.",
    url: "https://namham-dp.com/contact",
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@namham-dp.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        type="ContactPage"
        name="Contact Namham DP"
        description="Get in touch with the Namham DP team."
        url="https://namham-dp.com/contact"
      />
      <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
        {/* Header */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-semibold sm:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              Have a question, partnership idea, or just want to say hello? We
              would love to hear from you.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Whether you are a creator looking to publish, a brand seeking
                partnerships, or a developer interested in our stack — reach
                out.
              </p>
              <Separator className="my-6" />
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 size-5 text-slate-500" />
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Send a Message</h3>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this about?" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us more..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
