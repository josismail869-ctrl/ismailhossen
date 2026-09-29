import { Check, Crown } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "../../lib/trpc";

export function Plans() {
  const { data: plans } = trpc.plans.list.useQuery();

  return (
    <section id="plans" className="border-t border-night-800 bg-night-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Membership
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Pick your <span className="gold-text">membership</span>
          </h2>
          <p className="text-cream-400">
            Start free. Upgrade when you want the full VIP board and 1st prize
            calculation notes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {plans?.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-gold-500/60 bg-night-900 gold-ring"
                  : "border-night-700 bg-night-900"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold text-night-950">
                  <Crown className="h-3 w-3" aria-hidden />
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-cream-50">{plan.name}</h3>
              <p className="mt-1 text-sm text-cream-500">{plan.tagline}</p>
              <p className="mt-4">
                <span className="font-display text-3xl font-bold text-gold-400">
                  {plan.priceMyr === 0 ? "Free" : `RM ${plan.priceMyr}`}
                </span>
                {plan.priceMyr > 0 && (
                  <span className="ml-1.5 text-xs text-cream-500">{plan.period}</span>
                )}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-cream-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/vip"
                className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-gold-500 text-night-950 hover:bg-gold-400"
                    : "border border-night-600 bg-night-850 text-cream-50 hover:border-gold-500/50 hover:text-gold-300"
                }`}
              >
                {plan.priceMyr === 0 ? "Start free" : `Choose ${plan.name}`}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
