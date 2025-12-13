import { Plus } from "lucide-react";
import { PostCard } from "./PostCard";
import { BottomNav } from "./BottomNav";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

interface GroupTimelineScreenProps {
  onNavigate: (screen: string) => void;
}

export function GroupTimelineScreen({ onNavigate }: GroupTimelineScreenProps) {
  const posts = [
    {
      id: 1,
      author: "Maria Silva",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      category: "question" as const,
      content: "Alguém conhece um bom veterinário na região? Preciso fazer um check-up no Thor!",
      likes: 12,
      comments: 8,
      timeAgo: "há 2 horas",
    },
    {
      id: 2,
      author: "João Pedro",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "walk" as const,
      content: "Organizando um passeio coletivo amanhã às 17h no parque! Quem topa? 🐕",
      petImage: "https://images.unsplash.com/photo-1728359802819-e1eebdfcfdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2dzJTIwcGxheWluZyUyMHBhcmt8ZW58MXx8fHwxNzYzNjUwOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 24,
      comments: 15,
      timeAgo: "há 4 horas",
    },
    {
      id: 3,
      author: "Ana Costa",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      category: "product" as const,
      content: "Descobri uma ração incrível que o Mel adorou! Super recomendo para gatos exigentes 😺",
      petImage: "https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNzIwNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 18,
      comments: 6,
      timeAgo: "há 6 horas",
    },
    {
      id: 4,
      author: "Carlos Santos",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      category: "pet-sitting" as const,
      content: "Vou viajar semana que vem. Alguém disponível para cuidar do Rex por 3 dias?",
      likes: 7,
      comments: 11,
      timeAgo: "há 8 horas",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="p-4">
          <h2 className="text-center">Vista Verde</h2>
          
          {/* Tabs */}
          <Tabs defaultValue="timeline" className="mt-4">
            <TabsList className="w-full grid grid-cols-2 h-12 bg-muted rounded-2xl p-1">
              <TabsTrigger
                value="timeline"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Timeline
              </TabsTrigger>
              <TabsTrigger
                value="friends"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Amigos Próximos
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="p-4 space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => onNavigate("create-post")}
        className="fixed bottom-24 right-6 bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-20"
      >
        <Plus className="w-7 h-7 text-white" />
      </button>

      {/* Bottom Navigation */}
      <BottomNav active="home" onNavigate={onNavigate} />
    </div>
  );
}
