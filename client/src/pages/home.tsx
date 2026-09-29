import { Cta } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-950">
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
