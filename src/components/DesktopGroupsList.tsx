import { Users, MapPin, Search } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface DesktopGroupsListProps {
  onSelectGroup: (groupId: number) => void;
}

export function DesktopGroupsList({ onSelectGroup }: DesktopGroupsListProps) {
  const groups = [
    {
      id: 1,
      name: "Vista Verde",
      distance: "50m",
      members: 34,
      color: "#FF9B9B",
      active: true,
    },
    {
      id: 2,
      name: "Jardim das Flores",
      distance: "200m",
      members: 82,
      color: "#A8E6E3",
      active: false,
    },
    {
      id: 3,
      name: "Rua das Palmeiras",
      distance: "350m",
      members: 23,
      color: "#FFE5B4",
      active: false,
    },
    {
      id: 4,
      name: "Edifício Sunset",
      distance: "400m",
      members: 41,
      color: "#B8A6E3",
      active: false,
    },
  ];

  return (
    <div className="w-80 bg-white border-l border-border h-screen sticky top-0 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border space-y-4">
        <h3>Meus Grupos</h3>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar grupos..."
            className="h-10 pl-10 rounded-xl bg-input-background border-0"
          />
        </div>
      </div>

      {/* Groups List */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {groups.map((group) => (
            <button
              key={group.id}
              onClick={() => onSelectGroup(group.id)}
              className={`w-full rounded-xl p-4 text-left transition-colors ${
                group.active
                  ? "bg-[#FF9B9B]/10 border-2 border-[#FF9B9B]"
                  : "hover:bg-muted border-2 border-transparent"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: group.color }}
                >
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-sm mb-1">
                    {group.name}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{group.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{group.members}</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
