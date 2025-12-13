import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, Image as ImageIcon, HelpCircle, Baby, Lightbulb, Footprints, Heart } from "lucide-react";
import { useState } from "react";

interface CreatePostScreenProps {
  onNavigate: (screen: string) => void;
}

export function CreatePostScreen({ onNavigate }: CreatePostScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [shareWith, setShareWith] = useState<"group" | "friends">("group");

  const categories = [
    { id: "question", icon: HelpCircle, label: "Dúvida", color: "#A8E6E3" },
    { id: "pet-sitting", icon: Baby, label: "Pet-sitting", color: "#FFE5B4" },
    { id: "product", icon: Lightbulb, label: "Dica", color: "#FF9B9B" },
    { id: "walk", icon: Footprints, label: "Passeio", color: "#B8A6E3" },
    { id: "matchmaking", icon: Heart, label: "Cruzamento", color: "#FFB6C1" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="flex items-center justify-between h-16 px-4">
          <button
            onClick={() => onNavigate("timeline")}
            className="p-2 -ml-2 hover:bg-muted rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2>Nova Publicação</h2>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6 max-w-lg mx-auto">
        {/* Category Selector */}
        <div className="space-y-3">
          <label className="block">Categoria</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? "border-transparent shadow-md"
                      : "border-border bg-card"
                  }`}
                  style={{
                    backgroundColor: isSelected ? category.color : undefined,
                    color: isSelected ? "white" : undefined,
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Text Input */}
        <div className="space-y-2">
          <label className="block">O que você quer compartilhar?</label>
          <Textarea
            placeholder="Escreva aqui..."
            className="min-h-32 rounded-2xl bg-input-background border-0 resize-none"
          />
        </div>

        {/* Photo Upload */}
        <button className="w-full h-32 rounded-2xl border-2 border-dashed border-border bg-muted/30 hover:bg-muted/50 transition-colors flex flex-col items-center justify-center gap-2">
          <ImageIcon className="w-8 h-8 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Adicionar foto do pet
          </span>
        </button>

        {/* Share With Selector */}
        <div className="space-y-3">
          <label className="block">Compartilhar com</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setShareWith("group")}
              className={`h-14 rounded-2xl border-2 transition-all ${
                shareWith === "group"
                  ? "bg-[#FF9B9B] border-[#FF9B9B] text-white"
                  : "bg-card border-border"
              }`}
            >
              Grupo
            </button>
            <button
              onClick={() => setShareWith("friends")}
              className={`h-14 rounded-2xl border-2 transition-all ${
                shareWith === "friends"
                  ? "bg-[#A8E6E3] border-[#A8E6E3] text-white"
                  : "bg-card border-border"
              }`}
            >
              Amigos Próximos
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={() => onNavigate("timeline")}
          className="w-full h-14 bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 text-white rounded-2xl shadow-md mt-8"
        >
          Publicar
        </Button>
      </div>
    </div>
  );
}
