"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function TransitionPage({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div className="h-screen w-screen bg-gradient-to-b from-blue-50 to-blue-400">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[80px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 right-0 left-0 text-white text-6xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.8, ease: "easeInOut" }}
        >
          {" "}
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[80px] bottom-0 z-40 "
          initial={{ height: "1400vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 3.5, ease: "easeInOut" }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionPage;
