import { Link } from "wouter";
import { Logo } from "./logo";

const links = [
  { href: "/#results", label: "Results" },
  { href: "/#predictions", label: "Predictions" },
  { href: "/#posts", label: "Daily posts" },
  { href: "/#plans", label: "Membership" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-night-700/80 bg-night-950/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="4D Results home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-400 transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/vip"
          className="rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400"
        >
          Join VIP
        </Link>
      </div>
    </header>
  );
}
