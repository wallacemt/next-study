import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-center font-bold mt-9 text-6xl">404 Não encontrado</h1>
      <p>Essa página que tentou acessar não existe</p>
      <Link href={"/"}>Voltar para Home</Link>
    </div>
  );
}
