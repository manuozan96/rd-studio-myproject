import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Button from "./Button";

interface IntProps {
  children: ReactNode;
}

// const InternaLayout = ({ children }: IntProps) => {
//   return (
//     <div className="relative min-h-screen flex justify-center items-center ">
//       <div className="bg-[url('/HeaderInterna.png')] to-[#EDEDED] from-transparent w-[430px] h-[932px] overflow-y-auto no-scrollbar">
//           <Navbar />
//           <div className="bg-[#EDEDED] relative z-10">{children}</div>
//           <Footer />
//         </div>
//       </div>
//   );
// };

const InternaLayout = ({ children }: IntProps) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center ">
      <div className="w-[430px] h-[932px] bg-[#EDEDED] from-transparent overflow-y-auto no-scrollbar">
        <div className="bg-[#EDEDED] relative z-10">{children}</div>
        <Button />
        <Footer />
      </div>
    </div>
  );
};

export default InternaLayout;

// bg-gradient-to-b from-transparent to-transparent bg-[url('/NavBlack.png')]

// bg-cover bg-no-repeat to-[#EDEDED] from-transparent bg-[url('/NavBlack.jpg')] bg-opacity-10
