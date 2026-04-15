import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { AnimationProvider } from "./components/providers/AnimationProvider";
import Preloader from "./components/ui/Preloader";

/* FONTS */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/* SEO METADATA */
export const metadata: Metadata = {
  title: "StellarRank – High-Quality Backlinks & SEO Services",
  description:
    "Boost rankings, traffic, and domain authority with high-quality backlinks. StellarRank provides safe, scalable SEO link building solutions for modern businesses.",

  keywords: [
    "SEO backlinks",
    "link building services",
    "high authority backlinks",
    "SEO services",
    "increase domain authority",
  ],

  openGraph: {
    title: "StellarRank – SEO & Backlink Services",
    description:
      "Grow your website with safe, high-authority backlinks and proven SEO strategies.",
    url: "https://stellarrank.net",
    siteName: "StellarRank",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
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
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnimationProvider>
          <Preloader />
          <Header />
          {children}
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}