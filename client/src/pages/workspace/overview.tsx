import { formatDistanceToNow } from "date-fns";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Gauge,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { StatusBadge } from "@/components/status-badge";
import { WorkspaceLayout } from "@/components/workspace/layout";
import { trpc } from "@/lib/trpc";
import { formatTokens } from "@/lib/utils";

function StatCard({
  icon: Icon,
  label,
  value,
  delta,
}: {
  icon: typeof Bot;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-ink-900 p-5">
      <div className="flex items-center justify-between">
        <span className="grid size-9 place-items-center rounded-lg bg-accent-500/15 ring-1 ring-accent-400/25">
          <Icon className="size-4 text-accent-300" />
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-mint-400">
          <ArrowUpRight className="size-3.5" />
          {delta}
        </span>
      </div>
      <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream-50">
        {value}
      </p>
      <p className="mt-1 text-sm text-cream-500">{label}</p>
    </div>
  );
}

export default function WorkspaceOverview() {
  const { data, isLoading } = trpc.workspace.overview.useQuery();

  return (
    <WorkspaceLayout
      title="Overview"
      subtitle="Your agents, knowledge, and usage at a glance"
    >
      {isLoading || !data ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-32 animate-pulse rounded-2xl border border-white/8 bg-ink-900"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={Bot}
              label="Sessions this month"
              value={String(data.stats.sessionsThisMonth.value)}
              delta={data.stats.sessionsThisMonth.delta}
            />
            <StatCard
              icon={CheckCircle2}
              label="Tasks completed"
              value={String(data.stats.tasksCompleted.value)}
              delta={data.stats.tasksCompleted.delta}
            />
            <StatCard
              icon={Gauge}
              label="Tokens used"
              value={formatTokens(data.stats.tokensUsed.value)}
              delta={data.stats.tokensUsed.delta}
            />
            <StatCard
              icon={BookOpen}
              label="Knowledge entries"
              value={String(data.stats.knowledgeCount.value)}
              delta={data.stats.knowledgeCount.delta}
            />
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-ink-900 p-5 xl:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-lg font-semibold text-cream-50">
                    Agent activity
                  </h2>
                  <p className="text-sm text-cream-500">
                    Sessions per day, last 14 days
                  </p>
                </div>
                <Activity className="size-4 text-cream-500" />
              </div>
              <div className="mt-5 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data.usageSeries}>
                    <defs>
                      <linearGradient
                        id="sessionsGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8b7ff5"
                          stopOpacity={0.35}
                        />
                        <stop offset="100%" stopColor="#8b7ff5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      stroke="rgba(255,255,255,0.06)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="day"
                      tick={{ fill: "#8b8a94", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      interval={2}
                    />
                    <YAxis
                      tick={{ fill: "#8b8a94", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      width={28}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#12121a",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                      labelStyle={{ color: "#f4f2ec" }}
                      cursor={{ stroke: "rgba(255,255,255,0.15)" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="sessions"
                      stroke="#8b7ff5"
                      strokeWidth={2}
                      fill="url(#sessionsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-ink-900 p-5">
              <h2 className="font-display text-lg font-semibold text-cream-50">
                Recent activity
              </h2>
              <ul className="mt-4 space-y-4">
                {data.activity.map((event) => (
                  <li key={event.id} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-400" />
                    <div className="min-w-0">
                      <p className="text-sm leading-snug text-cream-200">
                        <span className="text-cream-400">{event.actor} </span>
                        {event.action}{" "}
                        <span className="font-medium text-cream-50">
                          {event.target}
                        </span>
                      </p>
                      <p className="mt-0.5 text-xs text-cream-500">
                        {formatDistanceToNow(new Date(event.at), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-ink-900">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-cream-50">
                Recent sessions
              </h2>
              <a
                href="/workspace/sessions"
                className="text-sm text-accent-300 transition-colors hover:text-accent-200"
              >
                View all
              </a>
            </div>
            <ul className="divide-y divide-white/5">
              {data.recentSessions.map((session) => (
                <li
                  key={session.id}
                  className="flex items-center justify-between gap-4 px-5 py-3.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-cream-50">
                      {session.title}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-cream-500">
                      {session.model} · {formatTokens(session.tokens)} tokens
                    </p>
                  </div>
                  <StatusBadge status={session.status} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </WorkspaceLayout>
  );
}
