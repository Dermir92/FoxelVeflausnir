import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Vefsíður fyrir iðnað og þjónustu`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} | Skýrar vefsíður á föstu verði`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "is_IS",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Merki Foxel Veflausna",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Skýrar vefsíður á föstu verði`,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
