import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dedi Irfan — Dosen Teknik Informatika UNP",
  description: "Portofolio dan proyek oleh Dedi Irfan, Dosen Teknik Informatika Universitas Negeri Padang.",
  metadataBase: new URL("https://di-landing.local"),
  openGraph: {
    title: "Dedi Irfan — Dosen Teknik Informatika UNP",
    description:
      "Portofolio dan proyek oleh Dedi Irfan, Dosen Teknik Informatika Universitas Negeri Padang.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}
