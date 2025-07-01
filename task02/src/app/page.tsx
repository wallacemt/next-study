import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula NextJS do zero!",
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

export const revalidate = 60; 
export default function Home() {
  const ramdomNumber = Math.floor(Math.random() * 1000);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Numero Gerado: {ramdomNumber}</p>
    </main>
  );
}
