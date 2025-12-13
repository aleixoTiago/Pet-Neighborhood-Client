import { PostCard } from "./PostCard";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";

export function DesktopTimelineScreen() {
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
    {
      id: 5,
      author: "Paula Oliveira",
      authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      category: "matchmaking" as const,
      content: "A Luna está procurando um namorado! Golden Retriever de 2 anos. Interessados?",
      petImage: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 31,
      comments: 19,
      timeAgo: "há 10 horas",
    },
  ];

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-8 py-6">
          <h1 className="mb-4">Grupo Vista Verde</h1>
          
          {/* Tabs */}
          <Tabs defaultValue="timeline">
            <TabsList className="w-full max-w-md grid grid-cols-2 h-12 bg-muted rounded-2xl p-1">
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
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="max-w-3xl mx-auto px-8 py-6 space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
