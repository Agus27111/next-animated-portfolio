"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex justify-center items-center h-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
          <Image src="/mainIcons.svg" alt="bg-Hero" width={400} height={400} />
        </div>
        {/* Hero Text */}
        <div className="flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-neutral-100 uppercase"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I&apos;m Web Developer
          </motion.h1>
          <motion.p
            className="md:text-xl text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
          >
            I am highly enthusiastic and open to collaborating on innovative
            projects as a web developer, eager to contribute my skills and grow
            within a dynamic and forward-thinking team environment.
          </motion.p>

          {/* Button */}
          <div className="flex gap-4 ">
            <motion.button
              className="ring-1 ring-black rounded-lg p-3 bg-black text-white cursor-pointer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="ring-1 ring-black rounded-lg p-3 cursor-pointer "
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
