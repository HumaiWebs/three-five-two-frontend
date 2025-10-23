"use client";

import { useQuery } from "@tanstack/react-query";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import { http } from "@/lib/httpClient";
import { getGuestUserId } from "@/lib/guestUserId";
import Loader from "@/components/global/Loader";

export default function CartPage() {
  const { data: cartItems, isFetching } = useQuery<CartItem[]>({
    queryKey: ["cartPageCartItems"],
    queryFn: async () => {
      const userId = getGuestUserId();
      return (await http.get(`/cart/${userId}`)).data.data.items.map(
        (item: any) => {
          return {
            _id: item.product._id,
            name: item.product.name,
            price: item.product.price,
            image: item.product.images[0]?.url,
            quantity: item.quantity,
          };
        }
      );
    },
  });

  const total = cartItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems?.length === 0)
    return (
      <div className="p-10 text-center text-white bg-black min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gold mb-3">
          Your Cart is Empty
        </h2>
        <p className="text-gray-400">Start adding some premium style ✨</p>
      </div>
    );

  if (isFetching)
    return (
      <div className="w-full p-4">
        <Loader message="Loading cart items" />
      </div>
    );

  return (
    <section className="bg-black text-white min-h-screen px-3 ssm:px-6 py-16">
      <div className="max-w-4xl mx-auto pt-8">
        <h1 className="text-center text-4xl font-bold mb-2">
          <span className="border-b-2 border-gold pb-1">Your Cart</span>
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Review your selected items before checkout
        </p>

        <div className="space-y-6">
          {cartItems?.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <h2 className="text-2xl font-semibold">
            Total: <span className="text-gold">£{total?.toFixed(2)}</span>
          </h2>
          <div className="flex gap-4 mt-6 sm:mt-0">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 text-sm uppercase">
              Clear Cart
            </button>
            <button className="bg-gold text-black px-6 py-2 text-sm uppercase hover:bg-yellow-600 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
