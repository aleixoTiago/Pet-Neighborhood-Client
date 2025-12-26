import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowLeft, Upload, Camera } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface SignUpScreenProps {
  onNavigate: (screen: string) => void;
}

export function SignUpScreen() {
  const [petPhoto, setPetPhoto] = useState<string | null>(null);
  const onNavigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="flex items-center h-16 px-4">
          <button
            onClick={() => onNavigate("welcome")}
            className="p-2 -ml-2 hover:bg-muted rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="flex-1 text-center pr-10">Criar Conta</h2>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6 max-w-lg mx-auto">
        {/* Pet Photo Upload */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            {petPhoto ? (
              <img
                src={petPhoto}
                alt="Pet"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#A8E6E3]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#E8EFF2] border-4 border-[#A8E6E3] flex items-center justify-center">
                <Camera className="w-10 h-10 text-[#7B8A96]" />
              </div>
            )}
            <button className="absolute bottom-0 right-0 bg-[#FF9B9B] p-2 rounded-full shadow-lg">
              <Upload className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground">Foto do seu pet</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Seu Nome</Label>
            <Input
              id="name"
              placeholder="Ex: Maria Silva"
              className="h-12 rounded-xl bg-input-background border-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="h-12 rounded-xl bg-input-background border-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Mínimo 8 caracteres"
              className="h-12 rounded-xl bg-input-background border-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Endereço / Condomínio</Label>
            <Input
              id="address"
              placeholder="Ex: Condomínio Vista Verde"
              className="h-12 rounded-xl bg-input-background border-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="petName">Nome do Pet</Label>
            <Input
              id="petName"
              placeholder="Ex: Thor"
              className="h-12 rounded-xl bg-input-background border-0"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={() => onNavigate("timeline")}
          className="w-full h-14 bg-[#FF9B9B] hover:bg-[#FF9B9B]/90 text-[#2C3E50] rounded-2xl shadow-md mt-8"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
