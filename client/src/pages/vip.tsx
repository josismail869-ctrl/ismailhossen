import { BadgeCheck, Copy, Landmark, Smartphone } from "lucide-react";
import { toast } from "sonner";
import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";
import { trpc } from "../lib/trpc";

const steps = [
  "Choose a membership plan that fits you.",
  "Send the exact plan fee to one of the payment accounts below.",
  "Note your transaction ID and the account you sent to.",
  "Message our helpline with the transaction ID — an admin reviews and activates your membership, usually the same day.",
];

export default function Vip() {
  const { data } = trpc.payments.methods.useQuery();
  const { data: plans } = trpc.plans.list.useQuery();

  const copy = (value: string, label: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => toast.success(`${label} copied`))
      .catch(() => toast.error("Copy failed — please copy manually"));
  };

  return (
    <div className="min-h-screen bg-night-950">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            VIP membership
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Join <span className="gold-text">VIP</span> in four simple steps
          </h1>
          <p className="text-cream-400">
            Membership is activated manually after a quick deposit review. No
            card details are ever collected on this website.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="rounded-2xl border border-night-700 bg-night-900 p-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 font-display text-sm font-bold text-night-950">
                {index + 1}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-cream-200">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <section className="rounded-2xl border border-gold-500/40 bg-night-900 p-6 gold-ring">
            <h2 className="font-display text-xl font-semibold text-cream-50">
              Payment accounts
            </h2>
            <p className="mt-1 text-sm text-cream-500">
              Beneficiary:{" "}
              <span className="font-semibold text-gold-300">{data?.beneficiary ?? "—"}</span>
            </p>
            <div className="mt-5 space-y-3">
              {data?.methods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-night-700 bg-night-850 px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/40 bg-gold-500/10 text-gold-300">
                      {method.id === "mybank" ? (
                        <Landmark className="h-5 w-5" aria-hidden />
                      ) : (
                        <Smartphone className="h-5 w-5" aria-hidden />
                      )}
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-cream-50">
                        {method.name}
                      </p>
                      <p className="font-mono text-sm tracking-wider text-gold-300">
                        {method.account}
                      </p>
                      <p className="text-xs text-cream-500">{method.note}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copy(method.account, `${method.name} account`)}
                    aria-label={`Copy ${method.name} account number`}
                    className="rounded-lg border border-night-600 p-2 text-cream-400 transition-colors hover:border-gold-500/50 hover:text-gold-300"
                  >
                    <Copy className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-xl border border-night-700 bg-night-850 p-4 text-xs leading-relaxed text-cream-500">
              Membership fees pay for informational content only. This website
              does not accept bets, sell lottery tickets or process any
              gambling-related transaction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-cream-50">
              Plans at a glance
            </h2>
            {plans
              ?.filter((plan) => plan.priceMyr > 0)
              .map((plan) => (
                <div
                  key={plan.id}
                  className={`flex items-center justify-between rounded-xl border px-5 py-4 ${
                    plan.highlighted
                      ? "border-gold-500/50 bg-gold-500/10"
                      : "border-night-700 bg-night-900"
                  }`}
                >
                  <div>
                    <p className="flex items-center gap-2 font-display text-base font-semibold text-cream-50">
                      {plan.name}
                      {plan.highlighted && (
                        <BadgeCheck className="h-4 w-4 text-gold-400" aria-hidden />
                      )}
                    </p>
                    <p className="text-xs text-cream-500">{plan.tagline}</p>
                  </div>
                  <p className="font-display text-xl font-bold text-gold-400">
                    RM {plan.priceMyr}
                    <span className="ml-1 text-xs font-normal text-cream-500">/mo</span>
                  </p>
                </div>
              ))}
            <a
              href="/#contact"
              className="block rounded-lg bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400"
            >
              Send your transaction ID via helpline
            </a>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
