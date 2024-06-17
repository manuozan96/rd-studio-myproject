// components/ProyectsGallery.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import One from "../../public/One.png";
import Two from "../../public/Two.png";
import Three from "../../public/Three.png";
import Four from "../../public/Four.png";

const ProyectsInterna = () => {
  return (
    <div className="ml-0 y-7 gap-y-7 mt-14">
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={One} alt="Imagen" width={430} height={516} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30"></div>
      </div>

      {/* Segunda imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Two} alt="Imagen" width={430} height={230} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30"></div>
      </div>

      {/* Tercera imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Three} alt="Imagen" width={430} height={516} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30"></div>
      </div>

      {/* Cuarta imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Four} alt="Imagen" width={430} height={516} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30"></div>
      </div>
    </div>
  );
};

export default ProyectsInterna;
