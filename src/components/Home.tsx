"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AnimatedCircleBtn from "./AnimatedCircleBtn";
import { ArrowRight, ChevronRight } from "lucide-react";
import BookModal from "./BookModel";
import Features from "./Features";
import MeetOurPatients from "./MeetOurPatients";
import GlowCard from "./GlowCard";
import { services } from "@/data/services";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { AutoplayPlugin } from "@/lib/keenSliderAutoplay";
import Image from "next/image";

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

  const visibleServices = services.slice(0, 3);

  // Keen slider config
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [AutoplayPlugin(3000)]
  );

  const images = ["/hero.png", "/hero2.png", "/hero3.png"];

  return (
    <>
      {/* Hero Section */}
      <div ref={sliderRef} className="keen-slider relative w-full">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="keen-slider__slide relative flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Background Image */}
            <Image
              src={img}
              alt={`Slide ${idx + 1}`}
              fill
              priority={idx === 0} 
              className="h-screen bg-center bg-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div
              className="relative z-10 flex flex-col justify-center 
                       items-center md:items-start text-center md:text-left
                       px-4 sm:px-8 md:px-20 
                       h-[70vh] sm:h-[80vh] md:h-screen"
            >
              <motion.h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
                A Caring Home for Every Stage of Life
              </motion.h1>

              <motion.h2 className="text-md sm:text-xl md:text-3xl font-semibold mb-3 text-white drop-shadow-lg">
                Because Home Should Always Feel Like Home
              </motion.h2>

              <motion.p className="text-sm sm:text-base md:text-lg mb-8 max-w-xl text-white/90 leading-relaxed">
                Discover a safe, comfortable, and supportive community designed
                for seniors. Whether you seek independent living or extra care,
                our residences provide dignity, compassion, and peace of mind.
              </motion.p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start">
                <motion.a
                  onClick={() => setIsOpen(true)}
                  className="inline-block font-medium transition flex items-center gap-2 cursor-pointer"
                >
                  <AnimatedCircleBtn
                    text="Request an Appointment"
                    icon={ChevronRight}
                  />
                </motion.a>
              </div>
            </div>

            {/* Modal */}
            <BookModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </motion.div>
        ))}
      </div>

      {/* Summary Section */}
      <motion.div
        className="max-w-5xl mx-auto px-4 py-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-lg  mb-6">
          At GoMedGo, we believe healthcare should be safe, reliable, and truly
          centered around you. Our medical services are designed to combine
          modern treatment with compassionate support, ensuring that every
          patient feels cared for at every step.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg  mb-6">
          We understand the unique needs of individuals and their families.
          That’s why GoMedGo is more than just a healthcare provider—it’s a
          place where healing, comfort, and well-being come together to help you
          live a healthier, happier life.
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-2xl text-center  font-semibold "
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
          className="text-3xl sm:text-4xl font-semibold mb-6 text-center"
        >
          Our Care Philosophy
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg mb-6">
          At <span className="font-semibold">Go Med Go</span>, our care
          philosophy is shaped by years of medical expertise and a deep
          commitment to patient well-being. With continuous learning from
          healthcare practices and patient experiences, we ensure that our
          hospitals provide the highest standards of safety, accessibility, and
          comfort.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg mb-6">
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
          {visibleServices.map((card) => (
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
        {services.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => router.push("/servicespage")}
              className="group/btn relative w-[50%] bg-gradient-to-r  from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

              <div className="relative flex items-center justify-center gap-2">
                More Services
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        )}
      </motion.div>

      {/* Testimonials */}
      <MeetOurPatients />
    </>
  );
};

export default Home;
