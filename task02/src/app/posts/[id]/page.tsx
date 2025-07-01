import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";

export default async function DetailsPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="max-w-3xl mx-auto mt-2 p-4 bg-zinc-700 rounded-md">
      <h1 className="text-3xl font-bold mb-4">Detalhes do Post: {id}</h1>
      <Suspense fallback={<p>Carregando detalhes do post...</p>} >
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
