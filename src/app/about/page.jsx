"use client";
import { motion } from "framer-motion";
import React from "react";

function AboutPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div>
        {/* Text Container */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md: gap-32 lg:gap-48 xl: gap-64">
          {/* Bio Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* title */}
            <h1 className="font-bold text-2xl">BI0GRAPHY</h1>
            {/* description */}
            <p className="text-lg">
              Hello! I&apos;m Agus, a passionate and driven junior web developer
              with a keen eye for detail and a commitment to crafting seamless
              digital experiences.
            </p>
            {/* italic statment */}
            <span className="italic">Lets working together!</span>
            
          </div>
        </div>

        {/* Image Container */}
        <div></div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
