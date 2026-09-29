import { APP_TAGLINE } from "@shared/const";
import { Logo } from "./logo";

const columns = [
  {
    title: "Product",
    links: ["Workspace", "Agent sessions", "Knowledge base", "Membership"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Changelog", "Status", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-400">
              {APP_TAGLINE}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-cream-50">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-cream-400 transition-colors hover:text-cream-50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-sm text-cream-500 sm:flex-row sm:items-center">
          <p>© 2026 Kimi Agent Membership</p>
          <p className="font-mono text-xs">Built for people who build with agents</p>
        </div>
      </div>
    </footer>
  );
}
