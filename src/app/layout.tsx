import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sem Pizza & Grill – Beste pizza, kebab og burger i Sem, Tønsberg",
  description:
    "Sem Pizza & Grill serverer fersk pizza, kebab, burger og grillretter i Sem (Tønsberg). Bestill via Foodora eller ring oss – rask levering og hyggelig service!",
  keywords: [
    "pizza Sem",
    "kebab Tønsberg",
    "burger Sem",
    "pizza bestilling",
    "Sem Pizza og Grill",
    "takeaway Tønsberg",
    "grillmat Sem",
  ],
  openGraph: {
    title: "Sem Pizza & Grill",
    description:
      "Fersk pizza, kebab og burger i Sem – bestill nå via Foodora eller ring oss!",
    locale: "nb_NO",
    type: "website",
  },
  other: {
    "geo.region": "NO-VF",
    "geo.placename": "Sem, Tønsberg",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Sem Pizza & Grill",
  description:
    "Restaurant i Sem (Tønsberg) med pizza, kebab, burger og grillretter.",
  servesCuisine: ["Pizza", "Kebab", "Burger", "Grillmat"],
  priceRange: "kr",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "50",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andebuveien 3",
    addressLocality: "Sem",
    addressRegion: "Vestfold",
    postalCode: "3170",
    addressCountry: "NO",
  },
  telephone: "+4791006106",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "22:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${geistSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
