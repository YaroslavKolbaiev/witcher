"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils/tailwindStyles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

export const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10 mb-20`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-lg border-[1px] border-[#6a6a6a] relative"
        >
          <div>
            <h4 className="font-bold sm:text-3xl text-white">
              Andrzej Sapkowski
            </h4>
            <p className="mt-2 sm:text-lg text-xs text-white">
              Founder | Witcher
            </p>
          </div>
          <p className="mt-4 text-sm text-white leading-6 md:text-2xl md:leading-9">
            Andrzej Sapkowski is a Polish fantasy writer, essayist, translator
            and a trained economist. He is best known for his six-volume series
            of books The Witcher, which revolves around the eponymous "witcher,"
            a monster-hunter, Geralt of Rivia.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-[1]"
        >
          <img
            src="/geraltCiri.jpg"
            className="rounded-lg h-full object-cover"
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-12 top-20"
          >
            <img
              src="/wild.png"
              alt="logo"
              className="w-24 h-36 2xl:w-32 2xl:h-44"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
