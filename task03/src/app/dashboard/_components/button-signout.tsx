"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function ButtonSignOut() {
  const router = useRouter();

  async function signOut() {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/");
        },
      },
    });
  }

  return <Button onClick={signOut}>Sair da conta</Button>;
}
