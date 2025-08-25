"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  details?: string;
  onClick?: () => void;
}

export default function GlowCard({
  title,
  description,
  image,
  alt,
  details = "More details about this service...",
  onClick,
}: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm rounded-2xl border border-gray-200 shadow-md overflow-hidden 
                 bg-white cursor-pointer relative group rainbow-border"
      onClick={() => setExpanded(!expanded)} // 👈 whole card clickable
    >
      {/* Image */}
      <div className="relative mx-auto h-40 w-[99%]">
        <Image
          src={image}
          alt={alt || title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <motion.div layout className="p-5 relative z-10">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>

          {/* Rotating Chevron */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </motion.div>
        </div>

        <p className="text-sm text-gray-600 mt-2">{description}</p>

        {/* Expandable Section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 text-gray-700 text-sm"
            >
              <p>{details}</p>

              {/* CTA Button */}
              <button
                className="mt-4 bg-red-900 text-white px-4 py-2 rounded-full text-sm 
                           hover:bg-red-700 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation(); // prevent card toggle
                  onClick?.();
                }}
              >
                Learn More
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
