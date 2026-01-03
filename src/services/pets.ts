import { Pet } from "../models/pet";

const API_URL = "http://localhost:4000/pets";

export interface FetchPetsResponse {
  pets: Pet[];
  total?: number;
}

export type UpdatePetBody = Partial<Omit<Pet, "id" | "userId">>;

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

export async function fetchPets(): Promise<FetchPetsResponse> {
  const response = await fetch(`${API_URL}/my`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar pets");
  }
  const data = await response.json();
  return data as FetchPetsResponse;
}

export async function updatePet(id: number, body: UpdatePetBody): Promise<Pet> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar pet");
  }

  const data = await response.json();
  return data.pet as Pet;
}

// export async function fetchPets(): Promise<FetchPetsResponse> {
//   const response = await fetch("http://localhost:4000/pets/my", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Erro ao buscar pets");
//   }

//   const data = await response.json();
//   return data as FetchPetsResponse;
// }

export async function createPet(body: Pet): Promise<Pet> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar pet");
  }

  const data = await response.json();
  return data.pet;
}
