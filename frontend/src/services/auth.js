import api from "./api";

export const authService = {
  // Registro de usuário
  async register(userData) {
    const response = await api.post("/register/", userData);
    return response.data;
  },

  // Login
  async login(credentials) {
    const response = await api.post("/login/", credentials);
    const { token, user_id, email, username } = response.data;

    // Salvar dados no localStorage
    localStorage.setItem("token", token);
    localStorage.setItem(
      "user",
      JSON.stringify({ id: user_id, email, username })
    );

    return response.data;
  },

  // Logout
  async logout() {
    try {
      await api.post("/logout/");
    } catch (error) {
      console.error("Erro no logout:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  // Obter perfil do usuário
  async getProfile() {
    const response = await api.get("/profile/");
    return response.data;
  },

  // Atualizar perfil
  async updateProfile(userData) {
    const response = await api.put("/profile/update/", userData);
    return response.data;
  },

  // Alterar senha
  async changePassword(passwordData) {
    const response = await api.post("/profile/change-password/", passwordData);
    return response.data;
  },

  // Verificar se está autenticado
  isAuthenticated() {
    return !!localStorage.getItem("token");
  },

  // Obter usuário atual
  getCurrentUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};
