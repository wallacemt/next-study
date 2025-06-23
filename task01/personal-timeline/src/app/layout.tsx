import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-lt-installed="true">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
