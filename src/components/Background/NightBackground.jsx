import { motion } from "framer-motion";

const Stars = () => {
  const starStyle = "absolute bg-white rounded-full w-1 h-1";

  return (
    <div className="relative w-full h-full overflow-hidden">
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className={starStyle}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 3 + 1,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

const Moon = () => {
  return (
    <motion.div
      className="absolute top-10 left-10"
      animate={{
        rotate: [0, 360, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
      }}
    >
      <div className="w-16 h-16 bg-gray-300 rounded-full shadow-lg"></div>
    </motion.div>
  );
};

const NightBackground = () => {
  return (
    <motion.div
      className="fixed top-0 w-full h-screen z-[-1] bg-gradient-to-b from-gray-900 to-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <Moon /> */}
      <Stars />
    </motion.div>
  );
};

export default NightBackground;
