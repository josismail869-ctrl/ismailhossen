import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Circle, Loader2 } from "lucide-react";
import { Link } from "wouter";

const steps = [
  { icon: CheckCircle2, label: "Read 14 files in server/billing", done: true },
  { icon: CheckCircle2, label: "Planned a 3-step refactor", done: true },
  { icon: Loader2, label: "Rewriting webhook handlers", done: false },
  { icon: Circle, label: "Running the billing test suite", done: false },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-cream-200">
            <span className="size-1.5 rounded-full bg-accent-400" />
            Membership for agentic coding and knowledge work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-8 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream-50 md:text-7xl"
        >
          Do the thinking.
          <br />
          <span className="text-accent-300">Let agents do the typing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-400"
        >
          Kimi is a calm workspace where your AI agents run coding, research,
          and writing sessions — and every result lands in a knowledge base you
          actually keep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/workspace"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-400"
          >
            Enter the workspace
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="#membership"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-cream-200 transition-colors hover:border-white/25 hover:text-cream-50"
          >
            See membership
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="relative mx-auto mt-20 max-w-3xl"
        >
          <div
            aria-hidden
            className="absolute -inset-x-12 -top-10 h-48 rounded-full bg-accent-500/20 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 text-left shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-xs text-cream-500">
                session · refactor-billing
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-2.5 py-1 text-xs font-medium text-accent-300 ring-1 ring-accent-400/30">
                <Loader2 className="size-3 animate-spin" />
                Running
              </span>
            </div>
            <div className="space-y-4 p-5">
              <ul className="space-y-2.5">
                {steps.map((step) => (
                  <li
                    key={step.label}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    <step.icon
                      className={
                        step.done
                          ? "size-4 shrink-0 text-mint-400"
                          : step.label.startsWith("Rewriting")
                            ? "size-4 shrink-0 animate-spin text-accent-300"
                            : "size-4 shrink-0 text-cream-500"
                      }
                    />
                    <span
                      className={
                        step.done ? "text-cream-400" : "text-cream-200"
                      }
                    >
                      {step.label}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="rounded-lg border border-white/5 bg-ink-950/80 p-4 font-mono text-xs leading-relaxed">
                <p className="text-rose-300/80">
                  - const handler = router.post(&quot;/webhook&quot;)
                </p>
                <p className="text-mint-400/90">
                  + const handler = stripeWebhook.post(&quot;/&quot;)
                </p>
                <p className="text-mint-400/90">
                  {"+   .use(withRetry({ attempts: 3 }))"}
                </p>
                <p className="text-cream-500">
                  &nbsp;&nbsp;// shared retry logic for every provider
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-cream-500">
                <span>kimi-k2</span>
                <span>12,408 tokens · 04:12 elapsed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
