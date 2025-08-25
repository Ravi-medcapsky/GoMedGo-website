"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  details: string;
  features: string[];
  image: string;
};

interface Props {
  service: Service;
}

export function ServiceDetailsClient({ service }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto mt-10 mb-10 p-8 bg-white rounded-2xl shadow-lg"
    >
      {/* Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative w-full h-64 rounded-xl overflow-hidden"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Title & Description */}
      <motion.h1
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold mt-6 text-gray-900"
      >
        {service.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-gray-600"
      >
        {service.description}
      </motion.p>

      {/* Details */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-5 text-gray-700 leading-relaxed"
      >
        {service.details}
      </motion.p>

      {/* Features */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 space-y-2"
      >
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + idx * 0.1 }}
            className="flex items-center gap-2 text-gray-800"
          >
            ✅ {feature}
          </motion.li>
        ))}
      </motion.ul>

      {/* Book Now Button */}
      <button
        className="mt-8 bg-[#6B0F1A] text-white px-6 py-3 rounded-lg hover:bg-[#5a0c15] transition"
        onClick={() => {
          alert("Booking functionality coming soon!");
        }}
      >
        Book Now
      </button>
    </motion.div>
  );
}
