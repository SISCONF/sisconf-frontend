"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { fetchCustomerMe } from "@/actions/customer/fetch-customer-me";
import { fetchEntrepreneurMe } from "@/actions/entrepreneur/fetch-entrepreneur-me";
import { Entrepreneur } from "@/types/entrepreneur";
import { parseJwt } from "@/lib/utils";

interface AuthContextType {
  user: User | Entrepreneur | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | Entrepreneur | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const token = getCookie("access_token");
  const userCategory = getCookie("user_category");
  const businessName = getCookie("business_name");

  const handleLogout = async () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    deleteCookie("user_category");
    deleteCookie("business_name"); // Remove o cookie do tipo de usuário
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
        deleteCookie("business_name");
        setIsLoading(false);
        return;
      }

      try {
        const userJwtData: { groups: string[] } = parseJwt(token);
        const userGroup = userJwtData.groups[0];
        const userData =
          userGroup === "Customer"
            ? await fetchCustomerMe()
            : await fetchEntrepreneurMe();

        if (userData) {
          setUser(userData);
          setIsAuthenticated(true);

          if ("category" in userData) {
            setCookie("user_category", userData.category, {
              maxAge: 60 * 60 * 24,
            });
          }
          if ("businessName" in userData) {
            setCookie("business_name", userData.businessName, {
              maxAge: 60 * 60 * 24,
            });
          }
        } else {
          setUser(null);
          setIsAuthenticated(false);
          deleteCookie("user_category");
        }
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
        deleteCookie("user_category");
        deleteCookie("business_name");
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [token, userCategory, businessName]);

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
