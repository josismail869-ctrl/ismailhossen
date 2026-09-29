export type AgentKind = "coding" | "research" | "review" | "writing";
export type SessionStatus = "running" | "completed" | "queued" | "failed";

export type AgentSession = {
  id: string;
  title: string;
  agent: AgentKind;
  status: SessionStatus;
  model: string;
  startedAt: string;
  durationMin: number;
  tokens: number;
  summary: string;
};

export type KnowledgeKind = "note" | "snippet" | "reference" | "collection";

export type KnowledgeEntry = {
  id: string;
  title: string;
  kind: KnowledgeKind;
  excerpt: string;
  tags: string[];
  updatedAt: string;
};

export type ActivityEvent = {
  id: string;
  actor: string;
  action: string;
  target: string;
  at: string;
};

export type UsagePoint = {
  day: string;
  sessions: number;
  tokens: number;
};

export const sessions: AgentSession[] = [
  {
    id: "ses_9f2ka1",
    title: "Refactor billing webhook handlers",
    agent: "coding",
    status: "running",
    model: "kimi-k2",
    startedAt: "2026-09-30T08:41:00Z",
    durationMin: 12,
    tokens: 18420,
    summary: "Splitting the monolithic webhook router into per-provider handlers with shared retry logic.",
  },
  {
    id: "ses_8e1jb4",
    title: "Research: vector indexes on MySQL 8.4",
    agent: "research",
    status: "completed",
    model: "kimi-k2",
    startedAt: "2026-09-30T06:15:00Z",
    durationMin: 34,
    tokens: 42110,
    summary: "Compared VECTOR index support, distance functions, and migration paths from pgvector.",
  },
  {
    id: "ses_7d0hc9",
    title: "Review PR #182: session cache",
    agent: "review",
    status: "completed",
    model: "kimi-k2",
    startedAt: "2026-09-29T21:02:00Z",
    durationMin: 9,
    tokens: 9640,
    summary: "Approved with two nits: stale-while-revalidate window and a missing eviction test.",
  },
  {
    id: "ses_6c9gd2",
    title: "Draft launch announcement",
    agent: "writing",
    status: "completed",
    model: "kimi-k2",
    startedAt: "2026-09-29T17:44:00Z",
    durationMin: 14,
    tokens: 15230,
    summary: "Three variants drafted; the calm, technical tone scored best against brand voice.",
  },
  {
    id: "ses_5b8fc7",
    title: "Migrate settings page to new form kit",
    agent: "coding",
    status: "completed",
    model: "kimi-k2",
    startedAt: "2026-09-29T14:20:00Z",
    durationMin: 47,
    tokens: 68940,
    summary: "Moved 6 forms to the shared kit, deleted 400 lines of duplicated validation.",
  },
  {
    id: "ses_4a7eb3",
    title: "Research: pricing page benchmarks",
    agent: "research",
    status: "queued",
    model: "kimi-k2",
    startedAt: "2026-09-30T09:05:00Z",
    durationMin: 0,
    tokens: 0,
    summary: "Queued behind the running billing refactor.",
  },
  {
    id: "ses_3z6da8",
    title: "Fix flaky checkout test",
    agent: "coding",
    status: "failed",
    model: "kimi-k2",
    startedAt: "2026-09-29T11:37:00Z",
    durationMin: 21,
    tokens: 27480,
    summary: "Could not reproduce the flake locally; needs a seeded CI replay to continue.",
  },
  {
    id: "ses_2y5cz5",
    title: "Summarize customer interviews",
    agent: "research",
    status: "completed",
    model: "kimi-k2",
    startedAt: "2026-09-28T19:12:00Z",
    durationMin: 18,
    tokens: 31050,
    summary: "Twelve interviews distilled into four themes: speed, trust, price, and mobile.",
  },
];

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: "kn_01",
    title: "Agent prompting checklist",
    kind: "note",
    excerpt: "Scope the task, name the files, state the done condition, and always give the agent a way to verify its own work.",
    tags: ["agents", "workflow"],
    updatedAt: "2026-09-29T15:30:00Z",
  },
  {
    id: "kn_02",
    title: "tRPC v11 link setup",
    kind: "snippet",
    excerpt: "httpBatchLink with a single /api/trpc endpoint; keep transformers off unless Date or Map crosses the wire.",
    tags: ["trpc", "typescript"],
    updatedAt: "2026-09-28T10:05:00Z",
  },
  {
    id: "kn_03",
    title: "Competitor pricing notes",
    kind: "reference",
    excerpt: "Seat-based pricing wins for teams; usage-based pricing confuses solo buyers. Hybrid with a generous floor reads best.",
    tags: ["pricing", "research"],
    updatedAt: "2026-09-27T18:42:00Z",
  },
  {
    id: "kn_04",
    title: "Launch plan — September",
    kind: "collection",
    excerpt: "Announcement draft, changelog entry, status page update, and the member email sequence in one place.",
    tags: ["launch", "planning"],
    updatedAt: "2026-09-26T09:14:00Z",
  },
  {
    id: "kn_05",
    title: "MySQL 8.4 upgrade notes",
    kind: "reference",
    excerpt: "Watch for removed query cache settings and the new default authentication plugin before flipping production.",
    tags: ["mysql", "infra"],
    updatedAt: "2026-09-25T13:58:00Z",
  },
  {
    id: "kn_06",
    title: "Diff review rubric",
    kind: "note",
    excerpt: "Correctness first, then readability, then size. Any diff over 400 lines gets split before human review.",
    tags: ["review", "quality"],
    updatedAt: "2026-09-24T16:21:00Z",
  },
  {
    id: "kn_07",
    title: "Vite middleware mode recipe",
    kind: "snippet",
    excerpt: "createViteServer with middlewareMode and appType custom, then transformIndexHtml on the catch-all route.",
    tags: ["vite", "express"],
    updatedAt: "2026-09-23T11:47:00Z",
  },
  {
    id: "kn_08",
    title: "Onboarding email drafts",
    kind: "collection",
    excerpt: "Day 0 welcome, day 2 first session nudge, day 5 knowledge base tour. Tone: calm, short, no exclamation marks.",
    tags: ["email", "growth"],
    updatedAt: "2026-09-22T08:33:00Z",
  },
];

export const activity: ActivityEvent[] = [
  {
    id: "ev_06",
    actor: "coding agent",
    action: "started",
    target: "Refactor billing webhook handlers",
    at: "2026-09-30T08:41:00Z",
  },
  {
    id: "ev_05",
    actor: "research agent",
    action: "completed",
    target: "Vector indexes on MySQL 8.4",
    at: "2026-09-30T06:49:00Z",
  },
  {
    id: "ev_04",
    actor: "you",
    action: "saved",
    target: "Agent prompting checklist",
    at: "2026-09-29T15:30:00Z",
  },
  {
    id: "ev_03",
    actor: "review agent",
    action: "approved",
    target: "PR #182: session cache",
    at: "2026-09-29T21:11:00Z",
  },
  {
    id: "ev_02",
    actor: "writing agent",
    action: "drafted",
    target: "Launch announcement",
    at: "2026-09-29T17:58:00Z",
  },
  {
    id: "ev_01",
    actor: "coding agent",
    action: "completed",
    target: "Settings page form kit migration",
    at: "2026-09-29T15:07:00Z",
  },
];

export const usageSeries: UsagePoint[] = [
  { day: "Sep 17", sessions: 6, tokens: 98000 },
  { day: "Sep 18", sessions: 9, tokens: 142000 },
  { day: "Sep 19", sessions: 4, tokens: 61000 },
  { day: "Sep 20", sessions: 3, tokens: 44000 },
  { day: "Sep 21", sessions: 8, tokens: 131000 },
  { day: "Sep 22", sessions: 11, tokens: 176000 },
  { day: "Sep 23", sessions: 7, tokens: 118000 },
  { day: "Sep 24", sessions: 10, tokens: 164000 },
  { day: "Sep 25", sessions: 12, tokens: 201000 },
  { day: "Sep 26", sessions: 5, tokens: 83000 },
  { day: "Sep 27", sessions: 4, tokens: 69000 },
  { day: "Sep 28", sessions: 9, tokens: 149000 },
  { day: "Sep 29", sessions: 13, tokens: 224000 },
  { day: "Sep 30", sessions: 8, tokens: 132000 },
];

export const workspaceStats = {
  sessionsThisMonth: { value: 128, delta: "+18%" },
  tasksCompleted: { value: 342, delta: "+9%" },
  tokensUsed: { value: 1840000, delta: "+22%" },
  knowledgeCount: { value: 96, delta: "+4%" },
};

export const currentMembership = {
  tierId: "maker",
  tierName: "Maker",
  memberName: "Demo Member",
  renewsAt: "2026-11-01T00:00:00Z",
  usage: {
    sessions: { used: 128, limit: null as number | null },
    tokens: { used: 1840000, limit: 2500000 },
    knowledge: { used: 96, limit: 500 },
  },
};
