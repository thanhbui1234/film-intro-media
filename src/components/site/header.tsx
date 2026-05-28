import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technical-stuff", label: "Technical" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Open navigation</span>
          </Button>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
              ND
            </div>
            <span className="text-lg font-semibold tracking-normal">
              Namham DP
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="size-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="size-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button className="hidden sm:inline-flex">Subscribe</Button>
        </div>
      </div>
    </header>
  );
}
