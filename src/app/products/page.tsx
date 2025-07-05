import { ShoppingCart, Star } from "lucide-react";
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
    id: "2",
    name: "Tijolo Ecológico",
    price: 1.29,
    originalPrice: 1.59,
    image: "/tijoloecologico.jpg",
    rating: 4.9,
    reviewCount: 98,
    inStock: true,
  },
  {
    id: "3",
    name: "Telha Cerâmica 23,3x40,3cm Vermelha",
    price: 2.99,
    originalPrice: 3.49,
    image: "/telhaceramica23.3x40.3cmvermelha.jpg",
    rating: 4.7,
    reviewCount: 56,
    inStock: true,
  },
  {
    id: "4",
    name: "Colher de Pedreiro Dexter",
    price: 14.9,
    originalPrice: 19.9,
    image: "/colherdepedreirodexter.jpg",
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
  },
  {
    id: "5",
    name: "Argamassa Polimérica Biomassa do Brasil",
    price: 32.9,
    originalPrice: 38.5,
    image: "/argamassapolimericabiomassadobrasil.jpg",
    rating: 4.9,
    reviewCount: 89,
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
    id: "10",
    name: "Furadeira de Impacto Tramontina Master",
    price: 199.9,
    originalPrice: 249.9,
    image: "/furadeiradeimpactotramontinamaster.jpg",
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
  },
  {
    id: "11",
    name: "Furadeira de Impacto Dewalt",
    price: 399.9,
    originalPrice: 459.9,
    image: "/furadeiradeimpactodewalt.jpg",
    rating: 4.9,
    reviewCount: 88,
    inStock: true,
  },
  {
    id: "12",
    name: "Furadeira de Impacto Bosch",
    price: 359.9,
    originalPrice: 419.9,
    image: "/furadeiradeimpactobosch.jpg",
    rating: 4.8,
    reviewCount: 102,
    inStock: true,
  },
  {
    id: "13",
    name: "WD-40 Lubrificante 300ml",
    price: 29.9,
    originalPrice: 39.9,
    image: "/wd40lubrificante300ml.jpg",
    rating: 4.9,
    reviewCount: 210,
    inStock: true,
  },
  {
    id: "14",
    name: "Tinta Coral Acrílico Total Exterior",
    price: 189.9,
    originalPrice: 219.9,
    image: "/tintacoralacrilicototalexterior.jpg",
    rating: 4.8,
    reviewCount: 77,
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
    id: "16",
    name: "Tinta Dcor Acrílica",
    price: 79.9,
    originalPrice: 99.9,
    image: "/dccor tinta acrilica.jpg",
    rating: 4.6,
    reviewCount: 54,
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
    id: "19",
    name: "Cimento Cauê 50kg CPII F32",
    price: 34.9,
    originalPrice: 39.9,
    image: "/cimentoscaue50kgcpiif32.jpg",
    rating: 4.7,
    reviewCount: 80,
    inStock: true,
  },
  {
    id: "20",
    name: "Cimento CP IV Votoran",
    price: 36.9,
    originalPrice: 42.9,
    image: "/cimentocpiivotoran.jpg",
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
  },
  {
    id: "21",
    name: "Betoneira 150L Max Mono 127V CSM",
    price: 2999.9,
    originalPrice: 3499.9,
    image: "/betoneira_150l_max_mono_127v__110v__csm.jpg",
    rating: 4.9,
    reviewCount: 22,
    inStock: true,
  },
  {
    id: "22",
    name: "Luva de Malha Pigmentada Preta Carbografite",
    price: 7.9,
    originalPrice: 9.9,
    image: "/luva_de_malha_pigmentada_preta_carbografite.jpg",
    rating: 4.8,
    reviewCount: 60,
    inStock: true,
  },
  {
    id: "23",
    name: "Luva Látex Confort M Amarela Danny",
    price: 8.9,
    originalPrice: 11.9,
    image: "/luva_latex_confort_m_amarela_danny.jpg",
    rating: 4.7,
    reviewCount: 45,
    inStock: true,
  },
];

const filteredProducts = products.filter(
  (p) => p.name !== "Site em Construção (Banner)"
);

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FAF3E0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] mb-10 font-serif text-center">
          Produtos
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-xl text-[#2C2C2C] mb-1 line-clamp-2 group-hover:text-[#E67E22] transition-colors font-serif">
                  {product.name}
                </h3>
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
                <button className="w-full bg-[#E67E22] text-white py-3 px-6 rounded-xl font-bold shadow hover:bg-[#F39C12] hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg mt-2 border-2 border-[#A04000]">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
