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
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <AiOutlineSearch size="3rem" color="white" />
        <h2 className="text-white text-[24px]">WITCHER III</h2>
        <CiMenuBurger size="2rem" color="white" />
      </div>
    </motion.nav>
  );
}
