import React from "react";
import Image from "next/image";
import TransNav from "./TransNav";

interface ImageProps {
  src: string;
  name: string;
  profession: string;
  id?: number;
}

interface ImageElementProps {
  image: ImageProps;
  index: number;
}

const ImageElement: React.FC<ImageElementProps> = ({ image, index }) => (
  <div key={index} className="flex flex-col items-center">
    <Image
      src={image.src}
      alt={`Nosotros ${index + 1}`}
      width={178}
      height={249}
      className="w-full"
    />
    <p className="mt-4 text-center font-bold">
      {image.name}
      <br />
      {image.profession}
    </p>
  </div>
);

const NosotrosCompo: React.FC = () => {
  const images: ImageProps[] = [
    {
      src: "/Santi.png",
      name: "Santiago Hernández",
      profession: "Practicante",
      id: 1,
    },
    {
      src: "/Pau.png",
      name: "Paula Alfonso",
      profession: "Practicante",
    },
    {
      src: "/Palfonso.png",
      name: "Paula Alfonso",
      profession: "Practicante",
    },
    {
      src: "/Santi.png",
      name: "Santiago Hernández",
      profession: "Practicante",
      id: 1,
    },
    {
      src: "/Pau.png",
      name: "Paula Alfonso",
      profession: "Practicante",
    },
    {
      src: "/Palfonso.png",
      name: "Paula Alfonso",
      profession: "Practicante",
    },
    {
      src: "/Santi.png",
      name: "Santiago Hernández",
      profession: "Practicante",
      id: 1,
    },
    {
      src: "/Pau.png",
      name: "Paula Alfonso",
      profession: "Practicante",
    },
  ];

  return (
    <div className="px-7 mb-20">
      <div>
        <h1 className="font-dm-sans text-36px font-400 leading-46.87px tracking-0.1em text-left text-custom-green">
          Nuestro
        </h1>
        <h2 className="font-dm-sans text-36px font-400 leading-46.87px tracking-0.1em text-left text-custom-green -mt-4">
          Equipo
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-7 mt-12">
        {images.map((image, index) => (
          <ImageElement image={image} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NosotrosCompo;
