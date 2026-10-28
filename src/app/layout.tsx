import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f2444",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mothersdesign.com"),
  title: "Mother's Design & Construction | Top Builders & Architects in Pipra, Bihar",
  description:
    "Leading construction company and architectural design firm in Pipra, Bihar. Expert 3D elevation, residential villas, commercial complexes, and turnkey civil construction. 5.0 Rated on Google Maps (22 Reviews). Call +91 82643 60443.",
  keywords: [
    "Mother's Design & Construction",
    "Construction Company Pipra",
    "Civil Contractors Bihar",
    "Best Architects in Pipra Bihar",
    "3D Elevation Design Supaul",
    "Home Builders Saharsa",
    "House Construction Cost Bihar",
    "Vastu Compliant Floor Plans",
    "Commercial Builders Pipra Bazar",
    "Top Construction Company Supaul",
  ],
  authors: [{ name: "Mother's Design & Construction" }],
  creator: "Mother's Design & Construction",
  publisher: "Mother's Design & Construction",
  alternates: {
    canonical: "https://mothersdesign.com",
    languages: {
      "en-IN": "https://mothersdesign.com",
      "hi-IN": "https://mothersdesign.com",
    },
  },
  openGraph: {
    title: "Mother's Design & Construction | Pipra, Bihar (5.0 ★ Rated)",
    description:
      "Bihar's premier construction & architectural design firm. 150+ Completed Projects. 3D Elevation, Structural Engineering, and Turnkey Home Building.",
    url: "https://mothersdesign.com",
    siteName: "Mother's Design & Construction",
    images: [
      {
        url: "/images/hero-building.jpg",
        width: 1200,
        height: 800,
        alt: "Mother's Design & Construction 3D Elevation Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mother's Design & Construction | Top Builders in Pipra, Bihar",
    description:
      "Expert 3D elevation, residential & commercial builders in Bihar. 5.0 Google Rating with 22 verified reviews.",
    images: ["/images/hero-building.jpg"],
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
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Pipra, Supaul, Bihar",
    "geo.position": "26.1604125;86.7987594",
    ICBM: "26.1604125, 86.7987594",
  },
};

// JSON-LD Structured Data Schema for Local Business SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://mothersdesign.com/#organization",
  name: "Mother's Design & Construction",
  alternateName: ["मदर'एस डिजाइन & कंस्ट्रक्शन", "Mother's Construction Pipra"],
  url: "https://mothersdesign.com",
  logo: "https://mothersdesign.com/images/logo.jpg",
  image: [
    "https://mothersdesign.com/images/logo.jpg",
    "https://mothersdesign.com/images/hero-building.jpg",
    "https://mothersdesign.com/images/gmap_1.jpg",
    "https://mothersdesign.com/images/gmap_2.jpg",
    "https://mothersdesign.com/images/gmap_5.jpg",
  ],
  description:
    "Mother's Design & Construction is a premier civil contractor, real estate builder, and architectural consulting firm located in Pipra, Bihar. Providing 3D elevation designs, residential home construction, commercial complexes, and structural engineering.",
  telephone: "+91-82643-60443",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bazar, Pipra - Simariya Rd, Near Post Office",
    addressLocality: "Pipra",
    addressRegion: "Bihar",
    postalCode: "852218",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.1604125,
    longitude: 86.7987594,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "22",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://maps.app.goo.gl/qD4B79n1rVwG1j7z6",
    "https://www.justdial.com",
    "https://www.indiamart.com",
  ],
  areaServed: [
    { "@type": "City", name: "Pipra" },
    { "@type": "City", name: "Supaul" },
    { "@type": "City", name: "Saharsa" },
    { "@type": "City", name: "Madhepura" },
    { "@type": "State", name: "Bihar" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Architectural Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Architectural Elevation & Layout Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Turnkey Residential Villa Construction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Complex Civil Construction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Structural Foundation & RCC Engineering",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
