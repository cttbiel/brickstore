"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Tijolo Cerâmico 6 Furos",
    price: 0.89,
    originalPrice: 1.09,
    image: "/tijolo.jpeg",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: "18",
    name: "Cimento Portland CP-II",
    price: 32.9,
    originalPrice: 38.5,
    image: "/cimentoportland.jpg",
    rating: 4.8,
    reviewCount: 120,
    inStock: true,
  },
  {
    id: "6",
    name: "Areia Fina 20kg",
    price: 12.0,
    originalPrice: 15.0,
    image: "/areia fina.jpg",
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
  },
  {
    id: "7",
    name: "Brita 1 20kg",
    price: 18.0,
    originalPrice: 22.0,
    image: "/brita.jpg",
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
  },
  {
    id: "9",
    name: "Furadeira de Impacto Makita",
    price: 299.9,
    originalPrice: 349.9,
    image: "/furadeiradeimpactomakita.jpg",
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: "8",
    name: "Tubo PVC 100mm 6m",
    price: 45.9,
    originalPrice: 52.0,
    image: "/tubopvc6m100mm.jpg",
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
  },
  {
    id: "15",
    name: "Tinta Coral Acrílico Fosco",
    price: 89.9,
    originalPrice: 105.0,
    image: "/tintacoralacrilicofosco.jpg",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: "17",
    name: "Piso de Mármore Porcelanato",
    price: 28.9,
    originalPrice: 34.5,
    image: "/pisodemarmoreporcelana.jpg",
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
  },
];

export function FeaturedProducts() {
  const { addItem } = useCart();

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    // Mostrar feedback visual (opcional)
    // Você pode adicionar um toast notification aqui
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 drop-shadow-sm font-serif">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Os produtos mais vendidos e bem avaliados pelos nossos clientes
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-[#E67E22] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group relative min-h-[420px]"
            >
              {/* Badge de desconto */}
              {product.originalPrice > product.price && (
                <span className="absolute top-4 left-4 bg-[#F39C12] text-white text-xs font-bold px-4 py-2 rounded-full shadow border-2 border-[#FFF] z-10 animate-pulse">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </span>
              )}
              {/* Botão de favorito */}
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-[#FAF3E0] transition-colors z-10 border border-[#E67E22] cursor-pointer">
                <Heart className="h-5 w-5 text-[#E67E22] group-hover:text-[#F39C12] transition-colors" />
              </button>
              {/* Imagem do produto */}
              <div className="flex items-center justify-center h-40 bg-[#FAF3E0] border-b-2 border-[#E67E22]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={120}
                  className="object-contain h-32 w-full"
                  unoptimized
                />
              </div>
              {/* Info */}
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between min-h-[210px]">
                <Link href="/site-em-construcao" className="block">
                  <h3 className="font-bold text-xl text-[#2C2C2C] mb-1 line-clamp-2 group-hover:text-[#E67E22] transition-colors font-serif">
                    {product.name}
                  </h3>
                </Link>
                {/* Rating */}
                <div className="flex items-center mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-700 ml-2">
                    ({product.reviewCount})
                  </span>
                </div>
                {/* Preço */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-extrabold text-[#E67E22]">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-base text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                </div>
                {/* Botão adicionar ao carrinho */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#E67E22] text-white py-3 px-6 rounded-xl font-bold shadow hover:bg-[#F39C12] hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg mt-2 border-2 border-[#A04000] cursor-pointer"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de ver todos os produtos */}
        <div className="w-full flex justify-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-[#E67E22] text-white font-bold rounded-lg shadow-lg border-2 border-[#A04000] hover:bg-[#F39C12] hover:text-white transition-all text-lg"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  );
}
