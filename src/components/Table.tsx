export const Table = () => {
  return (
    <div className="flex justify-center items-center w-full mt-28 ">
      <div className="bg-[#EDEDED] w-full md:w-[430px] p-4 ">
        <div className="flex flex-col">
          <div className="flex flex-col justify-start items-start gap-2 p-4">
            <div
              className="w-full flex justify-between items-center border-b border-neutral-950 py-2"
              style={{ padding: "2px 28px", justifyContent: "space-between" }}
            >
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                AÑO
              </div>
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase mr-8">
                2023
              </div>
            </div>
            <hr className="w-full border-neutral-950 m-0 px-14 -ml-8" />
            <div
              className="w-full flex justify-between items-center border-b border-neutral-950 py-2"
              style={{ padding: "2px 28px", justifyContent: "space-between" }}
            >
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                LOCACIÓN
              </div>
              <div>
                <span className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase mr-2">
                  BOGOTÁ,
                </span>
                <span className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase mr-8">
                  COLOMBIA
                </span>
              </div>
            </div>
            <hr className="w-full border-neutral-950 m-0 px-14 -ml-8" />
            <div
              className="w-full flex justify-between items-center border-b border-neutral-950 py-2"
              style={{ padding: "2px 28px", justifyContent: "space-between" }}
            >
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                TAMAÑO
              </div>
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase mr-8">
                340 M2
              </div>
            </div>
            <hr className="w-full border-neutral-950 m-0 px-14 -ml-8" />
            <div
              className="w-full flex justify-between py-2"
              style={{ padding: "2px 28px" }}
            >
              <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase mr-4">
                ENTREGABLE
              </div>
              <div className="flex flex-wrap justify-start items-center gap-2 ml-4">
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  DISEÑO INTERIOR / ARQUITECTURA
                </div>
              </div>
            </div>
            <hr className="w-full border-neutral-950 m-0 px-14 -ml-8" />
          </div>
          <div className="p-4 flex flex-col justify-start items-center gap-4 ">

            <div className="text-center w-full mt-16">
              <p className="text-neutral-950 text-lg font-normal font-sans leading-[27px]">
                Aquí una descripción del proyecto
              </p>
              <p className="text-neutral-950 text-lg font-semibold font-sans leading-[27px] -mt-6">
                <b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </b>
              </p>
              <p className="text-neutral-950 text-lg font-normal font-sans leading-[27px] -mt-6">
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
              </p>
              <p className="text-neutral-950 text-lg font-semibold font-sans leading-[27px] -mt-6">
                <b>ex ea commodo consequat.</b>
              </p>
              <p className="text-neutral-950 text-lg font-normal font-sans leading-[27px] -mt-10">
                <br />
                <br /> Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
              </p>
              <p className="text-neutral-950 text-lg font-semibold font-sans leading-[27px] -mt-6">
                <b>nisi ut aliquip ex ea commodo consequat.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
