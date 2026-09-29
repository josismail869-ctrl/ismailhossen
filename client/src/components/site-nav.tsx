import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Logo } from "./logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#membership", label: "Membership" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Kimi home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream-400 transition-colors hover:text-cream-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/workspace"
          className="inline-flex items-center gap-1.5 rounded-full bg-cream-50 px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-200"
        >
          Enter workspace
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </header>
  );
}
