import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Boton from "../../public/Boton.svg";

const TransNav = () => {
  return (
    <nav className="bg-transparent bg-no-repeat sticky top-0 p-7 px-7 pt-6 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold top-0 z-50">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={43.58}
              height={23}
              className="mb-7"
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <Image
              src={Boton}
              alt="Boton"
              width={50}
              height={50}
              className="mb-10 mt-3"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TransNav;
