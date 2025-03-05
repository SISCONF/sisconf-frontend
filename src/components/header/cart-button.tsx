import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function CartButton() {
  return (
    <Link href="/products-summary" aria-label="Carrinho de compras">
      <ShoppingBag
        className="text-primary  hover:text-primary/80 transition-colors"
        width={24}
        height={24}
      />
    </Link>
  );
}
