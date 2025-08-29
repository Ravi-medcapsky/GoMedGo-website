"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, SearchIcon } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus when search opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <header className=" border-b border-solid-2 border-gray-200  top-0 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
        {/* Logo */}
        <div className="font-bold text-2xl flex items-center gap-2">
          <div className="items-center justify-center text-center">
            <Image src="/logo.png" alt="Logo" width={50} height={20} />
          </div>
          {/* Animated vertical line */}
          {/* <motion.div
            className="h-14 w-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600"
            animate={{ padding: ["2px", "12px", "2px"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          /> */}
          <h1 className="text-sm text-xl">Go<span className="text-[#135E4B]">Med</span>Go</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Search with expanding input */}
          <div className="flex items-center relative">
            <SearchIcon
              className="h-6 w-6  cursor-pointer mr-2 hover:text-[#135E4B] transition"
              onClick={() => setOpen((prev) => !prev)}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 ease-in-out border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                ${open ? "w-48 opacity-100" : "w-0 opacity-0 px-0 py-0 border-0"}
              `}
            />
          </div>

          {/* Nav links */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className=" font-medium hover:text-[#135E4B] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a href="tel:+918447558372">
                <AnimatedCircleBtn text="" icon={Phone} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button + Call Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <a href="tel:+918447558372" onClick={() => setMenuOpen(false)}>
            <AnimatedCircleBtn text="" icon={Phone} />
          </a>

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
            className="md:hidden "
          >
            <ul className="flex flex-col items-start p-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-800 font-medium hover:text-[#135E4B] transition"
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
