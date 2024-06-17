import React from "react";
import CustomText from "./CustomText";

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-hug(430px) h-hug(155px) gap-8">
      {children}
    </div>
  );
};

export default Text;
