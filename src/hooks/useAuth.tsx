"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { fetchCustomerMe } from "@/actions/customer/fetch-customer-me";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const token = getCookie("access_token");

  const handleLogout = async () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    deleteCookie("user_category"); // Remove o cookie do tipo de usuário
    setIsAuthenticated(false);
    setUser(null);
    router.push("/");
  };

  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);

      if (!token) {
        // Caso não haja token, garante que o estado esteja limpo e remove o cookie
        setUser(null);
        setIsAuthenticated(false);
        deleteCookie("user_category");
        setIsLoading(false);
        return;
      }

      try {
        const userData = await fetchCustomerMe();

        if (userData) {
          setUser(userData);
          setIsAuthenticated(true);

          if (userData.category) {
            setCookie("user_category", userData.category, {
              path: "/",
              maxAge: 60 * 60 * 24,
            });
          }
        } else {
          setUser(null);
          setIsAuthenticated(false);
          deleteCookie("user_category");
        }
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        setUser(null);
        setIsAuthenticated(false);
        deleteCookie("user_category");
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        logout: handleLogout,
        setIsAuthenticated,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
