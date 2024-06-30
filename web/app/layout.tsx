import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Chuck Norris Facts",
  description: "Ivve Challenge for FullStack Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
