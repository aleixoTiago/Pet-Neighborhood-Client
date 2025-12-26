// src/services/api.ts

import { Pet } from "../models/pet";

export interface FetchPetsResponse {
  pets: Pet[];
}

const token = localStorage.getItem('token');

// const API_URL = "http://localhost:4000/pets/";

export async function fetchPets(): Promise<FetchPetsResponse> {
  const response = await fetch('http://localhost:4000/pets/my', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

  if (!response.ok) {
    throw new Error("Erro ao buscar pets");
  }

  const data = await response.json();
  console.log(data)
  return data as FetchPetsResponse;
}

