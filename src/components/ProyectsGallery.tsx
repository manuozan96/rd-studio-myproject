import React from "react";
import Link from "next/link";
import Image from "next/image";
import Brigada from "../../public/Brigada.png";
import Chicharron from "../../public/Chicharron.png";
import Kod from "../../public/Kod.png";
import Button from "./Button";

const ProyectsGallery = () => {
  return (
    <div className="bg-transparent ml-7 y-7 gap-y-7 mt-14 mb-24">
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-60">
            <Image src={Brigada} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40">
          <p className="text-dm-sans text-white px-4 uppercase">
            brigada
            <br />
            training lab
          </p>
        </div>
      </div>

      {/* Segunda imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Chicharron} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40  ">
          <p className="text-dm-sans px-4 uppercase z-40">
            love
            <br />
            chicharrón
          </p>
        </div>
      </div>

      {/* Tercera imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="">
            <Image src={Brigada} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40">
          <p className="text-dm-sans px-4 uppercase z-40">
            nimi´s
            <br />
            shawarma
          </p>
        </div>
      </div>

      {/* Cuarta imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Kod} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40">
          <p className="text-dm-sans px-4 uppercase z-40">
            kod
            <br />
            burguer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProyectsGallery;
