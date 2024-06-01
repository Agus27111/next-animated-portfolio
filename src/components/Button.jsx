import React from "react";
import { motion } from "framer-motion";

function Button({ text }) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="text-neutral-100 rounded-full border  pointer-events-auto"
    >
      {text}
    </motion.button>
  );
}

export default Button;
