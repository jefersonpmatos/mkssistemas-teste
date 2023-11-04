import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Providers } from "./utils/Providers";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS sistemas",
  description: "MKS sistemas product list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={montserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
