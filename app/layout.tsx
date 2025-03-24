import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anitej Waghray Portfolio",
  description: "Anitej Waghray",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6133670831991341"
     crossorigin="anonymous"></script>
     <meta name="google-adsense-account" content="ca-pub-6133670831991341"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
