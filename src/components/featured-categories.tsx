import Link from "next/link";
import { ArrowRight, Boxes, Layers, Wrench, Droplets } from "lucide-react";

const categories = [
  {
    id: "1",
    name: "Tijolos e Blocos",
    description: "Tijolos, blocos de concreto e outros materiais de alvenaria",
    icon: Boxes,
    productCount: 45,
  },
  {
    id: "2",
    name: "Cimento e Argamassa",
    description: "Cimentos, argamassas e produtos para assentamento",
    icon: Layers,
    productCount: 32,
  },
  {
    id: "3",
    name: "Ferramentas",
    description: "Ferramentas manuais e elétricas para construção",
    icon: Wrench,
    productCount: 78,
  },
  {
    id: "4",
    name: "Hidráulica",
    description: "Tubos, conexões e acessórios hidráulicos",
    icon: Droplets,
    productCount: 56,
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 drop-shadow-sm font-serif">
            Categorias em Destaque
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Explore nossas principais categorias e encontre exatamente o que
            você precisa para seu projeto
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-[#FFF] border-2 border-[#E67E22] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center p-8 pt-10 group min-h-[320px]"
            >
              {/* Badge de quantidade */}
              <span className="absolute -top-4 left-4 bg-[#F39C12] text-white text-xs font-bold px-4 py-2 rounded-full shadow border-2 border-[#FFF] z-10">
                {category.productCount} produtos
              </span>
              {/* Ícone */}
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#FAF3E0] mb-4 border-2 border-[#E67E22] shadow">
                <category.icon className="h-10 w-10 text-[#E67E22]" />
              </div>
              {/* Título */}
              <h3 className="text-xl font-extrabold text-[#2C2C2C] mb-2 text-center group-hover:text-[#E67E22] transition-colors">
                {category.name}
              </h3>
              {/* Descrição */}
              <p className="text-gray-700 text-base mb-6 text-center line-clamp-2">
                {category.description}
              </p>
              {/* Botão */}
              <Link
                href="/site-em-construcao"
                className="inline-flex items-center px-6 py-2 bg-[#E67E22] text-white font-bold rounded-lg shadow hover:bg-[#F39C12] transition-all text-base mt-auto"
              >
                Ver mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Botão de ver todas as categorias */}
        <div className="w-full flex justify-center mt-10">
          <Link
            href="/site-em-construcao"
            className="inline-flex items-center px-8 py-3 bg-[#E67E22] text-white font-bold rounded-lg shadow-lg border-2 border-[#A04000] hover:bg-[#F39C12] hover:text-white transition-all text-lg"
          >
            Ver Todas as Categorias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
