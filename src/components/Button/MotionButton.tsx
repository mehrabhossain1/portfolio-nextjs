"use client";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

const MotionButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      //
    >
      <Button className="bg-sky-400 font-semibold hover:bg-sky-500 focus:bg-sky-500 text-white">
        {children}
      </Button>
    </motion.div>
  );
};

export default MotionButton;
