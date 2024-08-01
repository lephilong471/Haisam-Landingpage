import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "./custom.css";

import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hải Sâm Logistics",
  description: "Công ty TNHH Logistics Hải Sâm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
