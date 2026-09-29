import { Facebook, Share2, Twitter } from "lucide-react";
import { useState } from "react";
import { SOCIALS } from "../../../../shared/siteConfig";
import { trpc } from "../../lib/trpc";

const filters = [
  { key: "all", label: "All games" },
  { key: "grand-dragon-9lotto", label: "Grand Dragon & 9 Lotto" },
  { key: "magnum", label: "Magnum 4D" },
  { key: "sports-toto", label: "Sports Toto" },
  { key: "singapore-pools", label: "Singapore Pools" },
];

function shareLinks(title: string) {
  const url = encodeURIComponent(
    typeof window !== "undefined" ? window.location.origin : ""
  );
  const text = encodeURIComponent(title);
  return [
    {
      label: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      label: "X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    },
    {
      label: "WhatsApp",
      icon: Share2,
      href: `https://wa.me/?text=${text}%20${url}`,
    },
  ];
}

export function Posts() {
  const [game, setGame] = useState("all");
  const { data: posts, isLoading } = trpc.posts.published.useQuery({ game });

  return (
    <section id="posts" className="border-t border-night-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Daily posts
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Fresh posts, <span className="gold-text">every draw day</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter posts by game">
            {filters.map((filter) => (
              <button
                key={filter.key}
                role="tab"
                aria-selected={game === filter.key}
                onClick={() => setGame(filter.key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  game === filter.key
                    ? "bg-gold-500 text-night-950"
                    : "border border-night-600 bg-night-850 text-cream-400 hover:border-gold-500/50 hover:text-gold-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {isLoading && (
            <div className="h-32 animate-pulse rounded-2xl border border-night-700 bg-night-850" />
          )}
          {posts?.length === 0 && (
            <p className="rounded-2xl border border-night-700 bg-night-900 p-8 text-center text-sm text-cream-400">
              No public posts for this game yet — check back on the next draw day.
            </p>
          )}
          {posts?.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-night-700 bg-night-900 p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-semibold text-gold-300">
                  {post.gameName}
                </span>
                <span className="text-xs text-cream-500">{post.postDate}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-cream-50">
                {post.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream-400">
                {post.content}
              </p>
              {post.numbers.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.numbers.map((n) => (
                    <span
                      key={n}
                      className="rounded-lg border border-gold-500/40 bg-night-850 px-3 py-2 font-mono text-base font-bold tracking-[0.18em] text-gold-300"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-5 flex items-center gap-2 border-t border-night-700 pt-4">
                <span className="mr-1 text-xs font-medium text-cream-500">Share:</span>
                {shareLinks(post.title).map((share) => (
                  <a
                    key={share.label}
                    href={share.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Share on ${share.label}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-night-600 px-3 py-1.5 text-xs font-medium text-cream-400 transition-colors hover:border-gold-500/50 hover:text-gold-300"
                  >
                    <share.icon className="h-3.5 w-3.5" aria-hidden />
                    {share.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-cream-500">
          Follow daily updates on{" "}
          <a
            href={SOCIALS.facebookPage}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gold-300 hover:text-gold-200"
          >
            Facebook
          </a>{" "}
          and{" "}
          <a
            href={SOCIALS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gold-300 hover:text-gold-200"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
}
