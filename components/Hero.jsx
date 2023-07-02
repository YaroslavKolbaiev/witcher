"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";

export const Hero = () => {
  return (
    <section className="pl-8 md:pl-20 lg:pl-40 xl:pl-72 2xl:pl-96 mb-20 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col "
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full -mt-[120px] relative"
        >
          <div className="w-full h-[220px] md:h-[380px] lg:h-[500px] rounded-tl-[140px] z-[0]">
            <img
              src="/heroImage.jpg"
              alt="cover"
              className="w-full h-full object-cover rounded-tl-[140px] z-10"
            />
          </div>
          <div className="absolute flex flex-col sm:flex-row gap-3 bottom-0 right-[10%]">
            <a
              className="text-white text-lg hover:text-red-400 transition duration-200 ease-in-out"
              href="#chars"
            >
              Characters
            </a>
            <a
              className="text-white text-lg hover:text-red-400 transition duration-200 ease-in-out"
              href="#schools"
            >
              Schools
            </a>
            <a
              className="text-white text-lg hover:text-red-400 transition duration-200 ease-in-out"
              href="#world"
            >
              Wolrd
            </a>
            <a
              className="text-white text-lg hover:text-red-400 transition duration-200 ease-in-out"
              href="#monsters"
            >
              Monsters
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
