"use client";

import { useState } from "react";
import { CardSelector } from "./card-selector";

type UserType = "Client" | "Entrepreneur";

export function UserTypeContainer() {
  const [selectedType, setSelectedType] = useState<UserType | null>(null);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4 w-[380px] h-full py-4">
        <CardSelector
          username="Cliente"
          selected={selectedType === "Client"}
          onSelect={() => setSelectedType("Client")}
        />

        <CardSelector
          username="Empreendedor"
          selected={selectedType === "Entrepreneur"}
          onSelect={() => setSelectedType("Entrepreneur")}
        />
      </div>
    </div>
  );
}
