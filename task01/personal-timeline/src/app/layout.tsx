import { Open_Sans } from "next/font/google";
import "@/globals.css";
import ThemeProvider from "@/theme/ThemeProvider";

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
    <ThemeProvider>
      <html lang="pt-br" data-lt-installed="true">
        <body className={`${openSans.variable}  `}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
