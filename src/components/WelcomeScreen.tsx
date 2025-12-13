import { Button } from "./ui/button";
import { PawPrint } from "lucide-react";

interface WelcomeScreenProps { 
  onNavigate: (screen: string) => void; 
}

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE5B4] via-[#A8E6E3] to-[#FF9B9B] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-full p-8 shadow-lg">
            <PawPrint className="w-20 h-20 text-[#FF9B9B]" />
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-3">
          <h1 className="text-4xl text-[#2C3E50]">Pet Neighborhood</h1>
          <p className="text-lg text-[#2C3E50]/80">
            Conecte-se com os pets da sua vizinhança
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4 pt-8">
          <Button
            onClick={() => onNavigate("signup")}
            className="w-full h-14 bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 text-[#2C3E50] rounded-2xl shadow-md"
          >
            Criar Conta
          </Button>
          <Button
            onClick={() => onNavigate("timeline")}
            variant="outline"
            className="w-full h-14 bg-white/90 hover:bg-white border-2 border-white text-[#2C3E50] rounded-2xl shadow-md"
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
