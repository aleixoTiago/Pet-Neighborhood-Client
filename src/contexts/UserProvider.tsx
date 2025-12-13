import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchUsers, User } from "../services/api";

interface UserContextType {
  users: User[];
  loading: boolean;
  erro: string | null;
  carregarUsuarios: () => Promise<void>;
  login: (email: string, senha: string) => boolean;
  usuarioLogado: User | null;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  loading: false,
  erro: null,
  carregarUsuarios: async () => {},
  login: () => false,
  usuarioLogado: null,
});

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [usuarioLogado, setUsuarioLogado] = useState<User | null>(null);

  async function carregarUsuarios() {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data.users);
    } catch (err: any) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  // 🔥 Função de login simples
  function login(email: string, senha: string): boolean {
    const found = users.find(
      (u) => u.email === email && u.senha === senha
    );

    if (found) {
      setUsuarioLogado(found);
      console.log("Usuário logado:", found);
      return true;
    }

    return false;
  }

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        erro,
        carregarUsuarios,
        login,
        usuarioLogado,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
