"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils/tailwindStyles";
import { footerVariants } from "@/utils/motion";

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className=""></div>
    </motion.footer>
  );
};
