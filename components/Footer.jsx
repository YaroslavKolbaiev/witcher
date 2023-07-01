"use client";

import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
import { socials } from "@/constants";

export const Footer = () => {
  const srollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-12 relative"
    >
      <div className="footer-gradient" />
      <div className="mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-6xl text-4xl text-white">
            Enter the Witcher World
          </h4>
          <button
            onClick={srollToTop}
            type="button"
            className="flex items-center h-fit py-4 px-6 rounded-3xl gap-3 bg-zinc-700 bg-opacity-70"
          >
            <img src="/wild.png" alt="set" className="w-6 h-9" />
            <span className="text-base text-white hover:text-red-600 transition duration-200 ease-in-out">
              Go to TOP
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-14 h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-bold text-2xl text-white">Witcher</h4>
            <p className="text-white opacity-50">White Wolf Wise Wolf</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  src={social.url}
                  alt={social.name}
                  key={social.name}
                  className="w-6 h-6 cursor-pointer object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
