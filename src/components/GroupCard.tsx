import { Users, MapPin } from "lucide-react";

interface GroupCardProps {
  name: string;
  distance: string;
  members: number;
  color: string;
  onClick: () => void;
}

export function GroupCard({ name, distance, members, color, onClick }: GroupCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-border text-left"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          <Users className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="mb-2 truncate">{name}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{members} membros</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
