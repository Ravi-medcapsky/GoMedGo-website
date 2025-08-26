"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import AnimatedCircleBtn from "./AnimatedCircleBtn";

const navItems = [
  { name: "Find Your Home", path: "/" },
  { name: "Services", path: "/servicespage" },
  { name: "About", path: "/aboutus" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-200 border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl  mx-auto px-4 py-5">
        {/* Logo */}
        <div className="font-bold text-2xl text-gray-800 flex items-center gap-2">
          <div className="items-center justify-center text-center ">
            <Image src="/logo.png" alt="Logo" width={50} height={20} />

          </div>
          {/* Animated vertical line */}
          <motion.div
            className="h-14 w-2  rounded-lg bg-gradient-to-r from-purple-600 to-pink-600"
            animate={{ padding: ["2px", "12px", "2px"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-sm">GoMedGo</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-gray-800 font-medium hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+918447558372"
              >
                <AnimatedCircleBtn text="" icon={Phone} />
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button and Call Us Button */}
        <div className="flex items-center space-x-4 md:hidden">

          <a
            href="tel:+918447558372"
            onClick={() => setMenuOpen(false)}
          >
            <AnimatedCircleBtn text="" icon={Phone} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-green-200"
          >
            <ul className="flex flex-col items-start p-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-800 font-medium hover:text-blue-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
