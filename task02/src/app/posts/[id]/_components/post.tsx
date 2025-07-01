import { PostProps } from "../../page";

export async function PostInfo({ id }: { id: string }) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <p className="text-lg">{data.title}</p>
      <p className="mt-4">{data.body}</p>
      <p className="mt-4">Usuário: {data.userId}</p>
    </div>
  );
}
