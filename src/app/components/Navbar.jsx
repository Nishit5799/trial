import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const options = ["Category", "Age", "Brand", "Characters"];

  return (
    <div className="max-w-screen-2xl py-4 w-full px-10 mx-auto sm:px-[5vw] flex justify-between items-center font-['Bayon'] fixed bg-transparent  top-0 left-0 bg-[#F7F1EC] z-10">
      {/* Logo */}
      <div className="logo h-14 w-14 rounded-full overflow-hidden sm:h-20 sm:w-20">
        <Image
          className="bg-[#F7F1EC]"
          src="/logo.png"
          height={1000}
          width={1000}
          alt="funtoy"
        />
      </div>

      <div className="hidden sm:flex options gap-14">
        {options.map((e, i) => (
          <div key={i} className="text-lg text-black font-normal">
            {e}
          </div>
        ))}
      </div>

      <div className="sm:hidden">
        <IoMdMenu size={28} className="text-black" />
      </div>
    </div>
  );
};

export default Navbar;
