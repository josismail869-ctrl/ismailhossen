import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  FileDiff,
  Gauge,
  Search,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Agent sessions, organized",
    description:
      "Every coding, research, and writing session runs in its own traceable thread. Pause, resume, or hand off without losing context.",
    span: "md:col-span-2",
    visual: (
      <div className="mt-6 space-y-2">
        {[
          { name: "Refactor billing webhooks", state: "Running", tone: "text-accent-300" },
          { name: "Research: MySQL vector indexes", state: "Done", tone: "text-mint-400" },
          { name: "Draft launch announcement", state: "Done", tone: "text-mint-400" },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-ink-950/60 px-4 py-2.5"
          >
            <span className="text-sm text-cream-200">{row.name}</span>
            <span className={`font-mono text-xs ${row.tone}`}>{row.state}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "A knowledge base that remembers",
    description:
      "What your agents learn becomes searchable notes, snippets, and collections — not chat history you never read again.",
    span: "",
    visual: (
      <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/5 bg-ink-950/60 px-4 py-2.5 text-sm text-cream-500">
        <Search className="size-4" />
        agent prompting checklist
      </div>
    ),
  },
  {
    icon: FileDiff,
    title: "Review before it ships",
    description:
      "Every diff waits for your approval. Read the change, ask for revisions, then let it land.",
    span: "",
    visual: (
      <div className="mt-6 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-400/10 px-3 py-1.5 text-xs font-medium text-mint-400 ring-1 ring-mint-400/25">
          <ShieldCheck className="size-3.5" />
          Approved
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-cream-400">
          Request changes
        </span>
      </div>
    ),
  },
  {
    icon: Gauge,
    title: "Usage you can actually read",
    description:
      "Tokens, sessions, and limits in plain language. No surprise meters, no fine print.",
    span: "",
    visual: (
      <div className="mt-6 flex h-16 items-end gap-1.5">
        {[35, 55, 30, 45, 70, 50, 85, 60, 75, 40, 65, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-accent-500/40"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="font-mono text-sm text-accent-300">The workspace</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream-50 md:text-5xl">
          Everything an agent does, somewhere you can find it
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-cream-400">
          Agentic work produces a lot of output. Kimi keeps the sessions, the
          knowledge, and the decisions in one calm place.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`rounded-2xl border border-white/8 bg-ink-900 p-6 ${feature.span}`}
          >
            <div className="grid size-10 place-items-center rounded-lg bg-accent-500/15 ring-1 ring-accent-400/25">
              <feature.icon className="size-5 text-accent-300" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-cream-50">
              {feature.title}
            </h3>
            <p className="mt-2 leading-relaxed text-cream-400">
              {feature.description}
            </p>
            {feature.visual}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
