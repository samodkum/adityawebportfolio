import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Suryavanshi - Professional Web Development Services | Fast Delivery | Conversion-Focused Design",
  description: "Transform your business with stunning websites by Aditya Suryavanshi. Professional web development services for restaurants, salons, medical clinics, e-commerce, and more. Fast delivery, SEO-optimized, mobile-responsive designs that convert visitors into customers.",
  keywords: [
    "web development", "website design", "restaurant websites", "salon websites", "medical websites", 
    "e-commerce websites", "SEO optimization", "responsive design", "conversion-focused design", 
    "Next.js development", "React development", "fast delivery", "affordable web design", 
    "business websites", "professional web developer", "mobile-responsive", "modern web design",
    "Aditya Suryavanshi"
  ],
  authors: [{ name: "Aditya Suryavanshi" }],
  creator: "Aditya Suryavanshi",
  publisher: "Aditya Suryavanshi",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Aditya Suryavanshi - Professional Web Development Services",
    description: "Transform your business with stunning websites that convert visitors into customers. Fast delivery, SEO-optimized, mobile-responsive designs.",
    url: "https://adityasuryavanshi.com",
    siteName: "Aditya Suryavanshi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Suryavanshi - Professional Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Suryavanshi - Professional Web Development Services",
    description: "Transform your business with stunning websites that convert visitors into customers. Fast delivery, SEO-optimized designs.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://adityasuryavanshi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
