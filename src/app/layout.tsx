import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LOGO_SIZE, LOGO_SRC, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
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
        url: LOGO_SRC,
        width: LOGO_SIZE.width,
        height: LOGO_SIZE.height,
        alt: `Merki ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Skýrar vefsíður á föstu verði`,
    description: SITE_DESCRIPTION,
    images: [LOGO_SRC],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
