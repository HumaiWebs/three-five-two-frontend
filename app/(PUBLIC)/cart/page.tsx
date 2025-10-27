"use client";

import CartItem from "../../../components/cart/CartItem";
import {useCart} from "@/store/CartContext";
import {useMutation} from "@tanstack/react-query";
import {http} from "@/lib/httpClient";
import {useAuth} from "@/store/AuthProvider";
import {getGuestUserId} from "@/lib/guestUserId";
import Loader from "@/components/global/Loader";
import ClearCart from "@/components/cart/ClearCart";
import Link from "next/link";
import {PiShoppingBagBold} from "react-icons/pi";

export default function CartPage() {
    const {cartItems, invalidateUserCart} = useCart();
    const {user} = useAuth();

    const {mutate: clearCart, status} = useMutation({
        mutationFn: async () => {
            const userId = user?._id || getGuestUserId();
            return (await http.delete(`cart/clear/${userId}`)).data
        },
        onSuccess: (response) => {
            if (response.success) {
                invalidateUserCart();
            }
        }
    })

    const total = cartItems?.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    if (cartItems?.length === 0)
        return (
            <div
                className="p-10 text-center text-white bg-black min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-gold mb-3">
                    Your Cart is Empty
                </h2>
                <p className="text-gray-400">Start adding some premium style ✨</p>
                <Link href={'/shop'} className={"flex text-gold mt-2 gap-4 items-center"}><PiShoppingBagBold className={"text-2xl"}/>
                    <span>Continue Shopping</span></Link>
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
                        <CartItem key={item._id} item={item}/>
                    ))}
                </div>

                {/* Footer Section */}
                <div
                    className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-6">
                    <h2 className="text-2xl font-semibold">
                        Total: <span className="text-gold">£{total?.toFixed(2)}</span>
                    </h2>
                    <div className="flex gap-4 mt-6 sm:mt-0">
                        <ClearCart/>
                        <button
                            className="bg-gold text-black px-6 py-2 text-sm uppercase hover:bg-yellow-600 transition">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
