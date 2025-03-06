"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut, Settings, ShoppingBag, User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { User } from "@/types/user";
import { Button } from "../ui/button";
import { Typography } from "../typography";

const NAV_DROPDOWN_OPTIONS = [
  { name: "Meu Perfil", path: "/profile" },
  { name: "Meus Pedidos", path: "/" },
  { name: "Configurações", path: "/" },
];

interface NavDropDownProps {
  user: User;
  handleLogout: () => void;
}

export function NavDropDown({ user, handleLogout }: NavDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <Button
        className="flex items-center bg-transparent hover:bg-transparent"
        size={"icon"}
        onClick={() => toggleDropdown()}
      >
        <UserAvatar profile={user} />
      </Button>
      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-[17.5rem] border dark:border-brand-5 bg-background shadow-lg">
          <div className="flex items-center gap-3 p-4">
            <UserAvatar profile={user} />
            <div className="flex flex-col items-start">
              <Typography
                fontWeight={"semibold"}
                className="text-md text-primary"
              >
                {user.person.firstName}
              </Typography>
              <Typography className="text-sm text-muted-foreground">
                {user.person.email}
              </Typography>
            </div>
          </div>
          <Separator />
          <ul className="p-2">
            {NAV_DROPDOWN_OPTIONS.map((option) => (
              <li key={option.name}>
                <MenuOption
                  label={option.name}
                  href={option.path}
                  onClick={() => toggleDropdown()}
                />
              </li>
            ))}

            <Separator className="my-2" />
            <li>
              <Button
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-muted bg-transparent"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function UserAvatar({ profile }: { profile: User }) {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage src="/avatar.svg" alt="Foto de perfil" />
      <AvatarFallback>
        {profile.person.firstName[0]}
        {profile.person.lastName[0]}
      </AvatarFallback>
    </Avatar>
  );
}

const MenuOption = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted"
      onClick={onClick}
    >
      <UserIcon className="h-4 w-4" />
      {label}
    </Link>
  );
};
