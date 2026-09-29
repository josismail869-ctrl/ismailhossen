import { Crown, Lock } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "../../lib/trpc";

export function Predictions() {
  const { data: free } = trpc.predictions.free.useQuery();
  const { data: vip } = trpc.predictions.vipPreview.useQuery();

  return (
    <section id="predictions" className="border-t border-night-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Predictions
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Free picks daily, <span className="gold-text">VIP board for members</span>
          </h2>
          <p className="text-cream-400">
            Predictions are shared for information and entertainment only — no
            number is ever a guarantee.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {free?.map((prediction) => (
              <article
                key={`${prediction.gameKey}-${prediction.forDate}`}
                className="rounded-2xl border border-night-700 bg-night-900 p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-cream-50">
                    {prediction.gameName}
                  </h3>
                  <span className="rounded-full bg-gold-500/15 px-2.5 py-1 text-[11px] font-semibold text-gold-300">
                    FREE
                  </span>
                </div>
                <p className="mt-1 text-xs text-cream-500">For {prediction.forDate}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {prediction.numbers.map((n) => (
                    <span
                      key={n}
                      className="rounded-lg border border-gold-500/40 bg-night-850 px-3 py-2 font-mono text-base font-bold tracking-[0.18em] text-gold-300"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-cream-500">{prediction.note}</p>
              </article>
            ))}
          </div>

          <article className="relative overflow-hidden rounded-2xl border border-gold-500/40 bg-night-900 p-6 gold-ring">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-cream-50">
                VIP board
              </h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold text-night-950">
                <Crown className="h-3 w-3" aria-hidden />
                VIP
              </span>
            </div>
            <p className="mt-1 text-xs text-cream-500">
              For {vip?.forDate ?? "the next draw"} · {vip?.gamesCovered ?? 6} games ·{" "}
              {vip?.setsProvided ?? 12} sets
            </p>

            <div className="relative mt-5 rounded-xl border border-night-700 bg-night-850 p-4">
              <div className="flex flex-wrap gap-2 blur-sm select-none" aria-hidden>
                {["····", "····", "····", "····", "····", "····"].map((n, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-night-600 px-3 py-2 font-mono text-base font-bold tracking-[0.18em] text-cream-200"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-night-950/90 px-4 py-2 text-xs font-semibold text-gold-300">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  Members only
                </span>
              </div>
            </div>

            <ul className="mt-5 space-y-2.5">
              {vip?.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-sm text-cream-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden />
                  {perk}
                </li>
              ))}
            </ul>

            <Link
              href="/vip"
              className="mt-6 block rounded-lg bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400"
            >
              Unlock the VIP board
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
