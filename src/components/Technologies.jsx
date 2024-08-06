import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFlutter } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        My Skill
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-stone-400 p-4 flex flex-col items-center"
        >
          <TbBrandFlutter className="text-7xl text-cyan-400" />
          <span className="mt-2">Flutter</span>
        </motion.div>

        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-stone-400 p-4 flex flex-col items-center"
        >
          <SiLaravel className="text-7xl text-red-400" />
          <span className="mt-2">Laravel</span>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-stone-400 p-4 flex flex-col items-center"
        >
          <RiJavascriptFill className="text-7xl text-yellow-400" />
          <span className="mt-2">JavaScript</span>
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-stone-400 p-4 flex flex-col items-center"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="mt-2">ReactJs</span>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-stone-400 p-4 flex flex-col items-center"
        >
          <SiVite className="text-7xl text-purple-400" />
          <span className="mt-2">Vite</span>
        </motion.div>
        <motion.div
          variants={iconVariants(3.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-stone-400 p-4 flex flex-col items-center"
        >
          <SiMysql className="text-7xl text-orange-400" />
          <span className="mt-2">MySQL</span>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-stone-400 p-4 flex flex-col items-center"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
          <span className="mt-2">TailWind</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
