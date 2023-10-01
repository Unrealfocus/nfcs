"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar fadedown ">
      <p className="font-bold text-[24px] italic">CONSTANCE</p>

      {/* <ul className="list-none sm:flex hidden justify-end gap-5 items-center flex-1">
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
            <a href="#collaboration">Collaboration</a>
          </li>
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
             <a href="#partnership">Partnership</a>
          </li>
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
             <a href="#contact">Contact Us</a>
          </li>
      </ul>

      <ul className="list-none sm:flex hidden justify-end gap-5 items-center flex-1">
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
            <a href="/sign-in">Log In</a>
          </li>
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
             <a href="/sign-up">Register</a>
          </li>
      </ul>
      <ul className="list-none sm:flex sm:flex-row lg:hidden">
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
            <a href="/sign-in">Log In</a>
          </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
