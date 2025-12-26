import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BottomNav } from "./BottomNav";
import { UserPlus, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CloseFriendsScreen() {
  const onNavigate = useNavigate();
  const friends = [
    {
      id: 1,
      name: "Maria Silva",
      petName: "Thor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 302",
    },
    {
      id: 2,
      name: "João Pedro",
      petName: "Bolt",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1662600405336-cb1682222347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwcHVwcHl8ZW58MXx8fHwxNzYzNjQ5OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 205",
    },
    {
      id: 3,
      name: "Ana Costa",
      petName: "Mel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNzIwNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Apto 101",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="p-4 space-y-4">
          <h2 className="text-center">Amigos Próximos</h2>
          <Button
            className="w-full h-12 bg-[#A8E6E3] hover:bg-[#A8E6E3]/90 text-[#2C3E50] rounded-2xl"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Adicionar Amigos
          </Button>
        </div>
      </div>

      {/* Friends List */}
      <div className="p-4 space-y-3">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="bg-card rounded-2xl p-5 shadow-sm border border-border"
          >
            <div className="flex items-center gap-4">
              {/* Avatars */}
              <div className="relative">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <Avatar className="w-10 h-10 absolute -bottom-1 -right-1 border-4 border-card">
                  <AvatarImage src={friend.petAvatar} />
                  <AvatarFallback>{friend.petName[0]}</AvatarFallback>
                </Avatar>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-medium">{friend.name}</p>
                <p className="text-sm text-muted-foreground">
                  Pet: {friend.petName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {friend.location}
                </p>
              </div>

              {/* Message Button */}
              <button className="p-3 bg-[#FFE5B4] rounded-full hover:bg-[#FFE5B4]/90">
                <MessageCircle className="w-5 h-5 text-[#2C3E50]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State Message */}
      {friends.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <UserPlus className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="mb-2">Nenhum amigo próximo ainda</h3>
          <p className="text-muted-foreground mb-4">
            Adicione vizinhos que você conhece bem para compartilhar atualizações exclusivas
          </p>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav active="friends" onNavigate={onNavigate} />
    </div>
  );
}
