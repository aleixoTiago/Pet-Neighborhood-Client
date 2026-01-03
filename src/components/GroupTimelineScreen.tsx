import { LucideArrowBigUpDash, Plus } from "lucide-react";
import { PublicationCard } from "./PublicationCard";
import { BottomNav } from "./BottomNav";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { useNavigate } from "react-router-dom";
// import { posts } from "../mocks/publicationMockup";
import { usePublications } from "../contexts/PublicationProvider";

export function GroupTimelineScreen() {
  const onNavigate = useNavigate();
  const { publications, loading, error } = usePublications();

  //  const [posts, setPosts] = useState<Post[]>([]);

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
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
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
