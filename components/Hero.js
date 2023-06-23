"use client";

import React from "react";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`${styles.xPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            WITCHER
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>WILD HUNT</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px] h-[360px]"
        >
          <div className="absolute w-full hero-gradient rounded-tl-[140px] z-[0] -top-[30px]">
            <img
              src="/geraltSiri.jpg"
              alt="cover"
              className="object-cover rounded-tl-[140px] z-10"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
