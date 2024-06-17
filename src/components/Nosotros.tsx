import React from "react";
import Navbar from "./Navbar";
import TransNav from "./TransNav";

const NosotrosCompo = () => {
  const images = [
    {
      src: "/Santi.png",
      name: "Santiago Hernández",
      profession: "Practicante",
    },
    { src: "/Pau.png", name: "Paula Alfonso", profession: "Practicante" },
    { src: "/Palfonso.png", name: "Paula Alfonso", profession: "Practicante" },
    {
      src: "/Santi.png",
      name: "Santiago Hernández",
      profession: "Practicante",
    },
    { src: "/Pau.png", name: "Paula Alfonso", profession: "Practicante" },
    { src: "/Palfonso.png", name: "Paula Alfonso", profession: "Practicante" },
    {
      src: "/Santi.png",
      name: "Santiago Hernández",
      profession: "Practicante",
    },
    { src: "/Pau.png", name: "Paula Alfonso", profession: "Practicante" },
  ];

  return (
    <div className="px-7 bg-nav ">
      <TransNav />
      <div className="grid grid-cols-2 gap-[28px] mt-12">
        <div className="flex flex-col gap-[28px]">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={`Nosotros ${index + 1}`}
                className="w-full"
              />
              <p className="mt-[16px] text-center">
                {image.name}
                <br />
                {image.profession}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[28px]">
          {images.slice(4).map((image, index) => (
            <div key={index + 4} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={`Nosotros ${index + 5}`}
                className="w-full"
              />
              <p className="mt-[16px] text-center ">
                {image.name}
                <br />
                {image.profession}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosotrosCompo;
