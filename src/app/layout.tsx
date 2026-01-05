import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartu-kata.vercel.app"),
  title: {
    default: "Kartu Kata - Pertanyaan Seru untuk Nongkrong & Deep Talk",
    template: "%s | Kartu Kata"
  },
  description: "Temukan topik obrolan seru untuk teman nongkrong atau pertanyaan deep talk untuk pasangan. Kartu Kata membantu mencairkan suasana dan memperdalam hubungan dengan pertanyaan menarik.",
  keywords: ["kartu kata", "conversation starter", "ice breaker", "pertanyaan seru", "deep talk", "pertanyaan pasangan", "game nongkrong", "truth or dare", "pertanyaan teman", "relationship questions"],
  authors: [{ name: "Deni Irawan Nugraha" }],
  creator: "Deni Irawan Nugraha",
  publisher: "Deni Irawan Nugraha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kartu-kata.vercel.app",
    title: "Kartu Kata - Pertanyaan Seru untuk Nongkrong & Deep Talk",
    description: "Temukan topik obrolan seru untuk teman nongkrong atau pertanyaan deep talk untuk pasangan. Kartu Kata membantu mencairkan suasana dan memperdalam hubungan.",
    siteName: "Kartu Kata",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kartu Kata - Conversation Starter Game"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartu Kata - Pertanyaan Seru untuk Nongkrong & Deep Talk",
    description: "Temukan topik obrolan seru untuk teman nongkrong atau pertanyaan deep talk untuk pasangan.",
    images: ["/og-image.svg"],
    creator: "@deniirawan",
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
    icon: [
      { url: "/icon-512.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/icon-512.svg", type: "image/svg+xml" }
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://kartu-kata.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
