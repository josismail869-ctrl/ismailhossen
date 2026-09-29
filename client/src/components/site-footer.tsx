import { AGE_NOTICE, SITE_NAME, SITE_TAGLINE, SOCIALS } from "../../../shared/siteConfig";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-night-700 bg-night-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Logo />
            <p className="text-sm leading-relaxed text-cream-400">
              {SITE_NAME} | {SITE_TAGLINE} — daily results coverage, free
              predictions and VIP membership for Malaysia &amp; Singapore games.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="space-y-2">
              <p className="font-display font-semibold text-cream-50">Explore</p>
              <a className="block text-cream-400 hover:text-gold-300" href="/#results">Results</a>
              <a className="block text-cream-400 hover:text-gold-300" href="/#predictions">Predictions</a>
              <a className="block text-cream-400 hover:text-gold-300" href="/#posts">Daily posts</a>
            </div>
            <div className="space-y-2">
              <p className="font-display font-semibold text-cream-50">Membership</p>
              <a className="block text-cream-400 hover:text-gold-300" href="/#plans">Plans</a>
              <a className="block text-cream-400 hover:text-gold-300" href="/vip">Join VIP</a>
              <a className="block text-cream-400 hover:text-gold-300" href="/#faq">FAQ</a>
            </div>
            <div className="space-y-2">
              <p className="font-display font-semibold text-cream-50">Contact</p>
              <a className="block text-cream-400 hover:text-gold-300" href={SOCIALS.facebookPage} target="_blank" rel="noreferrer">Facebook</a>
              <a className="block text-cream-400 hover:text-gold-300" href={SOCIALS.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
              <a className="block text-cream-400 hover:text-gold-300" href={SOCIALS.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-xl border border-night-700 bg-night-850 p-4">
          <p className="text-xs leading-relaxed text-cream-500">{AGE_NOTICE}</p>
        </div>
        <p className="mt-6 text-xs text-cream-500">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
