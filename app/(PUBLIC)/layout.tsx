import FooterSection from "@/components/ui/layout/Footer";
import Header from "@/components/ui/layout/Header";
import React from "react";
import { CartProvider } from "./cart/CartContext";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider>
        {" "}
        <Header />
        {children}
        <FooterSection />
      </CartProvider>
    </>
  );
};

export default PublicLayout;
