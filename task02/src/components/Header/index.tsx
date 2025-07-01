import Link from "next/link";

export function Header() {
  return (
    <header className="flex px-2 py-4 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link href={"/"} className="flex items-center gap-2 hover:text-amber-500 hover:underline">
          <div>NEXTJS</div>
        </Link>
      </div>
      <nav>
        <ul className="flex items-center justify-center gap-2">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
