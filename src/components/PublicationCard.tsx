import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { CategoryIcon } from "./CategoryIcon";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Publication } from "../models/publication";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm border border-border">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={publication.authorAvatar} />
            <AvatarFallback>{publication.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{publication.author}</p>
            <p className="text-sm text-muted-foreground">
              {publication.created_at}
            </p>
          </div>
        </div>
        <button className="p-2 hover:bg-muted rounded-full">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Category */}
      {/* <div className="mb-3">
        <CategoryIcon category={publication.category} />
      </div> */}

      {/* Content */}
      <p className="mb-4 leading-relaxed">{publication.content}</p>

      {/* Pet Image */}
      {publication.image && (
        <ImageWithFallback
          src={publication.image}
          alt="Pet"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
      )}

      {/* Actions */}
      <div className="flex items-center gap-6 pt-3 border-t border-border">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-[#FF9B9B] transition-colors">
          <Heart className="w-5 h-5" />
          {/* <span className="text-sm">{likes}</span> */}
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-[#A8E6E3] transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">{publication.comments}</span>
        </button>
      </div>
    </div>
  );
}
