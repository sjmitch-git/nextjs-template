import type { Metadata } from "next";

export const URLs = {
  base: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/",
};

export const AppConfig = {
  sitename: "Next.js Template",
  title: "Next.js Template",
  description: "A starter template for Next.js projects with Tailwind CSS and Fluid UI.",
  keywords: "nextjs, reactjs, tailwindcss, fluidui, template, starter",
  author: {
    name: "OBLONG",
    url: "https://oblong.digital/",
  },
};

export const MetaData: Metadata = {
  title: {
    template: `%s | ${AppConfig.title}`,
    default: AppConfig.title,
  },
  description: AppConfig.description,
  keywords: AppConfig.keywords,
  authors: [
    {
      name: AppConfig.author.name,
      url: AppConfig.author.url,
    },
  ],
  metadataBase: new URL(URLs.base),
  alternates: {
    canonical: new URL(URLs.base),
  },
  twitter: {
    card: "summary",
  },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    type: "website",
    siteName: AppConfig.sitename,
  },
  other: {
    "theme-color": "#000000",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": AppConfig.sitename,
  },
};

export const DefaultLinks = [
  { href: "/", name: "Home", title: "Home" },
  { href: "/about", name: "About", title: "About Us" },
  { href: "/contact", name: "Contact", title: "Contact Us" },
  { href: "/privacy", name: "Privacy", title: "Privacy Policy" },
  { href: "/terms", name: "Terms", title: "Terms & Conditions" },
  { href: "/disclaimer", name: "Disclaimer", title: "Disclaimer" },
];
