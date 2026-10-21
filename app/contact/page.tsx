import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Let’s keep in touch! Reach out to The Gamers Guild at info@thegamersguild.pro for game development inquiries, partnerships, or feedback. We respond within 24 hrs.",
  keywords: [
    "Contact The Gamers Guild",
    "game development inquiry",
    "game studio contact",
    "mobile games support",
    "The Gamers Guild email",
    "game developer partnerships",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | The Gamers Guild",
    description:
      "Have questions about our games, feedback, or inquiries? Contact The Gamers Guild at info@thegamersguild.pro.",
    url: "/contact",
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
    title: "Contact Us | The Gamers Guild",
    description:
      "Reach out to The Gamers Guild at info@thegamersguild.pro — we respond within 24 hrs.",
    images: ["/logo.jpeg"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us | The Gamers Guild",
  description:
    "Have questions about our games, feedback, or inquiries? Reach out to The Gamers Guild at info@thegamersguild.pro.",
  url: "https://thegamersguild.pro/contact",
  mainEntity: {
    "@type": "Organization",
    name: "The Gamers Guild",
    email: "info@thegamersguild.pro",
    url: "https://thegamersguild.pro",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Page specific JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

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
              href="/privacy-policy"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
            >
              Privacy Policy
            </Link>
          </nav>
        </header>

        {/* Header section with proper single H1 */}
        <section className="mt-12 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-orange">
            Get In Touch
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s keep in touch!
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
            Have questions about our games, feedback, or inquiries? We would love
            to hear from you.
          </p>
        </section>

        {/* Contact Card with H2 heading */}
        <section
          aria-labelledby="contact-heading"
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-md sm:p-10"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-brand-orange/10 p-3.5 ring-1 ring-brand-orange/20">
                <svg
                  className="h-7 w-7 text-brand-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <div>
                <h2
                  id="contact-heading"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Email Us Directly
                </h2>
                <a
                  href="mailto:info@thegamersguild.pro"
                  className="mt-1 block text-xl font-bold text-white transition-colors hover:text-brand-orange sm:text-2xl"
                >
                  info@thegamersguild.pro
                </a>
              </div>
            </div>

            <a
              href="mailto:info@thegamersguild.pro"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Send Email
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Response time notice */}
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-900/50 p-4">
            <svg
              className="h-5 w-5 shrink-0 text-brand-orange"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-sm font-medium text-slate-200">
              We will respond within 24 hrs.
            </p>
          </div>
        </section>

        {/* Shared Footer with DigiDittos credit */}
        <Footer />
      </div>
    </main>
  );
}
