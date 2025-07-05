import api from "./api";

export const orderService = {
  // Listar pedidos
  async getOrders() {
    const response = await api.get("/orders/");
    return response.data;
  },

  // Obter pedido por ID
  async getOrder(id) {
    const response = await api.get(`/orders/${id}/`);
    return response.data;
  },

  // Finalizar compra
  async checkout(shippingAddress) {
    const response = await api.post("/orders/checkout/", {
      shipping_address: shippingAddress,
    });
    return response.data;
  },

  // Processar pagamento (integração futura com Mercado Pago)
  async processPayment(orderId, paymentData) {
    // Esta função será implementada quando integrarmos com Mercado Pago
    const response = await api.post(`/orders/${orderId}/payment/`, paymentData);
    return response.data;
  },
};
