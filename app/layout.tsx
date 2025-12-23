import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tek Moto Pendik Garage",
  description: "Pendik'in en güvenilir motosiklet servisi ve ikinci el satış noktası.",
  metadataBase: new URL("https://tekmotogarage.com"),
  openGraph: {
    title: "Tek Moto Pendik Garage",
    description: "Pendik'in en güvenilir motosiklet servisi ve ikinci el satış noktası.",
    url: "https://tekmotogarage.com",
    siteName: "Tek Moto Pendik Garage",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Tek Moto Pendik Garage Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tek Moto Pendik Garage",
    description: "Pendik'in en güvenilir motosiklet servisi ve ikinci el satış noktası.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
