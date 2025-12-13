import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Edit, MapPin, Calendar, Users } from "lucide-react";

interface DesktopProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function DesktopProfileScreen({ onNavigate }: DesktopProfileScreenProps) {
  return (
    <div className="flex-1 bg-background">
      <ScrollArea className="h-screen">
        <div className="max-w-4xl mx-auto px-8 py-8">
          {/* Profile Header Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-border mb-6">
            <div className="flex items-start gap-8">
              {/* Avatars */}
              <div className="relative flex-shrink-0">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <Avatar className="w-24 h-24 absolute -bottom-3 -right-3 border-4 border-white shadow-lg">
                  <AvatarImage src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="mb-2">Maria Silva</h1>
                    <p className="text-muted-foreground mb-3">
                      Tutora do Thor 🐕 | Amante de pets | Vizinha amigável
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Apto 302 - Vista Verde</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Desde Março 2024</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-xl border-2"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-3xl text-[#FF9B9B] mb-1">24</p>
                    <p className="text-sm text-muted-foreground">Publicações</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl text-[#A8E6E3] mb-1">8</p>
                    <p className="text-sm text-muted-foreground">Amigos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl text-[#FFE5B4] mb-1">3</p>
                    <p className="text-sm text-muted-foreground">Grupos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Pet Info Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
              <h2 className="mb-6">Informações do Pet</h2>
              
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="mb-1">Thor</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Golden Retriever • Macho • 3 anos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-[#FFE5B4] text-[#2C3E50] border-0">
                      Vacinado
                    </Badge>
                    <Badge variant="secondary" className="bg-[#A8E6E3] text-[#2C3E50] border-0">
                      Castrado
                    </Badge>
                    <Badge variant="secondary" className="bg-[#FFB6C1] text-[#2C3E50] border-0">
                      Sociável
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thor é um golden super amigável que adora brincar no parque e fazer novos amigos! Ele é muito brincalhão e se dá bem com outros pets.
                </p>
              </div>
            </div>

            {/* Groups Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
              <div className="flex items-center justify-between mb-6">
                <h2>Meus Grupos</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl"
                  onClick={() => onNavigate("groups")}
                >
                  Ver Todos
                </Button>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "Vista Verde", members: 34, color: "#FF9B9B" },
                  { name: "Jardim das Flores", members: 82, color: "#A8E6E3" },
                  { name: "Rua das Palmeiras", members: 23, color: "#FFE5B4" },
                ].map((group, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: group.color }}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{group.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {group.members} membros
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
