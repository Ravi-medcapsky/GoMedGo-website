"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  onClick?: () => void;
}

export default function GlowCard({
  title,
  description,
  image,
  alt,
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm rounded-2xl border border-gray-200 shadow-md overflow-hidden 
                 bg-white cursor-pointer relative group rainbow-border"
    >

      {/* Image */}
      <div className="relative mx-auto h-40 mt-0.5 w-[99%]">
        <Image
          src={image}
          alt={alt || title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        <div>
          {/* Button */}
          <button
            className="mt-4 mx-auto block bg-red-900 text-white px-4 py-2 rounded-full text-sm 
             hover:bg-red-700 transition duration-300 cursor-pointer button-animate"
            onClick={onClick}
          >
            Learn More
          </button>


        </div>
      </div>

    </motion.div >
  );
}
