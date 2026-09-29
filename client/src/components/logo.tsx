import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid size-8 place-items-center rounded-lg bg-accent-500/15 ring-1 ring-accent-400/30">
        <Sparkles className="size-4 text-accent-300" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-cream-50">
        Kimi
      </span>
    </span>
  );
}
