"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { styles } from "@/utils/tailwindStyles";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={`id-${index}`}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyles }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`${textStyles} mt-2 font-bold md:text-6xl text-4xl text-white`}
    >
      {title}
    </motion.h2>
  );
};

export const WitcherSchools = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-16 h-16 rounded-3xl bg-[#323f5d]`}
      >
        <p className="font-bold text-lg text-white">{`0${number}`}</p>
      </div>
      <p className="flex-1 ml-8 text-lg text-[#b0b0b0]">{text}</p>
    </div>
  );
};
