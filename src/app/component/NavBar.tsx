"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar fadedown ">
      <p className="font-bold text-[24px] italic">CONSTANCE</p>
    </nav>
  );
};

export default Navbar;
