"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AnimatedCircleBtn from "./AnimatedCircleBtn";
import { ChevronRight, Download } from "lucide-react";
import BookModal from "./BookModel";
import Features from "./Features";
import MeetOurPatients from "./MeetOurPatients";
import GlowCard from "./GlowCard";
import { services } from "@/data/services"; // ✅ Use shared services array

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="min-h-screen flex flex-col text-white px-4 bg-no-repeat bg-cover bg-center bg-[url('/atHome.png')]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="items-start max-w-3xl md:mx-20 sm:mx-auto my-10 pt-20">
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold mb-2 text-gray drop-shadow-lg"
          >
            A Caring Home for Every Stage of Life
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold mb-2 text-gray drop-shadow-lg"
          >
            Because Home Should Always Feel Like Home
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-sm mb-8 max-w-xl text-gray/90"
          >
            Discover a safe, comfortable, and supportive community designed for
            seniors. Whether you seek independent living or extra care, our
            residences provide dignity, compassion, and peace of mind.
          </motion.p>
        </div>

        <div className="flex gap-8 mb-20 md:mx-20 sm:mx-auto">
          <motion.a
            variants={itemVariants}
            onClick={() => setIsOpen(true)}
            className="inline-block font-medium hover:text-red-800 transition flex items-center gap-2"
          >
            <AnimatedCircleBtn
              text="Request an Appointment"
              icon={ChevronRight}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="/simple.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-medium hover:text-red-800 transition flex items-center gap-2"
          >
            <AnimatedCircleBtn text="Download Brochure" icon={Download} />
          </motion.a>

          {/* Modal */}
          <BookModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </motion.div>

      {/* Summary Section */}
      <motion.div
        className="max-w-5xl mx-auto px-4 py-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
          At GoMedGo, we believe healthcare should be safe, reliable, and truly
          centered around you. Our medical services are designed to combine
          modern treatment with compassionate support, ensuring that every
          patient feels cared for at every step.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
          We understand the unique needs of individuals and their families.
          That’s why GoMedGo is more than just a healthcare provider—it’s a
          place where healing, comfort, and well-being come together to help you
          live a healthier, happier life.
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-2xl text-center text-red-900 font-semibold text-gray-800"
        >
          GoMedGo! is a team of dedicated healthcare professionals
        </motion.h2>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Features />
      </motion.div>

      {/* Care Philosophy */}
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-semibold text-red-900 mb-6 text-center"
        >
          Our Care Philosophy
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
          At <span className="font-semibold">Go Med Go</span>, our care
          philosophy is shaped by years of medical expertise and a deep
          commitment to patient well-being. With continuous learning from
          healthcare practices and patient experiences, we ensure that our
          hospitals provide the highest standards of safety, accessibility, and
          comfort.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
          From advanced emergency response systems and wheelchair-friendly
          layouts to wider doorways, slip-resistant flooring, and supportive
          infrastructure, every feature of our facilities is designed to make
          healthcare safer and more compassionate. At the heart of it all lies
          our promise—to deliver an environment that promotes healing, trust,
          and peace of mind for every patient and family.
        </motion.p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="mt-16 mb-16 max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-semibold mb-6 text-center"
        >
          Our Services
        </motion.h2>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg"
          variants={containerVariants}
        >
          {services.map((card) => (
            <motion.li key={card.id} variants={itemVariants}>
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

      {/* Testimonials */}
      <MeetOurPatients />
    </>
  );
};

export default Home;
