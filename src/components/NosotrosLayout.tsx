import { ReactNode } from "react";
import Footer from "./Footer";

interface NosotrosLayoutProps {
  children: ReactNode;
}

const NosotrosLayout = ({ children }: NosotrosLayoutProps) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center ">
      <div className="bg-back w-[430px] h-[932px] relative z-50">
        <div className="z-50 relative w-[430px] h-[932px] overflow-hidden  no-scrollbar">
          <div className="bg-transparent relative z-10">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NosotrosLayout;

// bg-gradient-to-b from-transparent to-transparent bg-[url('/NavBlack.png')]

// bg-cover bg-no-repeat to-[#EDEDED] from-transparent bg-[url('/NavBlack.jpg')] bg-opacity-10
