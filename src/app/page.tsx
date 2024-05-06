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
    <div className="max-h-screen flex justify-between items-center p-6">
      <div className="w-2/3 pr-6 ">
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
        <p className="mt-8 max-w-[60ch]">
          I thrive on crafting dynamic and user-centric web applications that
          seamlessly integrate cutting-edge technologies to deliver robust
          solutions.
        </p>
        <p className="mt-4 max-w-[60ch]">
          With expertise in MongoDB, Express.js, React.js, and Node.js, I
          specialize in building scalable, efficient, and feature-rich
          applications that meet the unique needs of my clients. Whether
          it&apos;s developing intuitive user interfaces with React, designing
          efficient backend systems with Node.js and Express, or ensuring
          seamless data management with MongoDB, I&apos;m dedicated to
          delivering top-notch solutions that elevate user experiences.
        </p>
      </div>
      <div className="w-1/3">
        <motion.div
          variants={imageAnimation}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/image.jpg"
            width={400}
            height={400}
            alt="My Image"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
