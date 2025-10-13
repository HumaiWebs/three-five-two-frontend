"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/(PUBLIC)/cart/CartContext";

export default function CartButton() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-flex items-center">
      <ShoppingCart className="w-6 h-6 text-gold" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
