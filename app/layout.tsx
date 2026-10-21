import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thegamersguild.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Gamers Guild | World-Class Mobile Game Studio",
    template: "%s | The Gamers Guild",
  },
  description:
    "The Gamers Guild — leading game development house creating world-class 2D and 3D games for Android and iOS.",
  applicationName: "The Gamers Guild",
  keywords: [
    "The Gamers Guild",
    "game development studio",
    "mobile games",
    "2D game development",
    "3D game development",
    "Android games",
    "iOS games",
    "mobile game publisher",
    "Unity game development",
    "gaming studio",
    "best user experience games",
  ],
  authors: [{ name: "The Gamers Guild", url: siteUrl }],
  creator: "The Gamers Guild",
  publisher: "The Gamers Guild",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "The Gamers Guild",
    title: "The Gamers Guild | World-Class Mobile Game Studio",
    description:
      "The Gamers Guild — leading game development house creating world-class 2D and 3D games for Android and iOS.",
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
    title: "The Gamers Guild | World-Class Mobile Game Studio",
    description:
      "The Gamers Guild — leading game development house creating world-class 2D and 3D games for Android and iOS.",
    images: ["/logo.jpeg"],
    creator: "@thegamersguild",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/logo.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "The Gamers Guild",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.jpeg`,
        caption: "The Gamers Guild Logo",
      },
      image: `${siteUrl}/logo.jpeg`,
      description:
        "The Gamers Guild is a leading game development house creating world-class 2D and 3D games for Android and iOS.",
      email: "info@thegamersguild.pro",
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "info@thegamersguild.pro",
          contactType: "customer support",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "The Gamers Guild",
      description:
        "Leading game development house creating world-class 2D and 3D games for Android and iOS.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
