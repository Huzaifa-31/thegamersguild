import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy for The Gamers Guild game development studio — protecting player privacy and detailing our data practices.",
  keywords: [
    "Privacy Policy",
    "The Gamers Guild privacy policy",
    "mobile game privacy policy",
    "game data protection",
    "player privacy",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | The Gamers Guild",
    description:
      "Official Privacy Policy for The Gamers Guild game development studio.",
    url: "/privacy-policy",
    siteName: "The Gamers Guild",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1024,
        height: 1024,
        alt: "The Gamers Guild Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | The Gamers Guild",
    description:
      "Official Privacy Policy for The Gamers Guild game development studio.",
    images: ["/logo.jpeg"],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Background ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/4 h-[32rem] w-[32rem] rounded-full bg-brand-orange/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-36 h-[32rem] w-[32rem] rounded-full bg-brand-navy-soft/50 blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-16">
        {/* Header / Brand */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-lg shadow-black/40 ring-1 ring-white/10 transition-transform hover:scale-[1.02]"
            aria-label="The Gamers Guild Home"
          >
            <Image
              src="/logo.jpeg"
              alt="The Gamers Guild logo"
              width={48}
              height={48}
              className="h-10 w-10 rounded-xl object-contain"
              priority
            />
            <span className="text-sm font-bold text-brand-navy">
              The Gamers Guild
            </span>
          </Link>

          <nav aria-label="Main Navigation" className="flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
            >
              Contact Us
            </Link>
          </nav>
        </header>

        {/* Privacy Policy Content */}
        <PrivacyPolicyContent />

        {/* Shared Footer with DigiDittos credit */}
        <Footer />
      </div>
    </main>
  );
}
