import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BottomNav } from "./BottomNav";
import { Edit, Users, LogOut, MapPin, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="p-4">
          <h2 className="text-center">Perfil</h2>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-b from-[#FF9B9B]/20 to-transparent">
        <div className="p-6 space-y-6">
          {/* Avatars */}
          <div className="flex justify-center">
            <div className="relative">
              <Avatar className="w-28 h-28 border-4 border-white shadow-lg">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <Avatar className="w-20 h-20 absolute -bottom-2 -right-2 border-4 border-white shadow-lg">
                <AvatarImage src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* User Info */}
          <div className="text-center space-y-2">
            <h1>Maria Silva</h1>
            <p className="text-muted-foreground">
              Tutora do Thor 🐕 | Amante de pets | Vizinha amigável
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Apto 302</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Desde Mar 2024</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-12 rounded-2xl border-2"
            >
              <Edit className="w-4 h-4 mr-2" />
              Editar Perfil
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-2xl border-2"
              onClick={() => onNavigate("groups")}
            >
              <Users className="w-4 h-4 mr-2" />
              Meus Grupos
            </Button>
          </div>
        </div>
      </div>

      {/* Pet Info Card */}
      <div className="p-6 space-y-4">
        <h3>Informações do Pet</h3>
        <div className="bg-card rounded-2xl p-5 shadow-sm border border-border space-y-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4>Thor</h4>
              <p className="text-sm text-muted-foreground mb-2">
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
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Thor é um golden super amigável que adora brincar no parque e fazer novos amigos!
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 pb-6">
        <div className="bg-card rounded-2xl p-5 shadow-sm border border-border">
          <div className="grid grid-cols-3 divide-x divide-border">
            <div className="text-center px-3">
              <p className="text-2xl text-[#FF9B9B] mb-1">24</p>
              <p className="text-sm text-muted-foreground">Publicações</p>
            </div>
            <div className="text-center px-3">
              <p className="text-2xl text-[#A8E6E3] mb-1">8</p>
              <p className="text-sm text-muted-foreground">Amigos</p>
            </div>
            <div className="text-center px-3">
              <p className="text-2xl text-[#FFE5B4] mb-1">3</p>
              <p className="text-sm text-muted-foreground">Grupos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6 pb-6">
        <Button
          onClick={() => onNavigate("welcome")}
          variant="outline"
          className="w-full h-12 rounded-2xl border-2 text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sair
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="profile" onNavigate={onNavigate} />
    </div>
  );
}
