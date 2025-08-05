import { headers } from "next/headers";
import { ButtonSignOut } from "./_components/button-signout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-2">Página dashboard</h1>
      <Image
        src={session.user.image || ""}
        alt={session.user.name}
        width="200"
        height="200"
        className="w-30 h-30 rounded-full"
      />
      <h3>Usuario logado: {session?.user.name}</h3>
      <ButtonSignOut />
    </div>
  );
}
