import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Kimi Agent Membership?",
    answer:
      "A membership workspace for people who build with AI agents. You get organized agent sessions, a persistent knowledge base, and review tools in one calm place.",
  },
  {
    question: "Do I need to bring my own API keys?",
    answer:
      "No. Sessions run on models we manage, and your membership covers usage up to your plan limits. Studio plans can connect custom agents over the API.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Plans are month to month, and your knowledge base stays exportable forever, even after you cancel.",
  },
  {
    question: "Which agents are included?",
    answer:
      "Coding, research, review, and writing agents. Each session runs in its own thread with a full trace you can revisit later.",
  },
  {
    question: "Is my code private?",
    answer:
      "Yes. Sessions run in isolated environments, and nothing from your workspace is used to train models.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="font-mono text-sm text-accent-300">Questions</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream-50 md:text-5xl">
          Asked often
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion.Root type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${index}`}
              className="rounded-xl border border-white/8 bg-ink-900 px-5"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left">
                  <span className="font-medium text-cream-50">
                    {faq.question}
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-cream-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content overflow-hidden">
                <p className="pb-5 leading-relaxed text-cream-400">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </motion.div>
    </section>
  );
}
