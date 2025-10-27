"use client";
import {
  PiMinusBold,
  PiPlusBold,
  PiShoppingCartBold,
  PiSpinnerBold,
} from "react-icons/pi";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { http } from "@/lib/httpClient";
import { useAuth } from "@/store/AuthProvider";
import { getGuestUserId } from "@/lib/guestUserId";
import toast from "react-hot-toast";
import { queryClient } from "@/store/ClientWrapper";
import {useCart} from "@/store/CartContext";

type Props = {
  productId: string;
};

const AddToCart = ({ productId }: Props) => {
  const { user } = useAuth();
  const {invalidateUserCart} = useCart();
  const [quantity, setQuantity] = useState(1);
  const quantityInputWidth = quantity.toString().length + 2;

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  }

  function handleQuantityToggle(mode: "inc" | "dec") {
    if (mode === "inc") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  }

  const { mutate, status } = useMutation({
    mutationFn: async (data: {
      quantity: number;
      productId: string;
      userId: string;
    }) => {
      return (await http.post("cart", data)).data;
    },
    onSuccess(response) {
      if (response.success) {
        toast.success(response.message);
        invalidateUserCart()
      } else {
        toast.error(response.message);
      }
    },
  });

  const handleAddToCart = () => {
    const userId = user?._id || getGuestUserId();
    if (userId) {
      const data = { quantity, productId, userId };
      mutate(data);
    }
  };

  return (
    <div className={"flex gap-2 items-center"}>
      <div className={"flex gap-2 items-center"}>
        <div className={"flex gap-2 items-center"}>
          <button
            disabled={quantity === 1}
            onClick={() => handleQuantityToggle("dec")}
            className={
              "p-2 disabled:border-gray-300 disabled:text-white transition-all duration-200 ease-in-out disabled:bg-gray-200 disabled:cursor-not-allowed bg-gold/20 text-gold border border-gold rounded-md"
            }
          >
            <PiMinusBold />
          </button>
          <input
            onChange={handleQuantityChange}
            id="quantity"
            name="quantity"
            value={quantity}
            min={1}
            style={{
              width: `${quantityInputWidth}ch`,
            }}
            className="border border-gray-300 transition-all duration-200 ease-in-out rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <button
            onClick={() => handleQuantityToggle("inc")}
            className={"p-2 bg-gold/20 text-gold border border-gold rounded-md"}
          >
            <PiPlusBold />
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-gold flex gap-2 items-center text-white px-1 py-1 xsm:px-4 xsm:py-1.5 rounded-md hover:bg-yellow-600 transition"
      >
        {status === "pending" ? (
          <PiSpinnerBold
            className={"animate-spin transition-all duration-200 ease-in-out"}
          />
        ) : (
          <PiShoppingCartBold className={"text-lg"} />
        )}{" "}
        {status === "pending" ? "Adding" : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCart;
