import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import { SOCIALS } from "../../../../shared/siteConfig";

const channels = [
  {
    name: "Telegram helpline",
    value: SOCIALS.telegramNumber,
    href: SOCIALS.telegramUrl,
    icon: Send,
    note: "Fastest response for members",
  },
  {
    name: "WhatsApp",
    value: SOCIALS.whatsappNumber,
    href: SOCIALS.whatsappUrl,
    icon: MessageCircle,
    note: "Chat with the team directly",
  },
  {
    name: "Facebook",
    value: "Probashi Voice Malaysia Singapore",
    href: SOCIALS.facebookPage,
    icon: Facebook,
    note: "Daily posts and community",
  },
  {
    name: "Instagram",
    value: SOCIALS.instagramHandle,
    href: SOCIALS.instagramUrl,
    icon: Instagram,
    note: "Highlights and updates",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-night-800 bg-night-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Talk to a <span className="gold-text">real person</span>
          </h2>
          <p className="text-cream-400">
            Questions about results, predictions or membership — reach us on any
            of these channels.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-night-700 bg-night-900 p-5 transition-colors hover:border-gold-500/50"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/40 bg-gold-500/10 text-gold-300">
                <channel.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-cream-50 group-hover:text-gold-300">
                {channel.name}
              </h3>
              <p className="mt-1 break-words font-mono text-sm text-gold-300">{channel.value}</p>
              <p className="mt-2 text-xs text-cream-500">{channel.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
