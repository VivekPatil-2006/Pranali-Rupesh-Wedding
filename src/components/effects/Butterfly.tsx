"use client";

import { motion } from "framer-motion";

export default function Butterfly() {
  return (
    <motion.div
      className="fixed z-50 text-4xl"
      animate={{
        x: ["-10vw", "110vw"],
        y: [400, 100, 250, 50],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      🦋
    </motion.div>
  );
}