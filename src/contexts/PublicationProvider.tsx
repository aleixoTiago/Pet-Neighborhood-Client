import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Publication } from "../models/publication";
import { fetchPublication, createPublication } from "../services/publication";

/* =======================
   Tipos
======================= */

interface PublicationContextType {
  publications: Publication[];
  loading: boolean;
  error: string | null;
  loadPublications: () => Promise<void>;
  createPublication: (payload: Publication) => Promise<void>;
}

interface PublicationProviderProps {
  children: ReactNode;
}

/* =======================
   Context
======================= */

const PublicationContext = createContext<PublicationContextType>(
  {} as PublicationContextType
);

/* =======================
   Provider
======================= */

export function PublicationProvider({ children }: PublicationProviderProps) {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadPublications() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchPublication();
      setPublications(response.publications);
    } catch (err) {
      setError("Erro ao carregar publicações");
    } finally {
      setLoading(false);
    }
  }

  async function createPublicationHandler(payload: Publication) {
    try {
      setLoading(true);
      setError(null);

      await createPublication(payload);

      // adiciona a nova publicação na lista
      // setPublications((prev) => [response.publication, ...prev]);
    } catch (err) {
      setError("Erro ao criar publicação");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPublications();
  }, []);

  return (
    <PublicationContext.Provider
      value={{
        publications,
        loading,
        error,
        loadPublications,
        createPublication: createPublicationHandler,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
}

/* =======================
   Hook
======================= */

export function usePublications() {
  const context = useContext(PublicationContext);

  if (!context) {
    throw new Error(
      "usePublications must be used within a PublicationProvider"
    );
  }

  return context;
}
