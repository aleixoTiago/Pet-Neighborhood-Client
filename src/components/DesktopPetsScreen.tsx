import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { UserPlus, MessageCircle, Search } from "lucide-react";
import { Input } from "./ui/input";
import { PetCard } from "./PetCard";
import { useNavigate } from "react-router-dom";

interface DesktopPetsScreenProps {
  onNavigate: (screen: string) => void;
}

export function DesktopPetsScreen() {
  const onNavigate = useNavigate();
  // const pets = 
  const pets = [
    {
      id: 1,
      name: "Thor",
      avatar: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      especie: "Cachorro",
      raca: "Golden Retriever",
      dataNascimento: Date.parse("2020-05-15"),
      bio: "Tutora do Thor, adoro passear no parque!",
    },
    {
      id: 2,
      name: "Bolt",
      avatar: "https://images.unsplash.com/photo-1662600405336-cb1682222347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwcHVwcHl8ZW58MXx8fHwxNzYzNjQ5OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      especie: "Cachorro",
      raca: "Pastor Alemão",
      dataNascimento: Date.parse("2020-05-15"),
      bio: "Bolt é cheio de energia e adora brincar!",
    },
    {
      id: 3,
      name: "Mel",
      avatar: "https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNzIwNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      especie: "Gato",
      raca: "Siamês",
      dataNascimento: Date.parse("2020-05-15"),
      bio: "Gateira de plantão! Mel é minha vida.",
    },
  ];

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-8 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1>Meus Pets</h1>
            <Button className="bg-[#A8E6E3] hover:bg-[#A8E6E3]/90 text-[#2C3E50] rounded-xl">
              <UserPlus className="w-5 h-5 mr-2" />
              Adicionar Pets
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar amigos..."
              className="h-12 pl-12 rounded-2xl bg-input-background border-0"
            />
          </div>
        </div>
      </div>

      {/* Friends Grid */}
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
