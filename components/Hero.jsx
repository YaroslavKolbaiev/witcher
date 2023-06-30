"use client";

import { motion } from "framer-motion";
import { styles } from "../utils/tailwindStyles";
import { slideIn, staggerContainer } from "../utils/motion";

export const Hero = () => {
  return (
    <section className="pl-8 md:pl-20 lg:pl-40 xl:pl-72 2xl:pl-96 mb-20 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full -mt-[120px]"
        >
          <div className="w-full h-[220px] md:h-[380px] lg:h-[500px] rounded-tl-[140px] z-[0]">
            <img
              src="/heroImage.jpg"
              alt="cover"
              className="w-full h-full object-cover rounded-tl-[140px] z-10"
            />
          </div>
        </motion.div>
        <div className="absolute flex gap-5 top-0 right-[10%]">
          <a className={styles.navlink} href="#chars">
            Characters
          </a>
          <a className={styles.navlink} href="#schools">
            Schools
          </a>
          <a className={styles.navlink} href="#world">
            Wolrd
          </a>
          <a className={styles.navlink} href="#monsters">
            Monsters
          </a>
        </div>
      </motion.div>
    </section>
  );
};
