import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://medkey.tech";
const developerSignature =
  "Developed by Rojan Upreti, Computer Science major at William Paterson University graduating in May 2026.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MedKey",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  sameAs: ["https://medkey.tech"],
  description:
    "MedKey unifies patient medical history with FHIR integrations, HIPAA-conscious security, and instant digital consent sharing.",
  founder: {
    "@type": "Person",
    name: "Rojan Upreti",
    jobTitle:
      "Computer Science major at William Paterson University graduating in May 2026",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "iam@rojanupreti.com",
    contactType: "customer support",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "MedKey",
  title:
    "MedKey | Unified Medical History & Instant Doctor Sharing | Healthcare Data That Flows",
  description:
    "MedKey is the Plaid of healthcare data—unified FHIR connectivity, HIPAA-conscious security, and instant digital consent sharing so patients truly own their medical history.",
  keywords: [
    "MedKey",
    "medkey.tech",
    "unified medical history",
    "patient owned data",
    "FHIR interoperability",
    "digital consent",
    "secure health records",
    "HIPAA compliant platform",
    "healthcare startup",
    "doctor sharing",
  ],
  authors: [{ name: "Rojan Upreti", url: siteUrl }],
  creator: developerSignature,
  publisher: "MedKey",
  category: "Healthcare Technology",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MedKey",
    title:
      "MedKey | Unified Medical History & Instant Doctor Sharing | Healthcare Data That Flows",
    description:
      "MedKey unifies your lifetime medical history, keeps it encrypted, and lets you share with any doctor in seconds.",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "MedKey - Unified Medical History Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@medkey_tech",
    title:
      "MedKey | Unified Medical History & Instant Doctor Sharing | Healthcare Data That Flows",
    description:
      "Unified lifetime medical history, FHIR-based interoperability, and one-tap sharing with doctors. Developed by Rojan Upreti.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "developed-by": developerSignature,
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
