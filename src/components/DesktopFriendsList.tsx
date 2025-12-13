import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { MessageCircle, UserPlus } from "lucide-react";
import { Button } from "./ui/button";

export function DesktopFriendsList() {
  const friends = [
    {
      id: 1,
      name: "Maria Silva",
      petName: "Thor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      online: true,
    },
    {
      id: 2,
      name: "João Pedro",
      petName: "Bolt",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1662600405336-cb1682222347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwcHVwcHl8ZW58MXx8fHwxNzYzNjQ5OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      online: true,
    },
    {
      id: 3,
      name: "Ana Costa",
      petName: "Mel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNzIwNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      online: false,
    },
    {
      id: 4,
      name: "Carlos Santos",
      petName: "Rex",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      petAvatar: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      online: false,
    },
  ];

  return (
    <div className="w-80 bg-white border-l border-border h-screen sticky top-0 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h3 className="mb-4">Amigos Próximos</h3>
        <Button
          className="w-full h-10 bg-[#A8E6E3] hover:bg-[#A8E6E3]/90 text-[#2C3E50] rounded-xl text-sm"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Adicionar Amigos
        </Button>
      </div>

      {/* Friends List */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="rounded-xl p-3 hover:bg-muted transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {/* Avatars */}
                <div className="relative flex-shrink-0">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={friend.avatar} />
                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-7 h-7 absolute -bottom-1 -right-1 border-2 border-white">
                    <AvatarImage src={friend.petAvatar} />
                    <AvatarFallback>{friend.petName[0]}</AvatarFallback>
                  </Avatar>
                  {friend.online && (
                    <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{friend.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {friend.petName}
                  </p>
                </div>

                {/* Message Icon */}
                <button className="p-2 hover:bg-[#FFE5B4] rounded-lg transition-colors">
                  <MessageCircle className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
