"use client";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { navVariants, fadeIn } from "../utils/motion";

export const ExploreChar = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => {
  return (
    // index * 0.5 makes divs to apear one by one
    <motion.div
      onClick={() => {
        handleClick(id);
      }}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "flex-[3.5]" : "flex-[0.5]"
      } text-white flex items-center justify-center min-w-[300px] lg:min-w-[170px] max-h-[600px] translate-[flex] duration-500 ease-out-flex cursor-pointer`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-lg"
      />
      {active !== id && (
        <h3 className="font-semibold sm:text-2xl text-lg text-slate-200 absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      )}
    </motion.div>
  );
};
