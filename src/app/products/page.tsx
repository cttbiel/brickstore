import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Tijolo Cerâmico 6 Furos",
    price: 0.89,
    originalPrice: 1.09,
    image: "/produtos/tijolo.jpeg",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: "2",
    name: "Tijolo Ecológico",
    price: 1.29,
    originalPrice: 1.59,
    image: "/produtos/tijoloecologico.jpg",
    rating: 4.9,
    reviewCount: 98,
    inStock: true,
  },
  {
    id: "3",
    name: "Telha Cerâmica 23,3x40,3cm Vermelha",
    price: 2.99,
    originalPrice: 3.49,
    image: "/produtos/telhaceramica23.3x40.3cmvermelha.jpg",
    rating: 4.7,
    reviewCount: 56,
    inStock: true,
  },
  {
    id: "4",
    name: "Colher de Pedreiro Dexter",
    price: 14.9,
    originalPrice: 19.9,
    image: "/produtos/colherdepedreirodexter.jpg",
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
  },
  {
    id: "5",
    name: "Argamassa Polimérica Biomassa do Brasil",
    price: 32.9,
    originalPrice: 38.5,
    image: "/produtos/argamassapolimericabiomassadobrasil.jpg",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "6",
    name: "Areia Fina 20kg",
    price: 12.0,
    originalPrice: 15.0,
    image: "/produtos/areia fina.jpg",
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
  },
  {
    id: "7",
    name: "Brita 1 20kg",
    price: 18.0,
    originalPrice: 22.0,
    image: "/produtos/brita.jpg",
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
  },
  {
    id: "8",
    name: "Tubo PVC 100mm 6m",
    price: 45.9,
    originalPrice: 52.0,
    image: "/produtos/tubopvc6m100mm.jpg",
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
  },
  {
    id: "9",
    name: "Furadeira de Impacto Makita",
    price: 299.9,
    originalPrice: 349.9,
    image: "/produtos/furadeiradeimpactomakita.jpg",
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: "10",
    name: "Furadeira de Impacto Tramontina Master",
    price: 199.9,
    originalPrice: 249.9,
    image: "/produtos/furadeiradeimpactotramontinamaster.jpg",
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
  },
  {
    id: "11",
    name: "Furadeira de Impacto Dewalt",
    price: 399.9,
    originalPrice: 459.9,
    image: "/produtos/furadeiradeimpactodewalt.jpg",
    rating: 4.9,
    reviewCount: 88,
    inStock: true,
  },
  {
    id: "12",
    name: "Furadeira de Impacto Bosch",
    price: 359.9,
    originalPrice: 419.9,
    image: "/produtos/furadeiradeimpactobosch.jpg",
    rating: 4.8,
    reviewCount: 102,
    inStock: true,
  },
  {
    id: "13",
    name: "WD-40 Lubrificante 300ml",
    price: 29.9,
    originalPrice: 39.9,
    image: "/produtos/wd40lubrificante300ml.jpg",
    rating: 4.9,
    reviewCount: 210,
    inStock: true,
  },
  {
    id: "14",
    name: "Tinta Coral Acrílico Total Exterior",
    price: 189.9,
    originalPrice: 219.9,
    image: "/produtos/tintacoralacrilicototalexterior.jpg",
    rating: 4.8,
    reviewCount: 77,
    inStock: true,
  },
  {
    id: "15",
    name: "Tinta Coral Acrílico Fosco",
    price: 89.9,
    originalPrice: 105.0,
    image: "/produtos/tintacoralacrilicofosco.jpg",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: "16",
    name: "Tinta Dcor Acrílica",
    price: 79.9,
    originalPrice: 99.9,
    image: "/produtos/dccor tinta acrilica.jpg",
    rating: 4.6,
    reviewCount: 54,
    inStock: true,
  },
  {
    id: "17",
    name: "Piso de Mármore Porcelanato",
    price: 28.9,
    originalPrice: 34.5,
    image: "/produtos/pisodemarmoreporcelana.jpg",
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-10 font-serif text-center">
          Produtos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-primary-300/80 hover:scale-105 transition-all duration-200 overflow-hidden group border-2 border-primary-300 relative flex flex-col"
            >
              {/* Imagem do produto */}
              <div className="flex items-center justify-center h-40 bg-gray-100">
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
                <h3 className="font-bold text-xl text-black mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors font-serif">
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
                  <span className="text-2xl font-extrabold text-primary-600">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-base text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                </div>
                {/* Botão adicionar ao carrinho */}
                <button className="w-full bg-primary-500 text-white py-3 px-6 rounded-xl font-bold shadow hover:bg-primary-600 hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg mt-2 border-2 border-primary-400">
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
