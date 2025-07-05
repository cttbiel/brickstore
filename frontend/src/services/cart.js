import api from "./api";

export const cartService = {
  // Obter itens do carrinho
  async getCartItems() {
    const response = await api.get("/cart/");
    return response.data;
  },

  // Adicionar item ao carrinho
  async addToCart(productId, quantity = 1) {
    const response = await api.post("/cart/", {
      product_id: productId,
      quantity: quantity,
    });
    return response.data;
  },

  // Atualizar quantidade
  async updateQuantity(itemId, quantity) {
    const response = await api.put(`/cart/${itemId}/`, {
      quantity: quantity,
    });
    return response.data;
  },

  // Remover item do carrinho
  async removeFromCart(itemId) {
    const response = await api.delete(`/cart/${itemId}/`);
    return response.data;
  },

  // Obter resumo do carrinho
  async getCartSummary() {
    const response = await api.get("/cart/summary/");
    return response.data;
  },

  // Limpar carrinho
  async clearCart() {
    const items = await this.getCartItems();
    const deletePromises = items.map((item) => this.removeFromCart(item.id));
    await Promise.all(deletePromises);
  },
};
