"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "./Texts";
import { monsters } from "@/constants";
import { MonsterCard } from "./MonsterCard";

export const Monsters = () => {
  return (
    <section
      id="monsters"
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 mb-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto flex flex-col"
      >
        <TypingText title="| Monsters" textStyles="text-center" />
        <TitleText title="Creatures and Monsters" textStyles="text-center" />
        <div className="mt-12 flex flex-col gap-7">
          {monsters.map((monster, index) => (
            <MonsterCard key={monster.id} {...monster} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
