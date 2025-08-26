"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@headlessui/react";
import type { Service } from "@/types/service";

const handleWhatsapp = (service: Service) => {
  const phoneNumber = "918447558372";
  const message = `Hello, I want to book a service! Please provide more details. Thank you! ${service.title}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


export function ServiceDetailsClient({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto mt-10 mb-16 p-8 bg-white rounded-2xl shadow-xl"
    >
      {/* Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-md"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl font-bold mt-6 text-gray-900"
      >
        {service.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-gray-600 text-lg sm:text-xl"
      >
        {service.description}
      </motion.p>

      {/* Details */}
      {[service.details, service.details1, service.details2].map(
        (detail, idx) =>
          detail && (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="mt-4 text-gray-700 leading-relaxed text-base sm:text-lg"
            >
              {detail}
            </motion.p>
          )
      )}

      {/* Features Section */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-900"
      >
        {service.headingOne}
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="mt-4 space-y-3"
      >
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + idx * 0.05 }}
            className="flex items-start gap-3 text-gray-800 text-base sm:text-lg"
          >
            <span className="text-[#6B0F1A] font-bold">✅</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-2xl sm:text-3xl font-semibold mt-8 text-gray-900"
      >
        {service.headingTwo}
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="mt-4 space-y-3"
      >
        {service.features2.map((feature2, idx2) => (
          <motion.li
            key={idx2}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 + idx2 * 0.05 }}
            className="flex items-start gap-3 text-gray-800 text-base sm:text-lg"
          >
            <span className="text-green-600 font-bold">🌿</span>
            <span>{feature2}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-gray-700 leading-relaxed text-base sm:text-lg"
      >
        {service.paragraph}
      </motion.p>

      {/* Last Line */}
      {service.LastLine && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          className="mt-3 text-gray-900 leading-relaxed font-semibold text-lg sm:text-xl"
        >
          {service.LastLine}
        </motion.p>
      )}

      {/* CTA Button */}
      <Button
        className="mt-8 bg-[#6B0F1A] text-white px-6 py-3 rounded-lg hover:bg-[#5a0c15] transition-colors duration-300 shadow-md text-lg sm:text-xl"
        onClick={() => handleWhatsapp(service)}
      >
        Book Now
      </Button>
    </motion.div>
  );
}
