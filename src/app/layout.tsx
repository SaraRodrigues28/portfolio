import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sara • Data Analyst Portfolio",
    template: "%s • Sara | Data Analyst",
  },
  description:
    "Professional data analyst portfolio: Excel, Tableau, Power BI, Python, SQL, Azure. Dashboards, pipelines, and insights.",
  openGraph: {
    title: "Sara • Data Analyst Portfolio",
    description:
      "Professional data analyst portfolio: Excel, Tableau, Power BI, Python, SQL, Azure.",
    type: "website",
    url: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <ClientLayout>
          <main className="flex-1">{children}</main>
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
