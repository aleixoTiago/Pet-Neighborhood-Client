import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { loginRequest } from "../services/loginRequest";
import { User } from "../models/user";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // restaura auth ao dar refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // idealmente você validaria o token no backend
      setUser({} as User); // placeholder se ainda não tem /me
    }

    setLoading(false);
  }, []);

  async function login(email: string, senha: string) {
    try {
      setLoading(true);
      setError(null);

      const { user, token } = await loginRequest(email, senha);

      setUser(user);
      localStorage.setItem("token", token);
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
