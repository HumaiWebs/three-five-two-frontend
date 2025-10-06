
import FooterSection from "@/components/ui/layout/Footer";
import Header from "@/components/ui/layout/Header";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
     <FooterSection />
    </>
  );
};

export default PublicLayout;
