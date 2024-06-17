import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Button from "./Button";
import { Table } from "./Table";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-back w-[430px] h-[932px] z-50">
        <div className="w-[430px] h-[932px] overflow-hidden no-scrollbar">
          <Navbar />
          <div className="bg-transparent relative z-10">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;

// bg-gradient-to-b from-transparent to-transparent bg-[url('/NavBlack.png')]

// bg-cover bg-no-repeat to-[#EDEDED] from-transparent bg-[url('/NavBlack.jpg')] bg-opacity-10
