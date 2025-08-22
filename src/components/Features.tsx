"use client";
import { motion } from "framer-motion";
import { HeartPulse, MapPin, ShieldCheck, Clock, Home, Image } from "lucide-react";

export default function Features() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          href="/hero-img.png"
          alt='Hero Background'
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          A New Standard in Healthcare
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl mt-4 font-light"
        >
          Compassion, Care, and Commitment to Your Well-being
        </motion.p>

        {/* Features */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm md:text-base">
          <Feature icon={<Home size={28} />} text="Modern Facilities" />
          <Feature icon={<HeartPulse size={28} />} text="Emergency Care" />
          <Feature icon={<MapPin size={28} />} text="Convenient Locations" />
          <Feature icon={<ShieldCheck size={28} />} text="Trusted Doctors" />
          <Feature icon={<Clock size={28} />} text="24x7 Support" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="bg-white/20 p-3 rounded-full">{icon}</div>
      <p>{text}</p>
    </motion.div>
  );
}
