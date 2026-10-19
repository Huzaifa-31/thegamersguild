import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-16 font-sans">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-orange/20 blur-[120px] animate-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-navy-soft/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-[24rem] w-[24rem] rounded-full bg-brand-orange/10 blur-[110px]"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 55%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        {/* Logo card */}
        <div className="animate-float rounded-3xl bg-white p-4 shadow-2xl shadow-black/40 ring-1 ring-white/10">
          <Image
            src="/logo.jpeg"
            alt="The Gamers Guild logo"
            width={128}
            height={128}
            priority
            className="h-28 w-28 rounded-2xl object-contain sm:h-32 sm:w-32"
          />
        </div>

        {/* Status badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-sm font-medium text-brand-orange">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
          </span>
          Under Maintenance
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          The Gamers Guild
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
          We&apos;re leveling up the site and making things even better.
          We&apos;ll be right back — grab a snack, stretch those thumbs, and
          we&apos;ll see you soon.
        </p>

        {/* Progress bar */}
        <div className="mt-10 w-full max-w-sm">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-navy-soft to-brand-orange" />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">
            Recharging&hellip; back shortly
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 flex flex-col items-center gap-4 text-sm text-slate-400">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* <a
            href="mailto:support@thegamersguild.pro"
            className="rounded-full border border-white/10 px-5 py-2 font-medium text-slate-200 transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
          >
            Contact us
          </a> */}
          <Link
            href="/privacy-policy"
            className="rounded-full border border-white/10 px-5 py-2 font-medium text-slate-200 transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
          >
            Privacy Policy
          </Link>
        </div>
        <p>&copy; 2026 The Gamers Guild. All rights reserved.</p>
      </footer>
    </main>
  );
}
