import { Publication } from "../models/publication";

const API_URL = "http://localhost:4000/publication";

// Para listagem
export interface PublicationListResponse {
  publications: Publication[];
  total?: number;
}

// Para criação
export interface CreatePublicationResponse {
  publication: Publication;
  total?: number;
}

export type UpdatePublicationBody = Partial<Omit<Publication, "id" | "userId">>;

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

export async function fetchPublication(
  limit = 5,
  offset = 0
): Promise<PublicationListResponse> {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar publicação");
  }

  return response.json();
}

export async function createPublication(
  body: Publication
): Promise<CreatePublicationResponse> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar publication");
  }

  const data = await response.json();
  return data as CreatePublicationResponse;
}
