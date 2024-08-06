import AboutImage from "../assets/fotoWisudaWendy2.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About Me
      </motion.h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="w-full max-w-xs md:max-w-sm rounded-full"
              src={AboutImage}
              alt="AboutImage"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <h1>Pengalaman Organisasi</h1>
          </div>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Frontline, WGG (2021)</li>
            <li>Astor, Tim Petra Sinergi (2021 & 2022)</li>
            <li>Volunteer Megajar anak SD (2022)</li>
            <li>Frontline, WGGP (2023)</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
