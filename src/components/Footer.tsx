import Link from "next/link";
import MainGral from "./MainGral";
import Image from "next/image";
import arrowright from "../../public/arrowright.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-rojo text-white py-14">
      <div className="w-full  flex-col justify-center items-center inline-flex">
        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center inline-flex">
          <div className="self-stretch py-[115px] flex-col justify-center items-start gap-14 inline-flex">
            <div className="self-stretch pl-10 pr-7 justify-start items-start gap-2.5 inline-flex">
              <div className="w-[223px] h-[138px] justify-center items-center flex">
                <div className="w-[223px]">
                  <span className="text-gray-200 text-lg font-light font-['DM Sans']">
                    Lorem ipsum dolor sit amet,{" "}
                  </span>
                  <span className="text-gray-200 text-lg font-semibold font-['DM Sans']">
                    <b>consectetur adipiscing elit</b>
                  </span>
                  <span className="text-gray-200 text-lg font-light font-['DM Sans']">
                    , sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-start flex">
              <Link href="/">
                <div className="w-full px-7 py-[21px] border-b border-gray-200 justify-between items-center inline-flex cursor-pointer">
                  <div className="text-center text-gray-200 text-[32px] font-medium font-['DM Sans']">
                    <div className="w-[30px] h-[30px]">
                      Home
                      <div className="pl-44 ml-40 -mt-8">
                        <Image alt="arrow" src={arrowright} />
                      </div>
                    </div>
                  </div>
                  <div className="w-[34px] h-[34px] p-[5.67px] origin-top-left -rotate-180 justify-center items-center flex" />
                </div>
              </Link>
              <hr className="w-full" />
              <Link href="/interna">
                <div className="w-[430px] px-7 py-[21px] border-b border-gray-200 justify-between items-center inline-flex cursor-pointer">
                  <div className="text-center text-gray-200 text-[32px] font-medium font-['DM Sans']">
                    <div className="w-[30px] h-[30px]">
                      Proyectos
                      <div className="pl-44 ml-40 -mt-8">
                        <Image alt="arrow" src={arrowright} />
                      </div>
                    </div>
                  </div>
                  <div className="w-[34px] h-[34px] p-[5.67px] origin-top-left -rotate-180 justify-center items-center flex" />
                </div>
              </Link>
              <hr className="w-full" />
              <Link href="/nosotros">
                <div className="w-[430px] px-7 py-[21px] border-b border-gray-200 justify-between items-center inline-flex cursor-pointer">
                  <div className="text-center text-gray-200 text-[32px] font-medium font-['DM Sans']">
                    <div className="w-[30px] h-[30px]">
                      Nosotros
                      <div className="pl-44 ml-40 -mt-8">
                        <Image alt="arrow" src={arrowright} />
                      </div>
                    </div>
                  </div>
                  <div className="w-[34px] h-[34px] p-[5.67px] origin-top-left -rotate-180 justify-center items-center flex" />
                </div>
              </Link>
              <hr className="w-full" />
              <Link href="/contacto">
                <div className="w-[430px] px-7 py-[21px] border-b border-gray-200 justify-between items-center inline-flex cursor-pointer">
                  <div className="text-center text-gray-200 text-[32px] font-medium font-['DM Sans']">
                    <div className="w-[30px] h-[30px]">
                      Contacto
                      <div className="pl-44 ml-40 -mt-8">
                        <Image alt="arrow" src={arrowright} />
                      </div>
                    </div>
                  </div>
                  <div className="w-[34px] h-[34px] p-[5.67px] origin-top-left -rotate-180 justify-center items-center flex" />
                </div>
              </Link>
              <hr className="w-full" />
            </div>
            <div className="self-stretch h-[217px] px-7 flex-col justify-start items-start gap-[17px] flex">
              <div className="self-stretch h-[100px] flex-col justify-start items-start gap-1 flex">
                <div className="w-[374px]">
                  <span className="text-gray-200 text-lg font-light font-['DM Sans']">
                    Oficina México
                    <br />
                  </span>
                  <span className="text-gray-200 text-lg font-normal font-['DM Sans']">
                    (+57) (1) 813 48 36
                  </span>
                </div>
                <div className="flex-col justify-end items-start flex">
                  <div className="text-gray-200 text-lg font-light font-['DM Sans'] uppercase">
                    info@reinharddienes.com
                  </div>
                </div>
                <div className="flex-col justify-end items-start flex">
                  <div className="text-gray-200 text-lg font-light font-['DM Sans'] uppercase">
                    CARRERA 7 #73-55
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[100px] flex-col justify-start items-start gap-1 flex">
                <div>
                  <span className="text-gray-200 text-lg font-light font-['DM Sans']">
                    Oficina Colombia
                    <br />
                  </span>
                  <span className="text-gray-200 text-lg font-normal font-['DM Sans']">
                    (+57) (1) 813 48 36
                  </span>
                </div>
                <div className="flex-col justify-end items-start flex">
                  <div className="text-gray-200 text-lg font-light font-['DM Sans'] uppercase">
                    info@reinharddienes.com
                  </div>
                </div>
                <div className="flex-col justify-end items-start flex">
                  <div className="text-gray-200 text-lg font-light font-['DM Sans'] uppercase">
                    CARRERA 7 #73-55
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-7 justify-start items-start gap-[22px] inline-flex">
              <div className="w-[30px] h-[30px] relative">
                <Image alt="arrow" src={facebook} />
              </div>
              <div className="w-[30px] h-[30px] relative">
                <Image alt="arrow" src={instagram} />
              </div>
              <Image alt="arrow" src={twitter} />

              <div className="w-[30px] h-[30px] px-[7.50px] pt-[9px] pb-[8.77px] rounded-[10px] border-2 border-gray-200 justify-center items-center flex" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
