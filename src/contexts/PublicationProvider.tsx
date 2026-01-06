import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
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

  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);

  const LIMIT = 5;

  async function loadPublications() {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);

    try {
      const response = await fetchPublication(LIMIT, offset);

      setPublications((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newOnes = response.publications.filter(
          (p) => !existingIds.has(p.id)
        );
        return [...prev, ...newOnes];
      });

      setOffset((prev) => prev + LIMIT);

      if (response.publications.length < LIMIT) {
        setHasMore(false);
      }
    } catch {
      setError("Erro ao carregar publicações");
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }

  async function createPublicationHandler(payload: Publication) {
    try {
      setLoading(true);
      setError(null);

      await createPublication(payload);
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
