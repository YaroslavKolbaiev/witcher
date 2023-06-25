"use client";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { navVariants } from "../utils/motion";
import { AiOutlineSearch } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";

export function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-10`}
    >
      <div className="absolute inset-20 gradient-01 right-0" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <AiOutlineSearch size="3rem" color="white" />
        <img src="/logo.png" className="h-64" alt="wildHunt" />
        <CiMenuBurger size="2rem" color="white" />
      </div>
    </motion.nav>
  );
}
