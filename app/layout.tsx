import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoldClass Chauffeur | Luxury Suburban SUV Service in NYC",
  description:
    "Premium black car service in New York City. Book Abdul Rehman for airport transfers, corporate rides, events, and more — in a Chevrolet Suburban SUV.",
  keywords: [
    "NYC black car service",
    "luxury SUV transport New York",
    "airport transfer NYC",
    "Suburban limousine NYC",
    "corporate car service Manhattan",
  ],
  openGraph: {
    title: "GoldClass Chauffeur | Luxury Suburban SUV Service in NYC",
    description:
      "Premium black car service in New York City. Book airport transfers, corporate rides, events & more.",
    type: "website",
  },
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
