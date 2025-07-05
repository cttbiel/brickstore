import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Hammer, Truck, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[480px] flex items-center justify-center bg-white overflow-hidden">
      {/* Plano de fundo: imagem desfocada clara, sem overlay escuro */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/material-de-construcao.jpg"
          alt="Homem construindo parede de tijolos"
          fill
          className="object-cover object-center blur-sm scale-110 opacity-30"
          priority
        />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col lg:flex-row items-center gap-24">
        {/* Esquerda: Texto */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight drop-shadow-sm font-serif">
            <span className="block">Construa com</span>
            <span className="block text-primary-500">Energia e Confiança</span>
            <span className="block">na BrickStore</span>
          </h1>
          <p className="text-2xl text-gray-800 max-w-2xl mx-auto lg:mx-0 font-serif">
            Materiais de construção para quem faz acontecer. Preço justo,
            entrega rápida e atendimento de verdade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary-500 text-white font-bold rounded-xl shadow-lg hover:bg-primary-600 hover:scale-105 transition-all text-xl border-4 border-primary-400 drop-shadow-lg"
            >
              Ver Produtos
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center justify-center px-10 py-5 border-4 border-primary-500 text-primary-500 font-bold rounded-xl hover:bg-primary-500 hover:text-white hover:scale-105 transition-all text-xl bg-white drop-shadow-lg"
            >
              Explorar Categorias
            </Link>
          </div>
          <div className="flex gap-8 justify-center lg:justify-start pt-8">
            <div className="flex items-center gap-2 text-primary-600 bg-primary-100/60 px-3 py-1 rounded-full font-semibold shadow">
              <Hammer className="h-5 w-5 text-primary-500" />
              <span className="text-base font-medium">Qualidade Garantida</span>
            </div>
            <div className="flex items-center gap-2 text-primary-600 bg-primary-100/60 px-3 py-1 rounded-full font-semibold shadow">
              <Truck className="h-5 w-5 text-primary-500" />
              <span className="text-base font-medium">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 text-primary-600 bg-primary-100/60 px-3 py-1 rounded-full font-semibold shadow">
              <Shield className="h-5 w-5 text-primary-500" />
              <span className="text-base font-medium">Compra Segura</span>
            </div>
          </div>
        </div>
        {/* Direita: Banner de destaque (solar) */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
          <div className="w-full max-w-md rounded-2xl bg-primary-50/90 border-4 border-primary-200 shadow-2xl p-10 flex flex-col items-center gap-4 animate-fade-in-up">
            <span className="text-primary-600 text-xl font-bold tracking-wide uppercase bg-primary-100 px-6 py-3 rounded-full shadow mb-2 border-2 border-primary-300">
              Para quem constrói de verdade
            </span>
            <p className="text-gray-700 text-center text-lg font-medium font-serif">
              Produtos selecionados, entrega rápida e atendimento de confiança
              para sua obra.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-bold rounded-xl shadow hover:bg-primary-600 hover:scale-105 transition-all text-lg mt-2 border-2 border-primary-400"
            >
              Ver Ofertas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
