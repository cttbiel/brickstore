"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError("E-mail ou senha inválidos.");
    } else {
      router.push("/");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FAF3E0] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col gap-6 border-2 border-[#E67E22]"
      >
        <h1 className="text-3xl font-extrabold text-[#2C2C2C] text-center mb-2 font-serif drop-shadow">
          Entrar
        </h1>
        {error && (
          <div className="text-red-600 text-center font-semibold bg-red-50 border border-red-200 rounded p-2">
            {error}
          </div>
        )}
        {searchParams.get("error") && (
          <div className="text-red-600 text-center font-semibold bg-red-50 border border-red-200 rounded p-2">
            Faça login para acessar.
          </div>
        )}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-[#E67E22] rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-[#F39C12] focus:border-[#F39C12] transition placeholder:text-gray-400 bg-white"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-[#E67E22] rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-[#F39C12] focus:border-[#F39C12] transition placeholder:text-gray-400 bg-white"
          required
        />
        <button
          type="submit"
          className="bg-[#E67E22] text-white font-extrabold rounded-lg px-6 py-3 shadow hover:bg-[#F39C12] transition-all text-lg border-2 border-[#A04000] focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
        >
          Entrar
        </button>
        <div className="flex justify-between text-sm mt-2">
          <a
            href="/register"
            className="text-[#E67E22] hover:underline font-semibold"
          >
            Criar conta
          </a>
          <a
            href="/site-em-construcao"
            className="text-[#A04000] hover:underline font-semibold"
          >
            Esqueci minha senha
          </a>
        </div>
      </form>
    </main>
  );
}
