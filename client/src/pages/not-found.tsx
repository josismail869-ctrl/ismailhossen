import { Link } from "wouter";
import { Logo } from "../components/logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-night-950 px-4 text-center">
      <Logo />
      <div className="space-y-2">
        <p className="font-display text-6xl font-bold gold-text">404</p>
        <p className="text-cream-400">This page is not on the board.</p>
      </div>
      <Link
        href="/"
        className="rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400"
      >
        Back to results
      </Link>
    </div>
  );
}
