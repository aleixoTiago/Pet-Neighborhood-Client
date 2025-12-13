import { HelpCircle, Baby, Lightbulb, Footprints, Heart } from "lucide-react";

interface CategoryIconProps {
  category: "question" | "pet-sitting" | "product" | "walk" | "matchmaking";
  size?: number;
}

export function CategoryIcon({ category, size = 20 }: CategoryIconProps) {
  const iconProps = { width: size, height: size };

  const categories = {
    question: {
      icon: <HelpCircle {...iconProps} />,
      color: "#A8E6E3",
      label: "Dúvida",
    },
    "pet-sitting": {
      icon: <Baby {...iconProps} />,
      color: "#FFE5B4",
      label: "Pet-sitting",
    },
    product: {
      icon: <Lightbulb {...iconProps} />,
      color: "#FF9B9B",
      label: "Dica",
    },
    walk: {
      icon: <Footprints {...iconProps} />,
      color: "#B8A6E3",
      label: "Passeio",
    },
    matchmaking: {
      icon: <Heart {...iconProps} />,
      color: "#FFB6C1",
      label: "Cruzamento",
    },
  };

  const cat = categories[category];

  return (
    <div className="flex items-center gap-2">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center"
        style={{ backgroundColor: cat.color }}
      >
        <div className="text-white">{cat.icon}</div>
      </div>
      <span className="text-sm text-muted-foreground">{cat.label}</span>
    </div>
  );
}
