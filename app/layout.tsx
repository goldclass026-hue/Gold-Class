import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "GoldClass Chauffeur | NYC Black Car & Airport SUV Service";
const description =
  "Private black Cadillac Escalade chauffeur in New York City. JFK, LGA & EWR airport transfers, corporate rides, weddings and events across all five boroughs. Call or WhatsApp to book.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Black Cadillac Escalade — GoldClass Chauffeur NYC" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og.jpg"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
