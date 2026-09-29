import {
  ArrowLeft,
  BookOpen,
  Bot,
  Gem,
  LayoutDashboard,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link, useRoute } from "wouter";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/workspace", label: "Overview", icon: LayoutDashboard },
  { href: "/workspace/sessions", label: "Sessions", icon: Bot },
  { href: "/workspace/knowledge", label: "Knowledge", icon: BookOpen },
  { href: "/workspace/membership", label: "Membership", icon: Gem },
];

function NavLink({ item }: { item: (typeof navItems)[number] }) {
  const [active] = useRoute(item.href);
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-accent-500/15 font-medium text-accent-200 ring-1 ring-accent-400/25"
          : "text-cream-400 hover:bg-white/5 hover:text-cream-50"
      )}
    >
      <item.icon className="size-4" />
      {item.label}
    </Link>
  );
}

export function WorkspaceLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-white/5 bg-ink-900/60 lg:flex">
        <div className="border-b border-white/5 p-5">
          <Link href="/" aria-label="Back to site">
            <Logo />
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-3" aria-label="Workspace">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
        <div className="space-y-4 border-t border-white/5 p-4">
          <div>
            <div className="flex items-center justify-between text-xs text-cream-400">
              <span>Tokens this cycle</span>
              <span className="font-mono">68%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[68%] rounded-full bg-accent-500" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-accent-500/20 font-display text-sm font-semibold text-accent-200 ring-1 ring-accent-400/30">
              DM
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-cream-50">
                Demo Member
              </p>
              <p className="text-xs text-cream-500">Maker plan</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-white/5 bg-ink-950/85 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 px-6 py-4 md:px-8">
            <div>
              <h1 className="font-display text-xl font-semibold tracking-tight text-cream-50">
                {title}
              </h1>
              <p className="mt-0.5 text-sm text-cream-500">{subtitle}</p>
            </div>
            <Link
              href="/"
              className="hidden items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-cream-200 transition-colors hover:border-white/25 hover:text-cream-50 sm:inline-flex"
            >
              <ArrowLeft className="size-4" />
              Back to site
            </Link>
          </div>
          <nav
            className="flex gap-1 overflow-x-auto px-4 pb-3 lg:hidden"
            aria-label="Workspace"
          >
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </header>
        <main className="px-6 py-8 md:px-8">{children}</main>
      </div>
    </div>
  );
}
