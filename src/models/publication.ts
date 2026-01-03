export interface Publication {
  id: number;
  author: string;
  authorAvatar: string | null;
  category: string | null;
  content: string;
  image: string | null;
  petImage: Array<string> | null;
  likes: number | null;
  comments: Array<string> | null;
  created_at: string;
}
