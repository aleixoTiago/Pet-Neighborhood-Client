import { Search, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { GroupCard } from "./GroupCard";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

interface DesktopGroupsScreenProps {
  onNavigate: (screen: string) => void;
}

export function DesktopGroupsScreen({ onNavigate }: DesktopGroupsScreenProps) {
  const groups = [
    {
      id: 1,
      name: "Condomínio Vista Verde",
      distance: "50m",
      members: 34,
      color: "#FF9B9B",
    },
    {
      id: 2,
      name: "Bairro Jardim das Flores",
      distance: "200m",
      members: 82,
      color: "#A8E6E3",
    },
    {
      id: 3,
      name: "Rua das Palmeiras",
      distance: "350m",
      members: 23,
      color: "#FFE5B4",
    },
    {
      id: 4,
      name: "Edifício Sunset",
      distance: "400m",
      members: 41,
      color: "#B8A6E3",
    },
    {
      id: 5,
      name: "Vila dos Pets",
      distance: "500m",
      members: 67,
      color: "#FFB6C1",
    },
    {
      id: 6,
      name: "Parque Central",
      distance: "650m",
      members: 95,
      color: "#A8D5E3",
    },
  ];

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-8 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1>Grupos Próximos</h1>
            <Button className="bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 text-white rounded-xl">
              <Plus className="w-5 h-5 mr-2" />
              Criar Grupo
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar grupos..."
              className="h-12 pl-12 rounded-2xl bg-input-background border-0"
            />
          </div>
        </div>
      </div>

      {/* Groups Grid */}
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {groups.map((group) => (
              <GroupCard
                key={group.id}
                name={group.name}
                distance={group.distance}
                members={group.members}
                color={group.color}
                onClick={() => onNavigate("timeline")}
              />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
