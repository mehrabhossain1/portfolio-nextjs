"use client";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

const MotionButtonOutline = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button className="font-semibold transition-all bg-transparent text-sky-400 border-1 border-sky-400 hover:bg-sky-500 hover:text-white focus:bg-sky-500">
        {children}
      </Button>
    </motion.div>
  );
};

export default MotionButtonOutline;
