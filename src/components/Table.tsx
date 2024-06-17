import React from "react";

export const Table = () => {
  return (
    <div className="mr-8 my-8">
      <div className="bg-[#EDEDED] w-full p-4">
        <div className="flex flex-col">
          <div className="flex flex-col justify-start items-start gap-2 p-4">
            <div className="w-full flex justify-between items-center border-b border-neutral-950 py-2">
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                AÑO
              </div>
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                2023
              </div>
            </div>
            <hr className="w-full border-neutral-950" />
            <div className="w-full flex justify-between items-center border-b border-neutral-950 py-2">
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                LOCACIÓN
              </div>
              <div>
                <span className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  BOGOTÁ,
                </span>
                <span className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  COLOMBIA
                </span>
              </div>
            </div>
            <hr className="w-full border-neutral-950" />

            <div className="w-full flex justify-between items-center border-b border-neutral-950 py-2">
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                TAMAÑO
              </div>
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                340 M2
              </div>
            </div>
            <hr className="w-full border-neutral-950" />

            <div className="w-full flex justify-between items-center py-2">
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                ENTREGABLE
              </div>
              <div className="flex">
                <div className="text-neutral-950 text-lg  ml-[50px] mr-[50x] font-normal font-instrument-serif uppercase">
                  DISEÑO INTERIOR / ARQUITECTURA
                </div>
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase  ml-[50x]">
                  CONSTRUCCIÓN / MOBILIARIO
                </div>
              </div>
            </div>
            <hr className="w-full border-neutral-950" />
          </div>

          <div className="h-[324px] p-4 flex flex-col justify-start items-center gap-4">
            <div className="text-center">
              <p className="text-neutral-950 text-lg font-normal font-sans leading-[27px]">
                Aquí una descripción del proyecto
              </p>
              <p className="text-neutral-950 text-lg font-semibold font-sans leading-[27px] -mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <p className="text-neutral-950 text-lg font-normal font-sans leading-[27px] -mt-6">
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
              </p>
              <p className="text-neutral-950 text-lg font-semibold font-sans leading-[27px] -mt-6">
                ex ea commodo consequat.
              </p>
              <p className="text-neutral-950 text-lg font-normal font-sans leading-[27px] -mt-10">
                <br />
                <br /> Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
              </p>
              <p className="text-neutral-950 text-lg font-semibold font-sans leading-[27px] -mt-6">
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
