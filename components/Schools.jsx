"use client";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { fadeIn, staggerContainer, schoolVariants } from "../utils/motion";
import { TypingText, WitcherSchools, TitleText } from "./Texts";
import { schools } from "@/constants";

export const Schools = () => {
  return (
    <section id="schools" className={`${styles.paddings} relative z-10 mb-20`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex justify-center lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={schoolVariants("left")}
          className={`${styles.flexCenter}`}
        >
          <img
            src="/amulet.png"
            alt="amuletImage"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex justify-center flex-col"
        >
          <TypingText title="| The witcher schools" />
          <TitleText
            title={
              <>
                The witcher schools are the organizations <br /> which train and
                equip witchers
              </>
            }
          />
          <div className="mt-8 flex flex-col max-w-2xl gap-6">
            {schools.map((school, index) => (
              <WitcherSchools key={school} number={index + 1} text={school} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
