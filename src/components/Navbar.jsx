"use client";

import React from "react";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portofolio", title: "Portofolio" },
  { url: "/contact", title: "Contact" },
];

const socials = [
  { url: "/", title: "Github", src: "/github.png" },
  { url: "/", title: "Instagram", src: "/instagram.png" },
  { url: "/", title: "linkedin", src: "/linkedin.png" },
  { url: "/", title: "facebook", src: "/facebook.png" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const buttomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Navbar menu */}
      <div className="hidden md:flex justify-center gap-4 w-1/3 text-xl">
        {links.map((link) => (
          <NavLink
            link={link}
            href={link.url}
            key={link.title}
            className="text-bold"
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Theme Logo */}
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link
          href="/"
          className="text-sm flex justify-center items-center font-bold rounded-md p-1 w-24 h-full bg-black"
        >
          <span className=" flex justify-center items-center text-white w-full h-full">
            <MdDarkMode />{" "}
          </span>
          <span className=" flex justify-center items-center bg-white text-black w-full h-8 rounded-e-md ">
            <FiSun />{" "}
          </span>
        </Link>
      </div>
      {/* Social Media */}
      <div className="hidden md:flex lg:flex gap-4 w-1/3 justify-center">
        {socials.map((social) => (
          <Link href={social.url} key={social.title}>
            <Image src={social.src} alt={social.title} width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-6 flex flex-col rounded-lg justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={buttomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            inital="closed"
            animate="opened"
            className="bg-black w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center gap-8 text-3xl text-white z-20"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
