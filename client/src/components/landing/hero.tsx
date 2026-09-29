import { ArrowRight, Trophy } from "lucide-react";
import { trpc } from "../../lib/trpc";

export function Hero() {
  const { data } = trpc.results.latest.useQuery();
  const featured = data?.[0];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 10%, rgb(212 160 23 / 0.12) 0%, transparent 60%), radial-gradient(40% 40% at 15% 80%, rgb(211 47 47 / 0.08) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
        <div className="space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
            <Trophy className="h-3.5 w-3.5" aria-hidden />
            Live draw coverage · MY &amp; SG
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Every 4D result.
            <br />
            <span className="gold-text">One golden board.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-cream-400 sm:text-lg">
            Daily results for Sports Toto, Magnum 4D, Da Ma Cai, Singapore
            Pools, STC 4D and 88 Group — plus free predictions and a VIP board
            for members who want the full picture.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400"
            >
              See latest results
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#predictions"
              className="inline-flex items-center gap-2 rounded-lg border border-night-600 bg-night-850 px-5 py-3 text-sm font-semibold text-cream-50 transition-colors hover:border-gold-500/50 hover:text-gold-300"
            >
              Free predictions
            </a>
          </div>
          <dl className="flex flex-wrap gap-8 pt-2">
            {[
              ["6", "games covered"],
              ["3×", "draws weekly"],
              ["Daily", "posts & picks"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-bold text-gold-400">{value}</dd>
                <dd className="text-xs uppercase tracking-[0.14em] text-cream-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-gold-500/30 bg-night-900 p-6 gold-ring sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                Latest draw
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold text-cream-50">
                {featured?.game.name ?? "Sports Toto"}
              </h2>
            </div>
            <span className="rounded-full border border-night-600 bg-night-850 px-3 py-1 text-xs font-medium text-cream-400">
              {featured?.result?.drawDate ?? "—"}
            </span>
          </div>
          <div className="mt-6 space-y-4">
            {[
              { label: "1st Prize", value: featured?.result?.first, big: true },
              { label: "2nd Prize", value: featured?.result?.second, big: false },
              { label: "3rd Prize", value: featured?.result?.third, big: false },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl border border-night-700 bg-night-850 px-4 py-3"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-500">
                  {row.label}
                </span>
                <span
                  className={`font-mono font-bold tracking-[0.2em] ${
                    row.big ? "text-2xl text-gold-300" : "text-xl text-cream-50"
                  }`}
                >
                  {row.value ?? "····"}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-cream-500">
            Results are published for informational purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}
