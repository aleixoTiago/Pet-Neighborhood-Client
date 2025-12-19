// src/services/api.ts

import { User } from "../models/user";

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

export interface loggedInUser {
  users: User;
}

export async function makeLogin(): Promise<loggedInUser> {
  const response = await fetch("http://localhost:4000/login/");

  if (!response.ok) {
    throw new Error("Erro ao fazer login");
  }

  const data = await response.json();
  return data as loggedInUser;
}