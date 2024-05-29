"use client";

import React from "react";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portofolio", title: "Portofolio" },
  { url: "/contact", title: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <div className="flex justify-center items-center font-bold rounded-lg p-1 w-24 h-8">
        <div className="flex justify-center items-center rounded-s-lg w-12 h-8 bg-black text-white">
          <MdDarkMode />{" "}
        </div>
        <div className="flex justify-center items-center rounded-e-lg w-12 h-8  bg-white text-black">
          <FiSun />{" "}
        </div>
      </div>
      {/* Responsive Menu */}
      <div className="">
        <button className="w-10 h-6 flex flex-col rounded-lg justify-between z-50 relative" onClick={(()=> setOpen(!open))}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* Menu List */}
        { open && (
            <div className="bg-black w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center gap-8 text-3xl text-white">
          {links.map((link) => (
            <Link key={link.title} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
        )}
        
      </div>
    </div>
  );
}

export default Navbar;
