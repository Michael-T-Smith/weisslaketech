import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Weiss Lake Tech | Technology Support in Collinsville, AL",
    template: "%s | Weiss Lake Tech",
  },
  description:
    "Technology support, business IT, networking, automation, and software solutions based in Collinsville, Alabama.",
  keywords: [
    "technology services Collinsville Alabama",
    "computer support Collinsville AL",
    "small business IT Northeast Alabama",
    "business automation Alabama",
    "custom business software Alabama",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Weiss Lake Tech",
    title: "Weiss Lake Tech",
    description: "Local Tech. Better Systems. Problems Solved.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weiss Lake Tech",
    description: "Technology Support, Business IT & Software Solutions",
  },
};

export const viewport = {
  colorScheme: "dark light",
  themeColor: "#05070D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
