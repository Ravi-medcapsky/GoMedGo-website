"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Dev",
    role: "Go Med Go Patient",
    text: "Go Med Go made my treatment journey stress-free. From easy appointment booking to the friendly staff, everything was handled smoothly.",
  },
  {
    name: "Kapoor",
    role: "Family Member",
    text: "My father’s surgery was successful thanks to the amazing doctors and modern facilities. The care and attention we received was truly exceptional.",
  },
  {
    name: "Verma",
    role: "Go Med Go Patient",
    text: "The team is very professional and courteous. I felt safe and well cared for throughout my stay at the hospital.",
  },
  {
    name: "Raj",
    role: "Go Med Go Patient",
    text: "The team is very professional and courteous. I felt safe and well cared for throughout my stay at the hospital.",
  },
];

export default function MeetOurPatients() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // ✅ Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#7B0D36] mb-12"
        >
          Meet Our Patients
        </motion.h2>

        {/* Testimonial Slide (Swipeable) */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) {
                  next(); // swipe left → next
                } else if (info.offset.x > 100) {
                  prev(); // swipe right → prev
                }
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-8 shadow-lg border border-gray-100 bg-gradient-to-br from-yellow-50 to-orange-50 cursor-grab active:cursor-grabbing"
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonials[index].text}
              </p>
              <h4 className="font-semibold text-lg text-gray-900">
                {testimonials[index].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Left / Right Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${i === index ? "bg-[#7B0D36]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
