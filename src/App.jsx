import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MorningBackground from "./components/Background/MorningBackground";
import NightBackground from "./components/Background/NightBackground";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  // const [isNight, setIsNight] = useState(true);

  // const handleScroll = () => {
  //   const yOffset = window.scrollY;
  //   const nightStart = document.getElementById("experience").offsetTop;

  //   if (yOffset >= nightStart) {
  //     setIsNight(false);
  //   } else {
  //     setIsNight(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* <AnimatePresence>
        {isNight ? (
          <motion.div
            key="night"
            className="fixed top-0 w-full h-screen z-[-1] bg-gradient-to-b from-gray-900 to-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <NightBackground />
          </motion.div>
        ) : (
          <motion.div
            key="morning"
            className="fixed top-0 w-full h-screen z-[-1] bg-gradient-to-b from-sky-400 to-sky-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <MorningBackground />
          </motion.div>
        )}
      </AnimatePresence> */}
      <NightBackground />

      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <div id="experience">
          <Experience />
        </div>
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
