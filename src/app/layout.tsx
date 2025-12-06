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
  title: "Autoxence: Websites which bring clients not just clicks",
  description: "Professional web development services that focus on delivering real clients and business growth, not just website traffic.",
  keywords: ["Autoxence", "web development", "client acquisition", "business websites", "conversion optimization", "React", "Next.js"],
  authors: [{ name: "Autoxence Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Autoxence: Websites which bring clients not just clicks",
    description: "Professional web development services that deliver real business results",
    url: "https://autoxence.com",
    siteName: "Autoxence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoxence: Websites which bring clients not just clicks",
    description: "Professional web development services that deliver real business results",
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
