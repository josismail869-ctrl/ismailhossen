import { formatDistanceToNow } from "date-fns";
import {
  BookOpen,
  Code2,
  FolderOpen,
  Library,
  Search,
} from "lucide-react";
import { useState } from "react";
import { WorkspaceLayout } from "@/components/workspace/layout";
import { trpc } from "@/lib/trpc";

const kindIcons: Record<string, typeof BookOpen> = {
  note: BookOpen,
  snippet: Code2,
  reference: Library,
  collection: FolderOpen,
};

export default function WorkspaceKnowledge() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = trpc.workspace.knowledge.useQuery({ search });

  return (
    <WorkspaceLayout
      title="Knowledge"
      subtitle="What your agents learned, kept and searchable"
    >
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-cream-500" />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search notes, snippets, collections..."
          className="w-full rounded-full border border-white/10 bg-ink-900 py-2.5 pl-10 pr-4 text-sm text-cream-50 placeholder:text-cream-500 outline-none transition-colors focus:border-accent-400/50"
        />
      </div>

      {isLoading || !data ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-44 animate-pulse rounded-2xl border border-white/8 bg-ink-900"
            />
          ))}
        </div>
      ) : data.length === 0 ? (
        <p className="mt-16 text-center text-sm text-cream-500">
          Nothing matches that search yet.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((entry) => {
            const Icon = kindIcons[entry.kind] ?? BookOpen;
            return (
              <article
                key={entry.id}
                className="flex flex-col rounded-2xl border border-white/8 bg-ink-900 p-5 transition-colors hover:border-white/15"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-lg bg-accent-500/15 ring-1 ring-accent-400/25">
                    <Icon className="size-4 text-accent-300" />
                  </span>
                  <span className="font-mono text-xs capitalize text-cream-500">
                    {entry.kind}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-base font-semibold text-cream-50">
                  {entry.title}
                </h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-cream-400">
                  {entry.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-cream-400 ring-1 ring-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-cream-500">
                  Updated{" "}
                  {formatDistanceToNow(new Date(entry.updatedAt), {
                    addSuffix: true,
                  })}
                </p>
              </article>
            );
          })}
        </div>
      )}
    </WorkspaceLayout>
  );
}
