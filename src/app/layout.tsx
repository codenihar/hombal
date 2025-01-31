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
  title: "Hombal & Associates",
  description:
    "Hombal & Associates is a professionally managed CA firm engaged in providing various services relating to Audit and HOMBAL & ASSOCIATES Assurance, Taxation and Corporate entity Compliance, Financial advisory, Business consultation, Income Tax, GST and TDS returns filing services to number of clients engaged in various sectors. The team at the firm has dedicated Chartered accountants to provide end to end services.",
  icons: {
    icon: "/logo.png", // Ensure logo.png is placed inside the public folder
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
