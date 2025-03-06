import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import type { User } from "@/types/user";
import { Edit, Loader2, Save, X } from "lucide-react";

interface ProfileHeaderProps {
  profile: User;
  isEditing: boolean;
  isLoading?: boolean;
  onEditToggle: () => void;
  handleSave: () => void;
}
export function ProfileHeader({
  profile,
  isEditing,
  isLoading = false,
  onEditToggle,
  handleSave,
}: ProfileHeaderProps) {
  return (
    <CardHeader className="flex flex-row items-center justify-between">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20">
          <AvatarImage
            src="/placeholder.svg"
            alt={`${profile.person.firstName} ${profile.person.lastName}`}
          />
          <AvatarFallback>
            {profile.person.firstName[0]}
            {profile.person.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-bold">
            {profile.person.firstName} {profile.person.lastName}
          </CardTitle>
          <p className="text-muted-foreground">{profile.category}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onEditToggle} disabled={isLoading}>
          {isEditing ? (
            <X className="mr-2 h-4 w-4" />
          ) : (
            <Edit className="mr-2 h-4 w-4" />
          )}
          {isEditing ? "Cancelar" : "Editar"}
        </Button>
        {isEditing && (
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="bg-brand-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </CardHeader>
  );
}
