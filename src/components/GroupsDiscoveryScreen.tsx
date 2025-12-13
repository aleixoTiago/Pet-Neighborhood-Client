import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Plus } from "lucide-react";
import { GroupCard } from "./GroupCard";

interface GroupsDiscoveryScreenProps {
  onNavigate: (screen: string) => void;
}

export function GroupsDiscoveryScreen({ onNavigate }: GroupsDiscoveryScreenProps) {
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
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="p-4 space-y-4">
          <h2 className="text-center">Grupos Próximos</h2>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar grupos..."
              className="h-12 pl-12 rounded-2xl bg-input-background border-0"
            />
          </div>
        </div>
      </div>

      {/* Groups List */}
      <div className="p-4 space-y-3">
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

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 w-16 h-16 rounded-full shadow-lg flex items-center justify-center">
        <Plus className="w-7 h-7 text-white" />
      </button>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-20" />
    </div>
  );
}
