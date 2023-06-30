"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export const MonsterCard = ({ imgUrl, title, desc, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row items-center justify-center md:items-start flex-col gap-4"
    >
      <img src={imgUrl} alt={title} className="w-64 lg:w-80 rounded-lg" />
      <div className="max-w-lg">
        <h2 className="text-white text-3xl font-bold mb-5">{title}</h2>
        <p className="text-slate-500 text-justify">{desc}</p>
      </div>
    </motion.div>
  );
};
