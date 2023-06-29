"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, ExploredCard, TitleText } from "./Texts";
import { characters } from "@/constants";
import { ExploreChar } from "./ExploreChar";

export const Explore = () => {
  const [active, setActive] = useState("char-2");
  return (
    <section id="chars" className={`${styles.paddings} mb-20`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto max-w-6xl flex flex-col`}
      >
        <TypingText title="| Characters" textStyles="text-center" />
        <TitleText
          title={
            <>
              Explore the characrter of <br />{" "}
              <span className="text-bold">Witcher</span> world{" "}
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-12 flex lg:flex-row flex-col min-h-[720px] items-center lg:items-stretch gap-5">
          {characters.map((world, index) => (
            <ExploreChar
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
