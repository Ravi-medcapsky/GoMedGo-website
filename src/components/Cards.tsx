"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardsProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Cards: React.FC<CardsProps> = ({ onClick, title, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      onClick={onClick}
    >
      Know More
    </button>
  </motion.div>
);

export default Cards;
