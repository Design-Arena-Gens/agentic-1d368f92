import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Avery Kim — Frontend Engineer",
  description:
    "Portfolio hub for a React & Angular specialist with three years of product delivery experience.",
  authors: [{ name: "Avery Kim" }],
  openGraph: {
    title: "Avery Kim — Frontend Engineer",
    description:
      "React and Angular craftsmanship for fast-moving product teams. Case studies, capabilities, and process snapshots.",
    url: "https://agentic-1d368f92.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="/angular-widget/polyfills.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/angular-widget/main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
