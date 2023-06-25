"use client";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./Texts";

export const About = () => (
  <section className={`${styles.paddings} gradient-02`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex justify-center items-center flex-col`}
    >
      <TypingText title="| About Witcher" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-2 md:text-2xl text-lg text-justify text-white max-w-4xl px-6"
      >
        <span className="font-extrabold text-white">
          The Witcher 3: Wild Hunt
        </span>{" "}
        is the third and final installment in the series of games developed by{" "}
        <span className="text-blue-400">CD PROJEKT RED</span> featuring the
        witcher <span className="text-blue-400">Geralt of Rivia</span>. The game
        was originally scheduled for release in late 2014, then pushed back to
        24 February 2015, and finally released on 19 May 2015. During the first
        two weeks since release it had sold more than 4 million copies
        worldwide, more than doubling the total sales of its predecessor,{" "}
        <span className="text-blue-400">
          {" "}
          The Witcher 2: Assassins of Kings
        </span>
        .
      </motion.p>
    </motion.div>
  </section>
);
