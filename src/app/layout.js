import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professional Pool Services | San Antonio's Premier Pool Maintenance",
  description:
    "Expert pool maintenance and cleaning services in San Antonio. Weekly cleaning, chemical balancing, equipment repair, and more. Get crystal clear water all year round.",
  keywords:
    "pool service, pool maintenance, pool cleaning, San Antonio, pool repair, water testing, pool equipment",
  openGraph: {
    title:
      "Professional Pool Services | San Antonio's Premier Pool Maintenance",
    description:
      "Expert pool maintenance and cleaning services in San Antonio. Weekly cleaning, chemical balancing, equipment repair, and more.",
    url: "https://yourpoolservice.com",
    siteName: "Professional Pool Services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7",
        width: 1200,
        height: 630,
        alt: "Professional Pool Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
