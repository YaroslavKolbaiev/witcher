"use client";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText, StartSteps, TitleText } from "./Texts";

export const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/amulet.png"
            alt="amuletImage"
            className="w-1/2 h-1/2 object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| The schools" />
          <TitleText title={<>Get started with a school you like</>} />
        </motion.div>
      </motion.div>
    </section>
  );
};
