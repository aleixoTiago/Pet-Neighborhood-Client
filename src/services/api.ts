// src/services/api.ts

export interface User {
  id: number;
  name: string;
  email: string;
  senha: string;
}

export interface FetchUsersResponse {
  users: User[];
}

const API_URL = "http://localhost:4000/users/";

export async function fetchUsers(): Promise<FetchUsersResponse> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  const data = await response.json();
  return data as FetchUsersResponse;
}
