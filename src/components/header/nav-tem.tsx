import Link from "next/link";
import { Typography } from "../typography";

interface NavItemProps {
  href: string;
  label: string;
}

export function NavItem({ href, label }: NavItemProps) {
  return (
    <li>
      <Link href={href} className="relative group">
        <Typography
          variant="body1"
          fontWeight="medium"
          className="transition-transform duration-200 group-hover:scale-105 group-hover:to-brand-button"
        >
          {label}
        </Typography>
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-3 transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>
  );
}
