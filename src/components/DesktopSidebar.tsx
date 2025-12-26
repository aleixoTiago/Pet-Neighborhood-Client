import { Home, Users, UserRound, User, PawPrint, LogOut, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface DesktopSidebarProps {
  active: "timeline" | "groups" | "friends" | "pets" | "profile";
  onNavigate: (screen: string) => void;
}

export function DesktopSidebar({ active, onNavigate }: DesktopSidebarProps) {
  const navItems = [
    { id: "timeline", icon: Home, label: "Início" },
    { id: "groups", icon: Users, label: "Grupos" },
    { id: "friends", icon: UserRound, label: "Amigos Próximos" },
    { id: "pets", icon: PawPrint, label: "Pets" },
    { id: "profile", icon: User, label: "Perfil" },
  ];

  return (
    <div className="w-64 bg-white border-r border-border h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#FF9B9B] to-[#FF9B9B]/80 rounded-2xl p-3">
            <PawPrint className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="leading-tight">Pet Neighborhood</h2>
            <p className="text-xs text-muted-foreground">Vista Verde</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-[#FF9B9B] text-white"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* New Post Button */}
      <div className="p-4 border-t border-border">
        <Button
          onClick={() => onNavigate("create-post")}
          className="w-full h-12 bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 text-white rounded-xl"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nova Publicação
        </Button>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={() => onNavigate("welcome")}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}
