"use client";
import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const cardDetails = [
  {
    id: 1,
    title: "Expert Caretaker",
    description: "Gentle care expert.",
    onClick: () => alert("You clicked service"),
  },
  {
    id: 2,
    title: "Baby Caretaker",
    description: "Caring for your little ones.",
    onClick: () => alert("You clicked service"),
  },
  {
    id: 3,
    title: "At Home Care",
    description: "Comfort of home care.",
    onClick: () => alert("You clicked service"),
  },
  {
    id: 4,
    title: "Injections & Infusions",
    description: "Painless and safe delivery",
    onClick: () => alert("You clicked service"),
  },
  {
    id: 5,
    title: "Elderly Bath Hygiene",
    description: "Dignified hygiene care.",
    onClick: () => alert("You clicked service"),
  },
  {
    id: 6,
    title: "Dressing",
    description: "Professional would care.",
    onClick: () => alert("You clicked service"),
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => (
  <>
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-4 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
      >
        Welcome to GoMedGo!
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl md:text-2xl mb-8 max-w-xl text-white/90"
      >
        Your trusted platform for healthcare marketing solutions. Discover our
        services and grow your medical business.
      </motion.p>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
      >
        Get Started
      </motion.button>
    </motion.div>

    <motion.div
      className="mt-16 mb-16 max-w-4xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-semibold mb-6"
      >
        Our Services
      </motion.h2>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg"
        variants={containerVariants}
      >
        {cardDetails.map((card) => (
          <motion.li key={card.id} variants={itemVariants}>
            <Cards
              title={card.title}
              description={card.description}
              onClick={card.onClick}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </>
);

export default Home;
