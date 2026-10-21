import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-400 sm:flex sm:items-center sm:justify-between sm:text-left">
      <div className="space-y-1.5">
        <p>&copy; 2026 The Gamers Guild. All rights reserved.</p>
        <p className="text-xs text-slate-500">
          Design and Develop by{" "}
          <a
            href="https://www.digidittos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-300 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-brand-orange hover:decoration-brand-orange"
          >
            DigiDittos
          </a>
        </p>
      </div>

      <nav
        aria-label="Footer Navigation"
        className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-slate-300 sm:mt-0 sm:justify-end"
      >
        <Link
          href="/"
          className="transition-colors hover:text-brand-orange"
        >
          Home
        </Link>
        <Link
          href="/privacy-policy"
          className="transition-colors hover:text-brand-orange"
        >
          Privacy Policy
        </Link>
        <Link
          href="/contact"
          className="transition-colors hover:text-brand-orange"
        >
          Contact Us
        </Link>
      </nav>
    </footer>
  );
}
