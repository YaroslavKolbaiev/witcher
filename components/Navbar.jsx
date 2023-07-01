"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

export function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="sm:px-16 px-6 py-8 relative z-10"
    >
      <div className="absolute inset-20 gradient-01 right-0" />
      <img src="/wild.png" className="h-12 w-8" />
      <div className="flex justify-center">
        <img src="/logo.png" className="h-64" alt="wildHunt" />
      </div>
    </motion.nav>
  );
}
