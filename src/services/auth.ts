import { User } from "../models/user";

interface LoginResponse {
  user: User;
  token: string;
}

export async function loginRequest(
  email: string,
  senha: string
): Promise<LoginResponse> {
  const response = await fetch("http://localhost:4000/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) {
    throw new Error("Credenciais inválidas");
  }

  return response.json();
}
