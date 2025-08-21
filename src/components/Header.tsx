"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/aboutus" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-200 border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-2">
        {/* Logo */}
        <div className="font-bold text-2xl text-gray-800">GoMedGo</div>

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
                className="text-white font-medium bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-3 py-1 rounded-lg shadow hover:opacity-90 transition"
              >
                Call Us
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button and Call Us Button */}
        <div className="flex items-center space-x-4 md:hidden">

          <a
            href="tel:+918447558372"
            className="text-white font-medium bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-3 py-1 rounded-lg shadow hover:opacity-90 transition"
            onClick={() => setMenuOpen(false)}
          >
            Call Us
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
