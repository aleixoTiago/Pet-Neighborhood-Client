import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { fetchPets } from "../services/pets";
import { User } from "../models/user";
import { Pet } from "../models/pet";

interface PetContextType {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  carregarPets: () => Promise<void>;
}

const PetContext = createContext<PetContextType>({
  pets: [],
  loading: false,
  error: null,
  carregarPets: async () => {},
});

interface PetProviderProps {
  children: ReactNode;
}

export function PetProvider({ children }: PetProviderProps) {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function carregarPets() {
    try {
      setLoading(true);
      const data = await fetchPets();
      setPets(data.pets);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarPets();
  }, []);

  return (
    <PetContext.Provider
      value={{
        pets,
        loading,
        error,
        carregarPets,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

export function usePets() {
  return useContext(PetContext);
}
