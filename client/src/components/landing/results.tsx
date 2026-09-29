import { trpc } from "../../lib/trpc";

function NumberChip({ value, gold = false }: { value: string; gold?: boolean }) {
  return (
    <span
      className={`rounded-md px-2 py-1 font-mono text-xs font-medium tracking-wider ${
        gold
          ? "bg-gold-500/15 text-gold-300"
          : "bg-night-800 text-cream-200"
      }`}
    >
      {value}
    </span>
  );
}

export function Results() {
  const { data, isLoading } = trpc.results.latest.useQuery();

  return (
    <section id="results" className="border-t border-night-800 bg-night-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Latest results
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            All six games, <span className="gold-text">one board</span>
          </h2>
          <p className="text-cream-400">
            1st, 2nd and 3rd prizes with special and consolation numbers for
            every game we cover.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-72 animate-pulse rounded-2xl border border-night-700 bg-night-850"
              />
            ))}
          {data?.map(({ game, result }) => (
            <article
              key={game.key}
              className="flex flex-col rounded-2xl border border-night-700 bg-night-900 p-5 transition-colors hover:border-gold-500/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream-50">
                    {game.name}
                  </h3>
                  <p className="text-xs text-cream-500">
                    {game.country} · Draws {game.drawDays}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    game.accent === "gold"
                      ? "bg-gold-500/15 text-gold-300"
                      : "bg-ruby-500/15 text-ruby-300"
                  }`}
                >
                  {result?.drawDate ?? "Pending"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "1st", value: result?.first },
                  { label: "2nd", value: result?.second },
                  { label: "3rd", value: result?.third },
                ].map((prize) => (
                  <div
                    key={prize.label}
                    className={`rounded-xl border px-2 py-3 text-center ${
                      prize.label === "1st"
                        ? "border-gold-500/50 bg-gold-500/10"
                        : "border-night-700 bg-night-850"
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream-500">
                      {prize.label}
                    </p>
                    <p
                      className={`mt-1 font-mono text-lg font-bold tracking-[0.14em] ${
                        prize.label === "1st" ? "text-gold-300" : "text-cream-50"
                      }`}
                    >
                      {prize.value ?? "····"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream-500">
                    Special
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {result?.special.map((n) => (
                      <NumberChip key={n} value={n} gold />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream-500">
                    Consolation
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {result?.consolation.map((n) => (
                      <NumberChip key={n} value={n} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
