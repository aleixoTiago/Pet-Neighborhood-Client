import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { X, Image as ImageIcon, HelpCircle, Baby, Lightbulb, Footprints, Heart } from "lucide-react";
import { useState } from "react";

interface DesktopCreatePostScreenProps {
  onClose: () => void;
}

export function DesktopCreatePostScreen({ onClose }: DesktopCreatePostScreenProps) {
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2>Nova Publicação</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Category Selector */}
          <div className="space-y-3">
            <label className="block">Categoria</label>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? "border-transparent shadow-md"
                        : "border-border bg-card"
                    }`}
                    style={{
                      backgroundColor: isSelected ? category.color : undefined,
                      color: isSelected ? "white" : undefined,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.label}</span>
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
              className="min-h-40 rounded-2xl bg-input-background border-0 resize-none"
            />
          </div>

          {/* Photo Upload */}
          <button className="w-full h-40 rounded-2xl border-2 border-dashed border-border bg-muted/30 hover:bg-muted/50 transition-colors flex flex-col items-center justify-center gap-3">
            <ImageIcon className="w-10 h-10 text-muted-foreground" />
            <div className="text-center">
              <p className="font-medium text-muted-foreground">
                Adicionar foto do pet
              </p>
              <p className="text-sm text-muted-foreground">
                Clique para selecionar ou arraste aqui
              </p>
            </div>
          </button>

          {/* Share With Selector */}
          <div className="space-y-3">
            <label className="block">Compartilhar com</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setShareWith("group")}
                className={`h-16 rounded-2xl border-2 transition-all ${
                  shareWith === "group"
                    ? "bg-[#FF9B9B] border-[#FF9B9B] text-white shadow-md"
                    : "bg-card border-border hover:bg-muted"
                }`}
              >
                Grupo
              </button>
              <button
                onClick={() => setShareWith("friends")}
                className={`h-16 rounded-2xl border-2 transition-all ${
                  shareWith === "friends"
                    ? "bg-[#A8E6E3] border-[#A8E6E3] text-white shadow-md"
                    : "bg-card border-border hover:bg-muted"
                }`}
              >
                Amigos Próximos
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 h-12 rounded-xl"
          >
            Cancelar
          </Button>
          <Button
            onClick={onClose}
            className="flex-1 h-12 bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 text-white rounded-xl"
          >
            Publicar
          </Button>
        </div>
      </div>
    </div>
  );
}
