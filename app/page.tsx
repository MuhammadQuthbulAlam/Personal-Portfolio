"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold">Muhammad Quthbul Alam</h1>
      <p className="mt-2 text-gray-500">
        Fullstack Software Engineer (Frontend • Backend • AI)
      </p>
    </motion.main>
  );
}
