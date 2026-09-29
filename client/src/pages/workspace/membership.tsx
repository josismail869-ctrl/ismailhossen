import { format } from "date-fns";
import { Check, Gem } from "lucide-react";
import { toast } from "sonner";
import { WorkspaceLayout } from "@/components/workspace/layout";
import { trpc } from "@/lib/trpc";
import { cn, formatTokens } from "@/lib/utils";

function UsageBar({
  label,
  used,
  limit,
  formatValue,
}: {
  label: string;
  used: number;
  limit: number | null;
  formatValue: (n: number) => string;
}) {
  const percent = limit ? Math.min(100, Math.round((used / limit) * 100)) : 0;
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-cream-200">{label}</span>
        <span className="font-mono text-xs text-cream-500">
          {formatValue(used)} {limit ? `/ ${formatValue(limit)}` : "· unlimited"}
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
        <div
          className={cn(
            "h-full rounded-full",
            limit ? "bg-accent-500" : "bg-mint-400"
          )}
          style={{ width: limit ? `${percent}%` : "100%" }}
        />
      </div>
    </div>
  );
}

export default function WorkspaceMembership() {
  const current = trpc.membership.current.useQuery();
  const tiers = trpc.membership.tiers.useQuery();

  return (
    <WorkspaceLayout
      title="Membership"
      subtitle="Your plan, usage, and upgrade options"
    >
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="rounded-2xl border border-accent-400/25 bg-gradient-to-b from-accent-500/12 to-ink-900 p-6 xl:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-accent-500/20 ring-1 ring-accent-400/30">
              <Gem className="size-5 text-accent-300" />
            </span>
            <div>
              <p className="text-sm text-cream-400">Current plan</p>
              <p className="font-display text-xl font-semibold text-cream-50">
                {current.data?.tierName ?? "..."}
              </p>
            </div>
          </div>
          {current.data && (
            <>
              <p className="mt-4 text-sm text-cream-400">
                Renews{" "}
                {format(new Date(current.data.renewsAt), "MMMM d, yyyy")}
              </p>
              <div className="mt-6 space-y-5">
                <UsageBar
                  label="Agent sessions"
                  used={current.data.usage.sessions.used}
                  limit={current.data.usage.sessions.limit}
                  formatValue={(n) => String(n)}
                />
                <UsageBar
                  label="Tokens"
                  used={current.data.usage.tokens.used}
                  limit={current.data.usage.tokens.limit}
                  formatValue={formatTokens}
                />
                <UsageBar
                  label="Knowledge entries"
                  used={current.data.usage.knowledge.used}
                  limit={current.data.usage.knowledge.limit}
                  formatValue={(n) => String(n)}
                />
              </div>
            </>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:col-span-2">
          {(tiers.data ?? []).map((tier) => {
            const isCurrent = tier.id === current.data?.tierId;
            return (
              <div
                key={tier.id}
                className={cn(
                  "flex flex-col rounded-2xl border p-6",
                  isCurrent
                    ? "border-accent-400/40 bg-ink-900"
                    : "border-white/8 bg-ink-900"
                )}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-semibold text-cream-50">
                    {tier.name}
                  </h2>
                  {isCurrent && (
                    <span className="rounded-full bg-accent-500/15 px-2.5 py-1 text-xs font-medium text-accent-300 ring-1 ring-accent-400/30">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-cream-400">{tier.tagline}</p>
                <p className="mt-4 font-display text-3xl font-semibold text-cream-50">
                  ${tier.priceMonthly}
                  <span className="text-sm font-normal text-cream-500">
                    {" "}
                    / month
                  </span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-cream-200"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled={isCurrent}
                  onClick={() =>
                    toast("Checkout is coming soon", {
                      description:
                        "Billing is not wired up in this demo workspace yet.",
                    })
                  }
                  className={cn(
                    "mt-6 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                    isCurrent
                      ? "cursor-default border border-white/10 text-cream-500"
                      : "bg-accent-500 text-white hover:bg-accent-400"
                  )}
                >
                  {isCurrent ? "Your plan" : `Switch to ${tier.name}`}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </WorkspaceLayout>
  );
}
