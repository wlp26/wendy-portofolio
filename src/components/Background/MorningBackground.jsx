import { motion } from "framer-motion";

const Sun = () => {
  return (
    <motion.div
      className="absolute top-10 right-10"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
      }}
    >
      <div className="w-20 h-20 bg-yellow-400 rounded-full shadow-lg"></div>
    </motion.div>
  );
};

const Clouds = () => {
  return (
    <div className="absolute top-0 w-full h-full overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 w-40 h-20 bg-white rounded-full"
        animate={{ x: [0, 100, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-20 left-40 w-60 h-30 bg-white rounded-full"
        animate={{ x: [0, 150, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-30 left-60 w-50 h-25 bg-white rounded-full"
        animate={{ x: [0, 120, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

const MorningBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Sun />
      <Clouds />
    </motion.div>
  );
};

export default MorningBackground;
