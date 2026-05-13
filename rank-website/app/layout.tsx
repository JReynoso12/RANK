import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RANK Engineering Services — Engineering Excellence, Built to Rank",
  description:
    "RANK Engineering Services — Contractor, Civil Works, Electrical & Mechanical Services. Multidisciplinary engineering and construction delivered with precision.",
  icons: {
    icon: "/rank-logo.png",
    apple: "/rank-logo.png",
  },
  appleWebApp: {
    title: "RANK Engineering",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#060f2c" },
    { media: "(prefers-color-scheme: dark)", color: "#060f2c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${bebasNeue.variable} antialiased`}
    >
      <body className="min-h-dvh bg-brand-navy-deep text-foreground flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
