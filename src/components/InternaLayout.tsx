import { ReactNode } from "react";
import Footer from "./Footer";

interface IntProps {
  children: ReactNode;
}

const InternaLayout = ({ children }: IntProps) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center fixed">
      <div className="w-[430px] h-[932px] bg-[#EDEDED] overflow-hidden no-scrollbar">
        <div className="bg-[#EDEDED] relative z-10">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default InternaLayout;
