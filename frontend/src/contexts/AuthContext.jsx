import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há usuário logado ao carregar a aplicação
    const currentUser = authService.getCurrentUser();
    if (currentUser && authService.isAuthenticated()) {
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      setUser(response);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.non_field_errors?.[0] || "Erro no login",
      };
    }
  };

  const register = async (userData) => {
    try {
      await authService.register(userData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.username?.[0] ||
          error.response?.data?.email?.[0] ||
          "Erro no registro",
      };
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const updateProfile = async (userData) => {
    try {
      const updatedUser = await authService.updateProfile(userData);
      setUser((prev) => ({ ...prev, ...updatedUser }));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "Erro ao atualizar perfil",
      };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
