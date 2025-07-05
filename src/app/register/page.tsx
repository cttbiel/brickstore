"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) {
      setSuccess("Conta criada com sucesso! Faça login.");
      setTimeout(() => router.push("/login"), 1500);
    } else {
      const data = await res.json();
      setError(data.error || "Erro ao criar conta.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FAF3E0] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col gap-6 border-2 border-[#E67E22]"
      >
        <h1 className="text-3xl font-extrabold text-[#2C2C2C] text-center mb-2 font-serif drop-shadow">
          Criar Conta
        </h1>
        {error && (
          <div className="text-red-600 text-center font-semibold bg-red-50 border border-red-200 rounded p-2">
            {error}
          </div>
        )}
        {success && (
          <div className="text-green-600 text-center font-semibold bg-green-50 border border-green-200 rounded p-2">
            {success}
          </div>
        )}
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-[#E67E22] rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-[#F39C12] focus:border-[#F39C12] transition placeholder:text-gray-400 bg-white"
          required
        />
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
          Criar Conta
        </button>
        <div className="flex justify-between text-sm mt-2">
          <a
            href="/login"
            className="text-[#E67E22] hover:underline font-semibold"
          >
            Já tenho conta
          </a>
        </div>
      </form>
    </main>
  );
}
