// app/(PUBLIC)/cart/CartContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { http } from "@/lib/httpClient";
import { useAuth } from "@/store/AuthProvider";
import { getGuestUserId } from "@/lib/guestUserId";

export type CartItem = {
  _id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (_id: string | number) => void;
  clearCart: () => void;
  updateQuantity: (_id: string | number, newQty: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored && stored !== undefined && stored !== "undefined")
      setCartItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const {
    data: userCart,
    isFetching: fetchingUserCart,
    refetch: fetchUserCart,
  } = useQuery({
    queryKey: ["userCartItems"],
    queryFn: async () => {
      const userId = user?._id || getGuestUserId();
      return (await http.get(`cart/${userId}`)).data;
    },
    enabled: false,
  });

  useEffect(() => {
    fetchUserCart();
  }, [user]);

  useEffect(() => {
    if (userCart && userCart.success && !fetchingUserCart) {
      setCartItems(
        userCart?.data?.items?.map((item: any) => {
          return {
            _id: item.product._id,
            name: item.product.name,
            price: item.product.price,
            image: item.product.images[0]?.url,
            quantity: item.quantity,
          };
        })
      );
    }
  }, [userCart, fetchingUserCart]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p._id === item._id);
      if (existing) {
        return prev.map((p) =>
          p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (_id: string | number) =>
    setCartItems((prev) => prev.filter((p) => p._id !== _id));

  const clearCart = () => setCartItems([]);

  const updateQuantity = (_id: string | number, newQty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, quantity: Math.max(newQty, 1) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
