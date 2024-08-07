import React, { useState, useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/wendyProfile.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resumePDF from "../assets/resumeWendy.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const [isInView, setIsInView] = useState(true);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl lg:ml-16"
            >
              Wendy Leando Paath
            </motion.h1>
            <motion.span
              ref={typewriterRef}
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="lg:ml-16 text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              {isInView && (
                <Typewriter
                  words={[
                    "Mobile Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer",
                  ]}
                  cursor
                  loop={0}
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              )}
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 lg:ml-16 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full w-full max-w-sm md:max-w-md lg:max-w-lg"
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <motion.a
            href={resumePDF}
            download="Wendy_Leando_Paath_Resume.pdf"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: -30, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white-600 border border-white-600 rounded-lg hover:bg-neutral-800 hover:text-white transition"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
