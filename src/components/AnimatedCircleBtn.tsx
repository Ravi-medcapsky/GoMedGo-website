"use client";
import { motion } from "framer-motion";

type AnimatedCircleBtnProps = {
  text: string;
  icon: React.ElementType; 
};

export default function AnimatedCircleBtn({ text, icon: Icon }: AnimatedCircleBtnProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Text Label */}
      <p className="text-red-900 font-medium">{text}</p>

      {/* Flower Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 group"
      >
        {/* Flower Shape (SVG) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="absolute w-full h-full"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <path
            d="M50 5 
               C65 5, 75 15, 75 30 
               C75 15, 85 25, 95 40 
               C85 25, 95 35, 95 50
               C95 65, 85 75, 70 75
               C85 75, 75 85, 60 95
               C75 85, 65 95, 50 95
               C35 95, 25 85, 25 70
               C25 85, 15 75, 5 60
               C15 75, 5 65, 5 50
               C5 35, 15 25, 30 25
               C15 25, 25 15, 40 5
               C25 15, 35 5, 50 5 Z"
            fill="white"
            stroke="lightgray"
            strokeWidth="2"
          />
        </motion.svg>

        {/* Dynamic Icon */}
        <Icon
          size={20}
          className="text-red-800 relative z-10 transition-transform duration-500 "
        />
      </motion.button>
    </div>
  );
}
