"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavItem } from "./nav-tem";
import { CartButton } from "./cart-button";
import { Typography } from "../typography";
import { motion } from "framer-motion";
import { ModeToggle } from "../theme/mode-toggle";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/partners", label: "Parceiros" },
  { href: "/orders", label: "Nossos produtos" },
  { href: "/contact", label: "Fale conosco" },
];

export function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-50 w-full h- bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-20"
    >
      <div className="flex w-full h-fit items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center">
          <Typography variant={"h5"} fontWeight={"bold"}>
            RJ Frutas
          </Typography>
        </Link>

        <nav className="mobile:hidden flex flex-1 justify-start">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center w-fit h-fit gap-4">
          <ModeToggle />
          <CartButton />
          <Avatar>
            <AvatarImage src="/avatar.svg" alt="Foto de perfil" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.header>
  );
}
