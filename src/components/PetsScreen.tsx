import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BottomNav } from "./BottomNav";
import { UserPlus, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PetCard } from "./PetCard";
import { usePets } from "../contexts/PetProvider";

export function PetsScreen() {
  const onNavigate = useNavigate();
  const { pets, loading, error, carregarPets } = usePets();
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="p-4 space-y-4">
          <h2 className="text-center">Meus Pets</h2>
          <Button className="w-full h-12 bg-[#A8E6E3] hover:bg-[#A8E6E3]/90 text-[#2C3E50] rounded-2xl">
            <UserPlus className="w-5 h-5 mr-2" />
            Adicionar Amigos
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {!loading &&
          pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onNavigate={onNavigate} />
          ))}
      </div>

      {/* Empty State Message */}
      {pets.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <UserPlus className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="mb-2">Nenhum amigo próximo ainda</h3>
          <p className="text-muted-foreground mb-4">
            Adicione vizinhos que você conhece bem para compartilhar
            atualizações exclusivas
          </p>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav active="friends" onNavigate={onNavigate} />
    </div>
  );
}
