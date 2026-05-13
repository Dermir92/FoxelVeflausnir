import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foxel Veflausnir | Vefsíður fyrir lítil fyrirtæki",
  description:
    "Foxel Veflausnir hannar skýrar og traustvekjandi vefsíður fyrir lítil fyrirtæki sem vilja líta faglega út á netinu.",
  openGraph: {
    title: "Foxel Veflausnir | Vefsíður fyrir lítil fyrirtæki",
    description:
      "Foxel Veflausnir hannar skýrar og traustvekjandi vefsíður fyrir lítil fyrirtæki sem vilja líta faglega út á netinu.",
    locale: "is_IS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
