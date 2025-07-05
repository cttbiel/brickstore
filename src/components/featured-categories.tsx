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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group block rounded-2xl bg-white border-2 border-primary-300 shadow-lg hover:shadow-primary-200/80 hover:scale-105 hover:border-primary-500 transition-all duration-200 overflow-hidden relative"
            >
              <span className="absolute top-4 right-4 bg-primary-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md z-10 group-hover:scale-110 group-hover:bg-primary-600 border-2 border-primary-200 transition-transform">
                {category.productCount} produtos
              </span>
              <div className="flex items-center justify-center h-24">
                <category.icon className="h-14 w-14 text-primary-500 group-hover:text-primary-600 transition-colors drop-shadow" />
              </div>
              <div className="p-8 pt-2 flex flex-col items-center">
                <h3 className="text-xl font-bold text-black mb-2 text-center group-hover:text-primary-600 transition-colors font-serif">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-base mb-4 text-center line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-base text-primary-500 font-semibold group-hover:underline">
                    Ver mais
                  </span>
                  <ArrowRight className="h-5 w-5 text-primary-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center px-8 py-3 bg-primary-500 text-white font-bold rounded-lg shadow-lg hover:bg-primary-600 hover:scale-105 transition-all text-lg"
          >
            Ver Todas as Categorias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
