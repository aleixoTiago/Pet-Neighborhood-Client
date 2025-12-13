import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { CategoryIcon } from "./CategoryIcon";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PostCardProps {
  author: string;
  authorAvatar: string;
  category: "question" | "pet-sitting" | "product" | "walk" | "matchmaking";
  content: string;
  petImage?: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

export function PostCard({
  author,
  authorAvatar,
  category,
  content,
  petImage,
  likes,
  comments,
  timeAgo,
}: PostCardProps) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm border border-border">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={authorAvatar} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-muted rounded-full">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Category */}
      <div className="mb-3">
        <CategoryIcon category={category} />
      </div>

      {/* Content */}
      <p className="mb-4 leading-relaxed">{content}</p>

      {/* Pet Image */}
      {petImage && (
        <ImageWithFallback
          src={petImage}
          alt="Pet"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
      )}

      {/* Actions */}
      <div className="flex items-center gap-6 pt-3 border-t border-border">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-[#FF9B9B] transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-sm">{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-[#A8E6E3] transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">{comments}</span>
        </button>
      </div>
    </div>
  );
}
