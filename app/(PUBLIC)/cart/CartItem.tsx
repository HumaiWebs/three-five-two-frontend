import React, { useEffect, useState } from "react";
import { type CartItem } from "./CartContext";
import Image from "next/image";
import { useDebounceValue } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";
import { getGuestUserId } from "@/lib/guestUserId";
import { http } from "@/lib/httpClient";
import { PiMinus, PiPlus, PiSpinner } from "react-icons/pi";

type Props = {
  item: CartItem;
};

const CartItem = ({ item }: Props) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [changedQuantity, setChangedQuantity] = useDebounceValue(quantity, 500);

  const { mutate: updateQuantity, status } = useMutation({
    mutationFn: async () => {
      const userId = getGuestUserId();
      const response = (
        await http.post("/cart", {
          productId: item._id,
          quantity: changedQuantity,
          userId,
        })
      ).data;
      return response;
    },
  });

  useEffect(() => {
    updateQuantity();
  }, [changedQuantity]);

  return (
    <div
      key={item._id}
      className="flex items-center justify-between border border-gray-800 p-2 sm:p-4 hover:border-gold transition"
    >
      <div className="flex items-center gap-4">
        <div className="relative min-w-20 w-20 h-20 sm:min-w-24 sm:w-24 sm:h-24 bg-gray-800 rounded p-2">
          <Image
            src={item.image || "/placeholder.jpg"}
            alt={item.name}
            fill
            className="rounded object-contain h-full w-full"
          />
        </div>
        <div>
          <h3 className="text-sm sm:text-lg font-medium">{item.name}</h3>
          <p className="text-gold text-sm">£{item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex max-md:flex-col max-md:items-stretch items-center gap-2 sm:gap-4">
        <div className="flex items-center border border-gray-700">
          <button
            disabled={quantity === 1 || status === "pending"}
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            className={`px-3 py-1 hover:bg-gold disabled:hover:bg-gray-400 ${
              status === "pending"
                ? "disabled:cursor-wait"
                : "disabled:cursor-not-allowed"
            } hover:text-black disabled:bg-gray-500 disabled:text-white transition`}
          >
            {status === "pending" ? (
              <PiSpinner className="animate-spin" />
            ) : (
              <PiMinus />
            )}
          </button>
          <span className="px-4 text-sm">{quantity}</span>
          <button
            disabled={status === "pending"}
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-3 disabled:bg-gray-500 disabled:text-white disabled:cursor-wait py-1 hover:bg-gold hover:text-black transition"
          >
            {status === "pending" ? (
              <PiSpinner className="animate-spin" />
            ) : (
              <PiPlus />
            )}
          </button>
        </div>

        <button
          onClick={() => {}}
          className="bg-red-600 hover:bg-red-700 px-4 py-1 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
