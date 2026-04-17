import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SafeRole — India's First Salary Protection Plan",
    template: "%s | SafeRole",
  },
  description: "Get paid even when you lose your job. Career insurance for India's tech professionals.",
  openGraph: {
    title: "SafeRole — India's First Salary Protection Plan",
    description: "Get paid even when you lose your job. Career insurance for India's tech professionals.",
    url: "https://saferole.in",
    siteName: "SafeRole",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeRole — India's First Salary Protection Plan",
    description: "Get paid even when you lose your job. Career insurance for India's tech professionals.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
