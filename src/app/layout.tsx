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
  title: "Art Turner | AI Engineer – Python, Cloud ML & LLM Deployment",
  description:
    "AI Engineer focused on building and deploying production-ready ML and LLM systems using Python and cloud-native tooling. Data-driven by default. Relentless by nature.",
  openGraph: {
    title: "Art Turner | AI Engineer",
    description:
      "AI Engineer focused on building and deploying production-ready ML and LLM systems using Python and cloud-native tooling. Data-driven by default. Relentless by nature.",
    url: "https://artturner.online",
    siteName: "Art Turner",
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
      </body>
    </html>
  );
}
