import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ContactoLayout {
  children: ReactNode;
}

export const ContactoLayout = ({ children }: ContactoLayout) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="relative w-[430px] h-[932px] bg-cover bg-no-repeat shadow-md rounded-lg -y-auto no-scrollbar">
        <div className="bg-gradient-to-t from-transparent to-transparent bg-[url('/Nav.png')] bg-opacity-10 bg-cover bg-no-repeat">
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
