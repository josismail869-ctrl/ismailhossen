import { Contact } from "../components/landing/contact";
import { Faq } from "../components/landing/faq";
import { Hero } from "../components/landing/hero";
import { Plans } from "../components/landing/plans";
import { Posts } from "../components/landing/posts";
import { Predictions } from "../components/landing/predictions";
import { Results } from "../components/landing/results";
import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-night-950">
      <SiteNav />
      <main>
        <Hero />
        <Results />
        <Predictions />
        <Plans />
        <Posts />
        <Contact />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
