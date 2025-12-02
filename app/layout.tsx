import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://medkey.tech'),
  title: {
    default: "MedKey - Your Complete Medical History in One Place",
    template: "%s | MedKey"
  },
  description: "MedKey is a unified healthcare platform that lets patients access their entire medical history and instantly share it with any doctor using digital consent and FHIR interoperability.",
  keywords: [
    "medical records",
    "healthcare data",
    "FHIR",
    "patient portal",
    "medical history",
    "health records",
    "HIPAA",
    "healthcare interoperability",
    "EHR",
    "electronic health records",
    "patient data",
    "healthcare technology",
    "medical data sharing",
    "healthcare platform"
  ],
  authors: [{ name: "Rojan Upreti", url: "https://medkey.tech" }],
  creator: "Rojan Upreti",
  publisher: "MedKey",
  applicationName: "MedKey",
  category: "Healthcare Technology",
  icons: {
    icon: [
      { url: '/medkey.png', sizes: 'any' },
      { url: '/medkey.png', type: 'image/png' },
    ],
    apple: '/medkey.png',
    shortcut: '/medkey.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medkey.tech',
    siteName: 'MedKey',
    title: 'MedKey - Your Complete Medical History in One Place',
    description: 'Unified healthcare platform that lets patients access their entire medical history and instantly share it with any doctor using digital consent and FHIR interoperability.',
    images: [
      {
        url: '/medkey.png',
        width: 512,
        height: 512,
        alt: 'MedKey Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedKey - Your Complete Medical History in One Place',
    description: 'Unified healthcare platform for accessing and sharing medical records.',
    images: ['/medkey.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here when available
  },
  alternates: {
    canonical: 'https://medkey.tech',
  },
  other: {
    'developed-by': 'Rojan Upreti, Computer Science major at William Paterson University graduating in May 2026',
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
        <meta name="developed-by" content="Rojan Upreti, Computer Science major at William Paterson University graduating in May 2026" />
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
