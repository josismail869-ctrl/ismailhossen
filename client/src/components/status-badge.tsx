import { cn } from "@/lib/utils";

const config: Record<string, { label: string; className: string; dot: string }> = {
  running: {
    label: "Running",
    className: "bg-accent-500/15 text-accent-300 ring-accent-400/30",
    dot: "bg-accent-400",
  },
  completed: {
    label: "Completed",
    className: "bg-mint-400/10 text-mint-400 ring-mint-400/25",
    dot: "bg-mint-400",
  },
  queued: {
    label: "Queued",
    className: "bg-amber-400/10 text-amber-400 ring-amber-400/25",
    dot: "bg-amber-400",
  },
  failed: {
    label: "Failed",
    className: "bg-rose-400/10 text-rose-300 ring-rose-400/25",
    dot: "bg-rose-400",
  },
};

export function StatusBadge({ status }: { status: string }) {
  const entry = config[status] ?? config.queued;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
        entry.className
      )}
    >
      <span className={cn("size-1.5 rounded-full", entry.dot)} />
      {entry.label}
    </span>
  );
}
