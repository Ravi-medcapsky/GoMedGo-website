"use client";

import GlowCard from "@/components/GlowCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ServicesPage: React.FC = () => {
  const router = useRouter();

  return (
    <motion.div
      className="mt-16 mb-16 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl font-semibold mb-6 text-center"
      >
        Our Services
      </motion.h2>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {services.map((card) => (
          <motion.li
            key={card.id}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <GlowCard
              title={card.title}
              description={card.description}
              image={card.image}
              alt={card.title}
              details={card.details}
              onClick={() => router.push(`/servicedetails/${card.id}`)}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ServicesPage;
