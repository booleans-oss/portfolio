import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import type { Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Clement Lebon",
  ogImage: "https://clementlbn.com/opengraph-image.png",
  author: {
    name: "Clement Lebon",
    email: "hey@clementlbn.com",
    twitter: "@clementlebon",
    linkedin: "clement-lebon",
    github: "booleans-oss",
  },
  location: "Bordeaux, France",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `${siteConfig.name} - ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords").split(","),
    authors: [
      {
        name: siteConfig.author.name,
        url: t("url"),
      },
    ],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_CODE,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: t("url"),
      title: t("title"),
      description: t("description"),
      siteName: `${siteConfig.name} - ${t("title")}`,
      images: [
        {
          url: t("ogImage"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Portfolio`,
          type: "image/png",
        },
      ],
    },
    icons: [
      {
        rel: "icon",
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        url: "/favicon-light.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/favicon-16x16-dark.ico",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        url: "/favicon-16x16-light.ico",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        sizes: "32x32",
        url: "/favicon-32x32-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        sizes: "32x32",
        url: "/favicon-32x32-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon-dark.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon-light.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192-dark.png",
        sizes: "192x192",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192-light.png",
        sizes: "192x192",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512-dark.png",
        sizes: "512x512",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512-light.png",
        sizes: "512x512",
        media: "(prefers-color-scheme: light)",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: siteConfig.author.twitter,
      images: [siteConfig.ogImage],
    },
    manifest: "/site.webmanifest",
    metadataBase: new URL(t("url")),
    alternates: {
      canonical: t("url"),
    },
    category: "technology",
    classification: "Portfolio",
    referrer: "origin-when-cross-origin",
    other: {
      "og:locale:alternate": locale === "en" ? "en_GB" : "fr_FR",
      "profile:first_name": "Clement",
      "profile:last_name": "Lebon",
      "profile:gender": "male",
      "og:country-name": "France",
      "og:region": "Bordeaux",
      "og:postal-code": "33000",
      "og:locality": "Bordeaux",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.author.name,
              image: siteConfig.ogImage,
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Engine AI",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bordeaux",
                addressRegion: "Gironde",
                addressCountry: "FR",
              },
              email: siteConfig.author.email,
              sameAs: [
                `https://twitter.com/${siteConfig.author.twitter.replace(
                  "@",
                  ""
                )}`,
                `https://linkedin.com/in/${siteConfig.author.linkedin}`,
                `https://github.com/${siteConfig.author.github}`,
              ],
              knowsAbout: [
                "Web Development",
                "Frontend Development",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "UI/UX Design",
                "Full Stack Development",
              ],
            }),
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${manrope.variable} antialiased h-[100dvh] w-screen tracking-tighter`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
