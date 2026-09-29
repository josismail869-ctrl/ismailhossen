import { Link } from "wouter";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink-950 px-6 text-center">
      <Logo />
      <div>
        <h1 className="font-display text-4xl font-semibold text-cream-50">
          Page not found
        </h1>
        <p className="mt-2 text-cream-400">
          The page you are looking for does not exist.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-full bg-cream-50 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-200"
      >
        Back to home
      </Link>
    </div>
  );
}
