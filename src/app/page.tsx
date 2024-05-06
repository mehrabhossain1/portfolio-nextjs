"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imageAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: 20,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

export default function App() {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="w-1/2 pr-6">
        <h1 className="text-6xl font-bold mb-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="text-sky-400 underline"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              M
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              h
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              r
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              b
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              &nbsp;
            </motion.span>
            <motion.span
              className="text-sky-400 underline"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              H
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              s
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              s
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              i
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              n
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              !
            </motion.span>
          </motion.div>
        </h1>
        <span className="text-4xl font-semibold">
          MERN Stack Web Application Developer.
        </span>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi,
          laboriosam quo ut quisquam pariatur quidem quia minus unde repellendus
          accusantium. Minus soluta ipsam illum harum recusandae! Odit, esse
          aspernatur?
        </p>
      </div>
      <div className="w-1/2">
        <motion.div
          variants={imageAnimation}
          initial="initial"
          animate="animate"
        >
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            width={500}
            height={500}
            alt="My Image"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
