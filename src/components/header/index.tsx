"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavItem } from "./nav-tem";
import { CartButton } from "./cart-button";
import { Typography } from "../typography";
import { motion } from "framer-motion";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import { NavDropDown } from "./nav-dropdown";
import { useMemo } from "react";
import { User } from "@/types/user";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/partners", label: "Parceiros" },
  { href: "/products", label: "Nossos produtos" },
  { href: "/contact", label: "Fale conosco" },
];

export function NavBar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-50 w-full h- bg-background/95 backdrop-blur shadow-md supports-[backdrop-filter]:bg-background/60 px-20"
    >
      <div className="flex w-full h-fit items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src={"./assets/Logo-RJ.svg"}
            alt="Logo da empresa"
            width={54}
            height={54}
            priority
          />
        </Link>

        <nav className="mobile:hidden flex flex-1 justify-start">
          <ul className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center w-fit h-fit gap-4">
          <ModeToggle />
          {isAuthenticated && <CartButton />}

          {isAuthenticated ? (
            <NavDropDown user={user as User} handleLogout={() => logout()} />
          ) : (
            <div className="flex gap-2">
              <Button asChild variant="outline">
                <Link
                  href="/login"
                  className="dark:text-primary text-brand-3 font-semibold"
                >
                  Entrar
                </Link>
              </Button>
              <Button asChild className="bg-brand-3 hover:bg-brand-5">
                <Link
                  href="/register"
                  className="dark:text-primary font-semibold"
                >
                  Cadastre-se
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
