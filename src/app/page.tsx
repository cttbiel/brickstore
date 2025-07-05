import Image from "next/image";
import Link from "next/link";
import { FeaturedCategories } from "@/components/featured-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <div className="bg-[#FAF3E0] min-h-screen w-full">
      {/* HERO PRINCIPAL */}
      <section className="w-full bg-[#E67E22] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 gap-8 border-b-4 border-[#A04000]">
        <div className="flex-1 flex flex-col gap-6 items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
            Construindo valor,{" "}
            <span className="text-[#F39C12]">um tijolo por vez</span>
          </h1>
          <p className="text-lg md:text-xl text-[#FFF] font-medium max-w-xl">
            O e-commerce brasileiro para quem faz acontecer. Materiais de
            construção, preço justo, entrega rápida e atendimento de verdade.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/products"
              className="bg-[#FFF] text-[#E67E22] font-bold px-8 py-3 rounded-lg shadow hover:bg-[#F39C12] hover:text-white border-2 border-[#E67E22] transition-all text-lg"
            >
              Ver Produtos
            </Link>
            <Link
              href="/categorias"
              className="bg-[#F39C12] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#FFF] hover:text-[#E67E22] border-2 border-[#F39C12] transition-all text-lg"
            >
              Explorar Categorias
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
          <div className="relative w-full max-w-xs md:max-w-md">
            <span className="absolute top-3 left-3 md:top-5 md:left-5 bg-[#F39C12] text-white font-bold px-5 py-2 rounded-full shadow-lg border-2 border-[#FFF] text-base md:text-lg animate-bounce z-10">
              Promoção do mês
            </span>
            <Image
              src="/buildingvalue.png"
              alt="Pessoa construindo parede de tijolos"
              width={420}
              height={320}
              className="rounded-2xl shadow-2xl border-4 border-[#A04000] object-cover bg-[#FFF] w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* CATEGORIAS POPULARES */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-0 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C] mb-6">
          Categorias Populares
        </h2>
        <FeaturedCategories />
      </section>

      {/* BLOCOS DE PROMOÇÃO E DESTAQUE */}
      <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 mb-12">
        {/* Bloco 1: Promoção */}
        <div className="bg-[#FFF] rounded-2xl shadow-lg border-2 border-[#E67E22] flex flex-col items-center justify-center p-8 relative overflow-hidden">
          <span className="absolute top-4 right-4 bg-[#E67E22] text-white font-bold px-4 py-2 rounded-full shadow border-2 border-[#FFF] text-sm">
            Oferta Relâmpago
          </span>
          <Image
            src="/tijolo.jpeg"
            alt="Tijolo em promoção"
            width={120}
            height={80}
            className="mb-4 rounded shadow"
          />
          <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">
            Tijolo Cerâmico 6 Furos
          </h3>
          <p className="text-[#A04000] font-bold text-2xl mb-1">
            R$ 0,89{" "}
            <span className="text-base text-[#2C2C2C] line-through ml-2">
              R$ 1,09
            </span>
          </p>
          <button className="bg-[#E67E22] text-white font-bold px-6 py-2 rounded-lg mt-2 hover:bg-[#F39C12] transition">
            Comprar agora
          </button>
        </div>
        {/* Bloco 2: Banner institucional */}
        <div className="bg-[#A04000] rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-white gap-4">
          <h3 className="text-2xl font-bold">
            A BrickStore é para quem constrói de verdade
          </h3>
          <p className="text-lg">
            Produtos selecionados, entrega rápida e atendimento de confiança
            para sua obra.
          </p>
          <Link
            href="/products"
            className="bg-[#FFF] text-[#A04000] font-bold px-6 py-2 rounded-lg shadow hover:bg-[#F39C12] hover:text-white border-2 border-[#FFF] transition"
          >
            Ver Ofertas
          </Link>
        </div>
        {/* Bloco 3: Promoção de ferramentas */}
        <div className="bg-[#FFF] rounded-2xl shadow-lg border-2 border-[#F39C12] flex flex-col items-center justify-center p-8 relative overflow-hidden">
          <span className="absolute top-4 right-4 bg-[#F39C12] text-white font-bold px-4 py-2 rounded-full shadow border-2 border-[#FFF] text-sm">
            Super Desconto
          </span>
          <Image
            src="/furadeiradeimpactomakita.jpg"
            alt="Furadeira em promoção"
            width={120}
            height={80}
            className="mb-4 rounded shadow"
          />
          <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">
            Furadeira de Impacto Makita
          </h3>
          <p className="text-[#E67E22] font-bold text-2xl mb-1">
            R$ 299,90{" "}
            <span className="text-base text-[#2C2C2C] line-through ml-2">
              R$ 349,90
            </span>
          </p>
          <button className="bg-[#F39C12] text-white font-bold px-6 py-2 rounded-lg mt-2 hover:bg-[#E67E22] transition">
            Comprar agora
          </button>
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-0 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C] mb-6">
          Produtos em Destaque
        </h2>
        <FeaturedProducts />
      </section>

      {/* DIFERENCIAIS */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-0 py-12">
        <WhyChooseUs />
      </section>
    </div>
  );
}
