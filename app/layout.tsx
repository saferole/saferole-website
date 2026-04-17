import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SafeRole — India's First Salary Protection Plan",
    template: "%s | SafeRole",
  },
  description:
    "Get paid even when you lose your job. Career insurance for India's tech professionals.",
  openGraph: {
    title: "SafeRole — India's First Salary Protection Plan",
    description:
      "Get paid even when you lose your job. Career insurance for India's tech professionals.",
    url: "https://saferole.in",
    siteName: "SafeRole",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeRole — India's First Salary Protection Plan",
    description:
      "Get paid even when you lose your job. Career insurance for India's tech professionals.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sofiaSans.variable}>
      <body className={sofiaSans.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SafeRole",
              url: "https://saferole.in",
              description:
                "India's first salary protection plan. Career insurance for tech professionals.",
            }),
          }}
        />
      </body>
    </html>
  );
}
