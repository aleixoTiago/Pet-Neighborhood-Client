import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchUsers } from "../services/fetchUsers";
import { User } from "../models/user";

interface UserContextType {
  users: User[];
  loading: boolean;
  erro: string | null;
  carregarUsuarios: () => Promise<void>;
  // usuarioLogado: User | null;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  loading: false,
  erro: null,
  carregarUsuarios: async () => {},
  // usuarioLogado: null,
});

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  // const [usuarioLogado, setUsuarioLogado] = useState<User | null>(null);

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

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        erro,
        carregarUsuarios,
        // usuarioLogado,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
