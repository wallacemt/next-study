"use client";

import { useState } from "react";

export default function Button() {
  const [nome, setNome] = useState("Wallace");

  function handleName() {
    setNome("Nome Modificado!");
  }
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <button onClick={handleName} className="border border-amber-500 rounded-md p-2">
        Alterar Nome
      </button>
      <p className="border border-white p-2 mb-2">{nome}</p>
    </div>
  );
}
