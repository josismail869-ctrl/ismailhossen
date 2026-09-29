import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-accent-400/25 bg-gradient-to-b from-accent-500/15 to-ink-900 px-8 py-16 text-center md:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/25 blur-3xl"
        />
        <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream-50 md:text-5xl">
          Start thinking with agents today
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-cream-400">
          The workspace is open. Walk through a live demo session, then pick
          the membership that fits.
        </p>
        <Link
          href="/workspace"
          className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-200"
        >
          Enter the workspace
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </section>
  );
}
