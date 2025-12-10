import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold text-white"
      >
        Welcome to AssetVerse
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg mt-4 text-yellow-700"
      >
        Smart way to manage your company assets
      </motion.p>

      
    </div>
  );
};

export default Hero;
