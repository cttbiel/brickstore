import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  TruckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import ProductCard from "../components/ProductCard";
import { productService } from "../services/products";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const response = await productService.getProducts({ page_size: 8 });
        setFeaturedProducts(response.results || response);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  const features = [
    {
      name: "Entrega Rápida",
      description: "Entrega em até 24h para toda a região",
      icon: TruckIcon,
    },
    {
      name: "Pagamento Seguro",
      description: "Múltiplas formas de pagamento",
      icon: CreditCardIcon,
    },
    {
      name: "Garantia",
      description: "Garantia de qualidade em todos os produtos",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Construa seus sonhos com{" "}
                <span className="text-primary-200">BrickStore</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-100">
                A maior loja de materiais de construção do Brasil. Encontre tudo
                que você precisa para sua obra com qualidade e preço justo.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/products"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ver Produtos
                </Link>
                <Link
                  to="/categories"
                  className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-primary-200"
                >
                  Explorar Categorias <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Por que escolher a BrickStore?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tudo que você precisa para sua construção
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-primary-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Produtos em Destaque
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Confira nossos produtos mais populares da construção civil
            </p>
          </div>

          {loading ? (
            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="card animate-pulse">
                  <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-200">
                    <div className="h-full w-full bg-gray-300"></div>
                  </div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-3"></div>
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2"
            >
              Ver Todos os Produtos
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para começar sua obra?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-200">
              Cadastre-se gratuitamente e tenha acesso a preços especiais,
              promoções exclusivas e muito mais.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Cadastrar Agora
              </Link>
              <Link
                to="/products"
                className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-primary-200"
              >
                Ver Produtos <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
