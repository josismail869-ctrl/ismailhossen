import { formatDistanceToNow } from "date-fns";
import { Code2, FileDiff, PenLine, Search } from "lucide-react";
import { useState } from "react";
import { StatusBadge } from "@/components/status-badge";
import { WorkspaceLayout } from "@/components/workspace/layout";
import { trpc } from "@/lib/trpc";
import { cn, formatTokens } from "@/lib/utils";

const agentIcons: Record<string, typeof Code2> = {
  coding: Code2,
  research: Search,
  review: FileDiff,
  writing: PenLine,
};

const filters = [
  { id: "all", label: "All" },
  { id: "running", label: "Running" },
  { id: "completed", label: "Completed" },
  { id: "queued", label: "Queued" },
  { id: "failed", label: "Failed" },
] as const;

export default function WorkspaceSessions() {
  const [status, setStatus] = useState<(typeof filters)[number]["id"]>("all");
  const { data, isLoading } = trpc.workspace.sessions.useQuery({ status });

  return (
    <WorkspaceLayout
      title="Sessions"
      subtitle="Every agent run, traceable from start to finish"
    >
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setStatus(filter.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-colors",
              status === filter.id
                ? "bg-accent-500/15 font-medium text-accent-200 ring-1 ring-accent-400/30"
                : "border border-white/10 text-cream-400 hover:border-white/25 hover:text-cream-50"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/8 bg-ink-900">
        {isLoading || !data ? (
          <div className="space-y-3 p-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 animate-pulse rounded-xl bg-white/5" />
            ))}
          </div>
        ) : data.length === 0 ? (
          <p className="px-5 py-12 text-center text-sm text-cream-500">
            No sessions with this status yet.
          </p>
        ) : (
          <ul className="divide-y divide-white/5">
            {data.map((session) => {
              const Icon = agentIcons[session.agent] ?? Code2;
              return (
                <li key={session.id} className="flex items-start gap-4 px-5 py-4">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Icon className="size-4 text-cream-200" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <p className="text-sm font-medium text-cream-50">
                        {session.title}
                      </p>
                      <StatusBadge status={session.status} />
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-cream-400">
                      {session.summary}
                    </p>
                    <p className="mt-1.5 font-mono text-xs text-cream-500">
                      {session.model} · {formatTokens(session.tokens)} tokens ·{" "}
                      {session.durationMin}m ·{" "}
                      {formatDistanceToNow(new Date(session.startedAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </WorkspaceLayout>
  );
}
