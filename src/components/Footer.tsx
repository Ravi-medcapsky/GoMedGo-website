"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";


const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold  mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <a href="mailto:info@gomedgo.com" className="hover:text-blue-400 transition">
                info@gomedgo.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <a href="tel:+919208432221" className="hover:text-blue-400 transition">
                +91 8447558372
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Globe size={18} />
              <a href="https://www.medcapsky.com" target="_blank" className="hover:text-blue-400 transition">
                www.medcapsky.com
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm">
            Villa Number-7, Sanskriti Garden, Phase-2, Roza Jalalpur,
            Greater Noida, Uttar Pradesh, 201009
          </p>
        </motion.div>

        {/* Legal Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold  mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="hover:text-blue-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter / Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow the Best</h3>

          <div className="flex space-x-3">
            <a href="#" target="blank" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="https://www.linkedin.com/company/medcapsky/" target="blank" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/medcapsky" target="blank" className="hover:text-sky-400 transition">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/medcapsky/" target="blank" className="hover:text-pink-500 transition">
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="border-t border-gray-700 mt-10 pt-4 text-center text-sm"
      >
        © {new Date().getFullYear()} GoMedGo. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
