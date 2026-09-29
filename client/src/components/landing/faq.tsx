import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this an official lottery operator website?",
    answer:
      "No. 4D Results is an independent informational service. We are not affiliated with Sports Toto, Magnum, Da Ma Cai, Singapore Pools or any other operator, and we do not sell lottery tickets or accept bets of any kind.",
  },
  {
    question: "Are the predictions guaranteed to win?",
    answer:
      "No prediction can ever guarantee a lottery outcome. Our free and VIP picks are analysis shared for information and entertainment only. Always play responsibly and never spend more than you can afford to lose.",
  },
  {
    question: "How does VIP membership work?",
    answer:
      "Choose a plan on the membership page, send the membership fee through one of the listed payment methods (bKash, Nagad or MyBank), then share your transaction ID with our helpline. An admin reviews and activates your membership manually — usually the same day.",
  },
  {
    question: "Which games do you cover?",
    answer:
      "We cover Sports Toto, Magnum 4D, Da Ma Cai, Singapore Pools, STC 4D and 88 Group, with results, free predictions and daily posts for each draw.",
  },
  {
    question: "Who can use this website?",
    answer:
      "This service is strictly for adults aged 18 and above. All content is informational. If lottery play stops being fun, please seek help and take a break.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-night-800">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">FAQ</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Honest answers, <span className="gold-text">no fine print</span>
          </h2>
        </div>
        <Accordion.Root type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-night-700 bg-night-900"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-cream-50 transition-colors hover:text-gold-300">
                  {faq.question}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-gold-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-cream-400">{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
