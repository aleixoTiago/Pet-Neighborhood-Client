import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import { Pet } from "../models/pet";


interface PetCardProps {
  pet: Pet;
  onNavigate: (screen: string) => void;
}

const calculateAge = (birthDate: number) => {
    const ageDifMs = Date.now() - birthDate;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}   

export function PetCard({ pet }: PetCardProps) {
    return (<div
                key={pet.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Avatars */}
                  <div className="relative flex-shrink-0">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={pet.avatar} />
                      <AvatarFallback>{pet.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-1">{pet.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Nome: {pet.name}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {pet.bio}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {pet.especie}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {pet.raca}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {calculateAge(pet.dataNascimento)} anos
                    </p>
                  </div>

                  {/* Actions */}
                  <Button
                    size="sm"
                    className="bg-[#FFE5B4] hover:bg-[#FFE5B4]/90 text-[#2C3E50] rounded-xl"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                </div>
              </div>)
}