"use client";

import { useCart } from "./CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="p-10 text-center text-white bg-black min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gold mb-3">
          Your Cart is Empty
        </h2>
        <p className="text-gray-400">Start adding some premium style ✨</p>
      </div>
    );

  return (
    <section className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto pt-8">
        <h1 className="text-center text-4xl font-bold mb-2">
          <span className="border-b-2 border-gold pb-1">Your Cart</span>
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Review your selected items before checkout
        </p>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border border-gray-800 p-4 hover:border-gold transition"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image || "/placeholder.jpg"}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="rounded"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gold text-sm">£{item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-700">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gold hover:text-black transition"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gold hover:text-black transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-1 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <h2 className="text-2xl font-semibold">
            Total: <span className="text-gold">£{total.toFixed(2)}</span>
          </h2>
          <div className="flex gap-4 mt-6 sm:mt-0">
            <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 text-sm uppercase"
            >
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
