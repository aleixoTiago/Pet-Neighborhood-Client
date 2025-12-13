import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { UserPlus, MessageCircle, Search } from "lucide-react";
import { Input } from "./ui/input";

interface DesktopFriendsScreenProps {
  onNavigate: (screen: string) => void;
}

export function DesktopFriendsScreen({ onNavigate }: DesktopFriendsScreenProps) {
  const friends = [
    {
      id: 1,
      name: "Maria Silva",
      petName: "Thor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 302",
      bio: "Tutora do Thor, adoro passear no parque!",
    },
    {
      id: 2,
      name: "João Pedro",
      petName: "Bolt",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1662600405336-cb1682222347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwcHVwcHl8ZW58MXx8fHwxNzYzNjQ5OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 205",
      bio: "Bolt é cheio de energia e adora brincar!",
    },
    {
      id: 3,
      name: "Ana Costa",
      petName: "Mel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNzIwNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 101",
      bio: "Gateira de plantão! Mel é minha vida.",
    },
    {
      id: 4,
      name: "Carlos Santos",
      petName: "Rex",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 504",
      bio: "Rex é meu melhor amigo de 5 anos.",
    },
    {
      id: 5,
      name: "Paula Oliveira",
      petName: "Luna",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 603",
      bio: "Luna e eu adoramos fazer amigos novos!",
    },
  ];

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-8 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1>Amigos Próximos</h1>
            <Button className="bg-[#A8E6E3] hover:bg-[#A8E6E3]/90 text-[#2C3E50] rounded-xl">
              <UserPlus className="w-5 h-5 mr-2" />
              Adicionar Amigos
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Avatars */}
                  <div className="relative flex-shrink-0">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-12 h-12 absolute -bottom-2 -right-2 border-4 border-white">
                      <AvatarImage src={friend.petAvatar} />
                      <AvatarFallback>{friend.petName[0]}</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-1">{friend.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Pet: {friend.petName}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {friend.location}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {friend.bio}
                    </p>
                  </div>

                  {/* Actions */}
                  <Button
                    size="sm"
                    className="bg-[#FFE5B4] hover:bg-[#FFE5B4]/90 text-[#2C3E50] rounded-xl"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Mensagem
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
