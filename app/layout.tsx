import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["700", "500", "300", "100"],
});

export const metadata: Metadata = {
  title: "lob0codes blog",
  description:
    "Blog of things related to coding mostly in React/Next.js and Django",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
