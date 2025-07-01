import { Header } from "@/components/Header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula NextJS do Zero!",
  description: "Aula NextJS do zero!",
  openGraph: {
    title: "Aprendendo NextJs com TypeScript",
    description: "Aprendendo NextJs Do Zero!",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-lt-installed="true">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
