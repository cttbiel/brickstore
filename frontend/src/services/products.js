import api from "./api";

export const productService = {
  // Listar produtos
  async getProducts(params = {}) {
    const response = await api.get("/products/", { params });
    return response.data;
  },

  // Obter produto por ID
  async getProduct(id) {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  },

  // Listar categorias
  async getCategories() {
    const response = await api.get("/categories/");
    return response.data;
  },

  // Buscar produtos
  async searchProducts(query) {
    const response = await api.get("/products/", {
      params: { search: query },
    });
    return response.data;
  },

  // Filtrar produtos por categoria
  async getProductsByCategory(categoryId) {
    const response = await api.get("/products/", {
      params: { category: categoryId },
    });
    return response.data;
  },

  // Toggle favorito
  async toggleFavorite(productId) {
    const response = await api.post(`/products/${productId}/toggle_favorite/`);
    return response.data;
  },

  // Obter favoritos
  async getFavorites() {
    const response = await api.get("/products/favorites/");
    return response.data;
  },
};
