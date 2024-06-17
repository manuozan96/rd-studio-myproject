import React, { ReactNode } from "react";

interface MainGralProps {
  children: ReactNode;
}

const MainGral = ({ children }: MainGralProps) => {
  return (
    <div className="w-430 h-932 overflow-hidden no-scrollbar">{children}</div>
  );
};

export default MainGral;
