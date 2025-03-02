import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  backdrop-blur-sm z-50" style={{opacity:0.8}}>
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.span
            key={i}
            className="w-4 h-4 bg-blue-700 rounded-full"
            animate={{
              y: [0, -10, 0], // Moves up and down
            }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.2,
            }}
          ></motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
