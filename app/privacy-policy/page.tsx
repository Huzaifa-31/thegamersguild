import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Gamers Guild",
  description:
    "How The Gamers Guild collects, uses, and protects your personal information.",
};

const sections: { heading: string; body: ReactNode }[] = [
  {
    heading: "1. Introduction",
    body: (
      <>
        The Gamers Guild (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy and is committed to protecting
        your personal data. This Privacy Policy explains how we collect, use,
        and safeguard information when you visit our website and use our
        services.
      </>
    ),
  },
  {
    heading: "2. Information We Collect",
    body: (
      <>
        We may collect the following types of information:
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">
          <li>
            <span className="text-white">Contact data</span> &mdash; your name,
            email address, and any messages you send us.
          </li>
          <li>
            <span className="text-white">Account data</span> &mdash; details you
            provide when you register or interact with our community.
          </li>
          <li>
            <span className="text-white">Technical data</span> &mdash; your IP
            address, browser type, device information, and pages visited.
          </li>
          <li>
            <span className="text-white">Usage data</span> &mdash; information
            about how you interact with our site and services.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. How We Use Your Information",
    body: (
      <>
        We use the information we collect to operate, maintain, and improve our
        services; to communicate with you; to provide customer support; to
        monitor and prevent abuse and security issues; and to comply with legal
        obligations.
      </>
    ),
  },
  {
    heading: "4. Cookies",
    body: (
      <>
        We use cookies and similar tracking technologies to remember your
        preferences, measure site performance, and improve your experience. You
        can control cookies through your browser settings; disabling them may
        affect some functionality of the site.
      </>
    ),
  },
  {
    heading: "5. Third-Party Services",
    body: (
      <>
        We may use trusted third-party services (such as analytics and
        hosting providers) that process data on our behalf. These parties are
        obligated to use your information only for the purposes we specify and
        in accordance with applicable law.
      </>
    ),
  },
  {
    heading: "6. Data Retention",
    body: (
      <>
        We retain personal data only for as long as necessary to fulfil the
        purposes described in this Policy, unless a longer retention period is
        required or permitted by law.
      </>
    ),
  },
  {
    heading: "7. Your Rights",
    body: (
      <>
        Depending on your location, you may have the right to access, correct,
        delete, or restrict the processing of your personal data, and to object
        to certain processing. To exercise these rights, contact us using the
        details below.
      </>
    ),
  },
  {
    heading: "8. Security",
    body: (
      <>
        We implement appropriate technical and organizational measures to
        protect your personal data against unauthorized access, loss, or
        misuse. However, no method of transmission over the internet is
        completely secure.
      </>
    ),
  },
  {
    heading: "9. Children's Privacy",
    body: (
      <>
        Our services are not directed to children below the age of digital
        consent, and we do not knowingly collect personal information from
        children. If you believe a child has provided us data, please contact
        us so we can remove it.
      </>
    ),
  },
  {
    heading: "10. Changes to This Policy",
    body: (
      <>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with a revised effective date. We encourage you to
        review this page periodically.
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-orange/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-navy-soft/40 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-16">
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-2xl bg-white p-2 shadow-lg shadow-black/40 ring-1 ring-white/10 transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/logo.jpeg"
            alt="The Gamers Guild logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-xl object-contain"
          />
          <span className="text-sm font-semibold text-brand-navy">
            The Gamers Guild
          </span>
        </Link>

        <header className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-400">Effective date: October 19, 2026</p>
        </header>

        {/* Sections */}
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-white">
                {section.heading}
              </h2>
              <div className="mt-2 leading-7 text-slate-300">{section.body}</div>
            </section>
          ))}

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold text-white">
              11. Contact Us
            </h2>
            <p className="mt-2 leading-7 text-slate-300">
              If you have any questions about this Privacy Policy or how we
              handle your data, please reach out at{" "}
              <a
                href="mailto:privacy@thegamersguild.com"
                className="font-medium text-brand-orange underline-offset-4 hover:underline"
              >
                privacy@thegamersguild.com
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>&copy; 2026 The Gamers Guild. All rights reserved.</p>
          <Link
            href="/"
            className="mt-2 inline-block font-medium text-slate-200 transition-colors hover:text-brand-orange"
          >
            &larr; Back to home
          </Link>
        </footer>
      </div>
    </main>
  );
}
