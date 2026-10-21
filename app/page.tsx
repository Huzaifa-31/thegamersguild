import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and studio overview for The Gamers Guild — leading game development house creating world-class 2D and 3D games for Android and iOS.",
  keywords: [
    "The Gamers Guild privacy policy",
    "mobile game privacy policy",
    "game development studio",
    "Android games",
    "iOS games",
    "2D games",
    "3D games",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Privacy Policy | The Gamers Guild",
    description:
      "Privacy Policy and studio overview for The Gamers Guild — leading game development house creating world-class 2D and 3D games.",
    url: "/",
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
      "Privacy Policy and studio overview for The Gamers Guild game development.",
    images: ["/logo.jpeg"],
  },
};

export default function Home() {
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

          <nav aria-label="Main Navigation" className="flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
            >
              Contact Us
            </Link>
          </nav>
        </header>

        {/* Page Title Section */}
        <section className="mt-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
        </section>

        {/* Content */}
        <article className="mt-8 space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-10">
          <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
            The Gamers Guild is one of the leading game development house in the
            country. The organization believes in original content creation
            thriving on work-hard-play-hard culture.
          </p>

          <div className="space-y-6 border-y border-white/10 py-6">
            <div>
              <h2 className="text-lg font-bold text-brand-orange">
                Perfection
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                Since Android is one of the most widely used platforms, Android
                games need to be designed to work well in various screen sizes
                and OS.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-orange">
                Proficiency
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                Our team includes the best developers of the industry who are
                constantly adapting themselves to the latest trends.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-orange">
                Completion
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                We provide full-scale development services for gaming apps on
                Android and Ios.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">
              We are passionate about what we do.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We firmly believe in the survival of the fittest in this
              challenging industry. Perfection can only be delivered by giving
              one hundred percent to a job. We are a team of committed
              professionals in love with our work.
            </p>
            <p className="text-sm font-medium text-slate-200">
              Doing what we love makes the journey towards success our reward.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-lg font-bold text-white">A growing company.</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Gamers Guild is one of the leading game development houses in the
              country. We take pride in developing world class 2D and 3D games,
              mostly ranked among top games globally.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h2 className="text-lg font-bold text-white">
              Best User Experience Games
            </h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
              <li>2D Games</li>
              <li>3D Games</li>
            </ul>
          </div>
        </article>

        {/* Shared Footer with DigiDittos credit */}
        <Footer />
      </div>
    </main>
  );
}
