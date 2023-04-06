import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, value] = useState(false);
  const navM = () => {
    value(!nav);
  };
  return (
    <div className="container fixed  z-10 flex h-24 max-w-[1240px] items-center justify-between gap-5 border-y-0  p-5 text-basefont shadow-md sm:max-w-full md:relative  md:mix-blend-normal md:backdrop-blur-0 lg:fixed lg:px-24 lg:py-6 lg:opacity-100 lg:shadow-lg lg:backdrop-blur-md">
      <h1 className="rounded-[20px] bg-basecolor px-5 py-[6px] text-[12px] font-bold text-green-400 md:rounded-none md:p-0 md:text-3xl lg:bg-transparent ">React App</h1>
      <ul className=" hidden font-sans text-[0.95rem] font-bold text-slate-300 md:flex">
        <li className="px-2">Home</li>
        <li className="px-2">About</li>
        <li className="px-2">Porfolio</li>
        <li className="px-2">Source</li>
        <li className="px-2">Project</li>
      </ul>
      <div className=" flex rounded-[10%] bg-basecolor p-3 md:hidden md:rounded-none md:p-0" onClick={navM}>
        {!nav ? <AiOutlineMenu size={20} className="  text-slate-300"></AiOutlineMenu> : <AiOutlineClose size={20} />}
      </div>
      <div className={!nav ? "hidden" : "fixed left-0 top-0 z-50 h-full  w-[65%] border-r  border-slate-600   bg-basecolor px-5  py-[22px] text-basefont  opacity-[0.89]   duration-700 ease-linear md:hidden"}>
        <h1 className=" pt-2 text-3xl font-bold text-green-400 ">React App</h1>
        <ul className="  pr-5 pt-[50px] text-[0.9rem] uppercase backdrop-blur-md">
          <li className=" border-b py-[13px]">Home</li>
          <li className=" border-b py-[13px]">About</li>
          <li className=" border-b py-[13px]">Porfolio</li>
          <li className=" border-b py-[13px]">Source</li>
          <li className=" border-b py-[13px]">Project</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
