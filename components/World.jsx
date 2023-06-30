"use client";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, WitcherSchools, TitleText } from "./Texts";

export const World = () => {
  return (
    <section id="world" className={`${styles.paddings} relative z-10 mb-20`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center gap-8 `}
      >
        <TypingText
          title="| The map of the Witcher world"
          textStyles="text-center"
        />
        <TitleText
          title={<>Scaled map of The Witcher's Continent</>}
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-16 w-2/3 lg:w-2/5 "
        >
          <img src="/world.jpg" alt="world" className="opacity-70" />
          <div
            className={`${styles.schoolImage} top-[15%] right-[10%] bg-red-800`}
          >
            <img
              src="/kaer.jpg"
              alt="wolf"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div
            className={`${styles.schoolImage} bottom-[20%] right-[25%] bg-orange-700`}
          >
            <img
              src="/cat.jpg"
              alt="cat"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div
            className={`${styles.schoolImage} bottom-[30%] left-[15%] bg-green-700`}
          >
            <img
              src="/grifin.jpg"
              alt="grifin"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
