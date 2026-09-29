import { SITE_NAME, SITE_TAGLINE } from "../../../shared/siteConfig";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/50 bg-night-900 font-display text-sm font-bold text-gold-400 gold-ring">
        4D
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-base font-semibold tracking-tight text-cream-50">
            {SITE_NAME}
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-gold-400/90">
            {SITE_TAGLINE}
          </span>
        </span>
      )}
    </span>
  );
}
