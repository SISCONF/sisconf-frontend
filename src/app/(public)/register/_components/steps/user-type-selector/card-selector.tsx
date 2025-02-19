import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { User, Banknote } from "lucide-react";
import { Typography } from "@/components/typography";

interface CardSelectorProps {
  username: "Cliente" | "Empreendedor";
  selected?: boolean;
  onSelect?: () => void;
}

export function CardSelector({
  username,
  selected = false,
  onSelect,
}: CardSelectorProps) {
  return (
    <Card
      className={cn([
        "flex items-center justify-center w-[11.25rem] h-[100px] bg-white border-2 border-brand-3 cursor-pointer transition-all duration-200 hover:shadow-md",
        selected && "bg-brand-3 border-brand-3",
      ])}
      onClick={onSelect}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        {username === "Cliente" ? (
          <User
            size={24}
            className={selected ? "text-white" : "text-[#4CAF50]"}
          />
        ) : (
          <Banknote
            size={24}
            className={selected ? "text-white" : "text-[#4CAF50]"}
          />
        )}
        <Typography
          variant="body2"
          className={selected ? "text-white" : "text-brand-3"}
        >
          {username}
        </Typography>
      </div>
    </Card>
  );
}
