import { createContext, useContext, useState, useEffect } from "react";
import { cartService } from "../services/cart";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartSummary, setCartSummary] = useState({ total: 0, item_count: 0 });
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  // Carregar itens do carrinho quando o usuário estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      loadCart();
    } else {
      setCartItems([]);
      setCartSummary({ total: 0, item_count: 0 });
    }
  }, [isAuthenticated]);

  const loadCart = async () => {
    if (!isAuthenticated) return;

    setLoading(true);
    try {
      const [items, summary] = await Promise.all([
        cartService.getCartItems(),
        cartService.getCartSummary(),
      ]);
      setCartItems(items);
      setCartSummary(summary);
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!isAuthenticated) {
      return {
        success: false,
        error: "Faça login para adicionar produtos ao carrinho",
      };
    }

    try {
      await cartService.addToCart(productId, quantity);
      await loadCart(); // Recarregar carrinho
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.detail || "Erro ao adicionar ao carrinho",
      };
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    if (!isAuthenticated) return;

    try {
      await cartService.updateQuantity(itemId, quantity);
      await loadCart(); // Recarregar carrinho
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "Erro ao atualizar quantidade",
      };
    }
  };

  const removeFromCart = async (itemId) => {
    if (!isAuthenticated) return;

    try {
      await cartService.removeFromCart(itemId);
      await loadCart(); // Recarregar carrinho
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "Erro ao remover item",
      };
    }
  };

  const clearCart = async () => {
    if (!isAuthenticated) return;

    try {
      await cartService.clearCart();
      setCartItems([]);
      setCartSummary({ total: 0, item_count: 0 });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "Erro ao limpar carrinho",
      };
    }
  };

  const value = {
    cartItems,
    cartSummary,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    loadCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
