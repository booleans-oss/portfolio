import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Clement Lebon",
  title: "Clement Lebon - Fullstack Developer",
  description:
    "Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  url: "https://clementlbn.com",
  ogImage: "https://clementlbn.com/opengraph-image.png",
  keywords: [
    "full stack developer",
    "frontend developer",
    "react developer",
    "next.js developer",
    "ui ux designer",
    "javascript developer",
    "typescript developer",
    "web developer",
    "portfolio",
    "freelance developer",
    "software engineer",
    "web designer",
    "responsive design",
    "modern web development",
    "node.js developer",
  ],
  author: {
    name: "Clement Lebon",
    email: "hey@clementlbn.com",
    twitter: "@clementlebon",
    linkedin: "clement-lebon",
    github: "booleans-oss",
  },
  location: "Bordeaux, France",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "Clement Lebon - Fullstack Developer",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
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
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Portfolio`,
        type: "image/png",
      },
      {
        url: `${siteConfig.url}/og-image-square.jpg`,
        width: 1200,
        height: 1200,
        alt: `${siteConfig.name} - Portfolio`,
        type: "image/jpeg",
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
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.author.twitter,
    images: [siteConfig.ogImage],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  other: {
    "og:locale:alternate": "en_GB",
    "profile:first_name": "Clement",
    "profile:last_name": "Lebon",
    "profile:gender": "male",
    "og:country-name": "France",
    "og:region": "Bordeaux",
    "og:postal-code": "33000",
    "og:locality": "Bordeaux",
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.author.name,
              url: siteConfig.url,
              image: siteConfig.ogImage,
              description: siteConfig.description,
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
                siteConfig.url,
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
        className={`${manrope.variable} antialiased h-screen w-screen tracking-tighter`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
