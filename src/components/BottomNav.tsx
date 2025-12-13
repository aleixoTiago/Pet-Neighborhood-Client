import { Home, Users, UserRound, User } from "lucide-react";

interface BottomNavProps {
  active: "home" | "groups" | "friends" | "profile";
  onNavigate: (screen: string) => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Início", screen: "timeline" },
    { id: "groups", icon: Users, label: "Grupos", screen: "groups" },
    { id: "friends", icon: UserRound, label: "Amigos", screen: "friends" },
    { id: "profile", icon: User, label: "Perfil", screen: "profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-20 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.screen)}
              className="flex flex-col items-center gap-1 min-w-0 flex-1 py-2"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? "text-[#FF9B9B]" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? "text-[#FF9B9B]" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
