"use client";

import { CardSelector } from "./card-selector";

type UserType = "Client" | "Entrepreneur";

interface UserTypeContainerProps {
  onUserTypeSelect: (userType: UserType) => void;
  selectedUserType: UserType | null;
}

export function UserTypeContainer({
  onUserTypeSelect,
  selectedUserType,
}: UserTypeContainerProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4 w-[380px] h-full py-4">
        <CardSelector
          username="Cliente"
          selected={selectedUserType === "Client"}
          onSelect={() => onUserTypeSelect("Client")}
        />
        <CardSelector
          username="Empreendedor"
          selected={selectedUserType === "Entrepreneur"}
          onSelect={() => onUserTypeSelect("Entrepreneur")}
        />
      </div>
    </div>
  );
}
