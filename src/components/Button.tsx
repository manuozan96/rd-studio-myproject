import React from "react";

const Button = () => {
  return (
    <div className="mt-14">
      <div className="p-4 pl-7 w-[374px] justify-center items-center inline-flex cursor-pointer">
        <button className="bg-transparent w-full border border-rojo text-rojo px-6 py-4 font-['DM Sans'] text-[24px] font-medium cursor-pointer hover:bg-rojo hover:text-off-white transition duration-500 ease-in-out">
          Siguiente proyecto
        </button>
      </div>
    </div>
  );
};

export default Button;
