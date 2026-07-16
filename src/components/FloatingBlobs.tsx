import { motion } from 'framer-motion';

export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1: Blue */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Blob 2: Cyan/Indigo */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-cyan-600/10 rounded-full blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Blob 3: Purple */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/5 rounded-full blur-[60px] md:blur-[100px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
