import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TurboRide Supercars | Luxury Supercar Rental Bangalore",
  description: "Experience the extraordinary with Bangalore's premier luxury supercar rental platform. Rent the Porsche 718 Cayman, Lamborghini Huracán EVO, and Ford Mustang GT V8 for Self Drive, Ride Along, Weddings, and Events.",
  keywords: [
    "Supercar rental Bangalore",
    "Porsche 718 Cayman rental Bangalore",
    "Self drive supercar Bangalore",
    "Lamborghini rental India",
    "Luxury car hire Bangalore",
    "Wedding car rental luxury Bangalore",
    "Photoshoot supercar rental",
    "TurboRide Supercars"
  ],
  authors: [{ name: "TurboRide Supercars", url: "https://turboride.in" }],
  creator: "TurboRide Supercars",
  metadataBase: new URL("https://turboride.in"),
  openGraph: {
    title: "TurboRide Supercars | Drive The Extraordinary",
    description: "World-class supercar rentals in Bangalore. Porsche 718 Cayman available now for Self Drive, Ride Along & Events.",
    url: "https://turboride.in",
    siteName: "TurboRide Supercars",
    images: [
      {
        url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "TurboRide Porsche 718 Cayman Supercar Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboRide Supercars | Luxury Rental Bangalore",
    description: "Rent Porsche, Lamborghini & Mustang in Bangalore. Self Drive, Ride Along, Photoshoots.",
    images: ["https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://turboride.in",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for LocalBusiness & AutoRental
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "TurboRide Supercars",
    "image": "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
    "@id": "https://turboride.in",
    "url": "https://turboride.in",
    "telephone": "+919876543210",
    "priceRange": "₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "UB City, Vittal Mallya Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://instagram.com/turboride_supercars"
    ]
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white selection:bg-[#FF2D20] selection:text-white font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
