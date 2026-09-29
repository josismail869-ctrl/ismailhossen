import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { MEMBERSHIP_TIERS } from "@shared/const";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="membership" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-mono text-sm text-accent-300">Membership</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream-50 md:text-5xl">
          Pick the pace that fits your work
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-cream-400">
          Every tier includes the full workspace. You are choosing how much
          agent time and memory you want behind it.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {MEMBERSHIP_TIERS.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={cn(
              "relative flex flex-col rounded-2xl border p-7",
              tier.highlighted
                ? "border-accent-400/40 bg-gradient-to-b from-accent-500/12 to-ink-900"
                : "border-white/8 bg-ink-900"
            )}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3 py-1 text-xs font-medium text-white">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold text-cream-50">
              {tier.name}
            </h3>
            <p className="mt-1 text-sm text-cream-400">{tier.tagline}</p>
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="font-display text-5xl font-semibold tracking-tight text-cream-50">
                ${tier.priceMonthly}
              </span>
              <span className="text-sm text-cream-500">/ month</span>
            </div>
            <ul className="mt-7 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent-300" />
                  <span className="text-cream-200">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/workspace"
              className={cn(
                "mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                tier.highlighted
                  ? "bg-accent-500 text-white hover:bg-accent-400"
                  : "border border-white/10 text-cream-200 hover:border-white/25 hover:text-cream-50"
              )}
            >
              {tier.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
