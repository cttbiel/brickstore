import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { productService } from "../services/products";

const ProductCard = ({ product, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();

  const handleFavoriteToggle = async () => {
    if (!isAuthenticated) {
      alert("Faça login para favoritar produtos");
      return;
    }

    setLoading(true);
    try {
      await productService.toggleFavorite(product.id);
      setIsFavorite(!isFavorite);
      if (onFavoriteToggle) {
        onFavoriteToggle(product.id);
      }
    } catch (error) {
      console.error("Erro ao favoritar produto:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      alert("Faça login para adicionar produtos ao carrinho");
      return;
    }

    const result = await addToCart(product.id, 1);
    if (result.success) {
      alert("Produto adicionado ao carrinho!");
    } else {
      alert(result.error);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="card group">
      {/* Imagem do produto */}
      <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-200">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500 text-sm">Sem imagem</span>
          </div>
        )}
      </div>

      {/* Informações do produto */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          <Link
            to={`/products/${product.id}`}
            className="hover:text-primary-600"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-sm text-gray-500 mb-3 overflow-hidden text-ellipsis whitespace-nowrap">
          {product.description}
        </p>

        {/* Preço e estoque */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-primary-600">
            {formatPrice(product.price)}
          </span>
          <span
            className={`text-sm ${
              product.in_stock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.in_stock ? "Em estoque" : "Fora de estoque"}
          </span>
        </div>

        {/* Categoria */}
        {product.category && (
          <p className="text-xs text-gray-500 mb-3">{product.category.name}</p>
        )}

        {/* Ações */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.in_stock || !isAuthenticated}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            Adicionar
          </button>

          <button
            onClick={handleFavoriteToggle}
            disabled={loading || !isAuthenticated}
            className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isFavorite ? (
              <HeartIconSolid className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
