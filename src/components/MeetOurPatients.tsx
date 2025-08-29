"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  {
    name: "Sharma",
    role: "Go Med Go Patient",
    text: "Quick service and very responsive team. The experience was smooth and reassuring.",
  },
];

export default function MeetOurPatients() {
  const [index, setIndex] = useState(0);

  // ✅ Auto-scroll every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Meet Our Patients
        </motion.h2>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(50% - ${(index + 0.5) * 320}px)` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={`flex-shrink-0 w-[300px] rounded-xl p-8 shadow-lg border transition-all duration-300
                ${i === index
                    ? "scale-105 bg-gradient-to-br from-yellow-100 to-orange-100 border-[#7B0D36] shadow-2xl"
                    : "bg-gradient-to-br from-yellow-50 to-orange-50 border-gray-100"
                  }`}
              >
                <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>
                <h4 className="font-semibold text-lg text-gray-900">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
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
