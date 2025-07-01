import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 60, 
    },
  });
  const data: ResponseProps = await response.json();

  async function handleSearchUser(formData: FormData) {
    "use server";
    const userId = formData.get("userId");
    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os Posts</h1>
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        <form className="flex gap-2 items-center" action={handleSearchUser}>
          <input
            type="number"
            placeholder="ID do usuario"
            name="userId"
            className="border border-gray-200 p-2 rounded-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">
            Buscar usuário
          </button>
        </form>
        {data.posts.map((post) => (
          <Link href={`/posts/${post.id}`} className="hover:underline" key={post.id}>
              <div key={post.id} className="bg-zinc-700 p-4 rounded-md">
                <h2 className="font-bold">{post.title}</h2>
                <p>{post.body}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
