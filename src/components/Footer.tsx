"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Download,
  Smartphone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-500 inline-block pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 group">
                <Mail size={18} className="mt-1 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:medcapsky@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  medcapsky@gmail.com
                </a>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3 group">
                  <Phone size={18} className="text-blue-400 flex-shrink-0" />
                  <a
                    href="tel:+918447558372"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 8447558372
                  </a>
                </div>
                <div className="flex items-center space-x-3 group ml-8">
                  <a
                    href="tel:+919220488083"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 9220488083
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Globe size={18} className="mt-1 text-blue-400 flex-shrink-0" />
                <a
                  href="https://www.medcapsky.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  www.medcapsky.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="mt-1 text-blue-400 flex-shrink-0"
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Villa Number-7, Sanskriti Garden, Phase-2, Roza Jalalpur,
                  Greater Noida, Uttar Pradesh, 201009
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-500 inline-block pb-2">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-500 inline-block pb-2">
              Follow Us
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay connected with us on social media
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/medcapsky"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/medcapsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/medcapsky"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-400 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/medcapsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Download Apps Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-500 inline-block pb-2">
              Download Our Apps
            </h3>
            <div className="space-y-3">
              <button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.medcapsky.gomedgo",
                    "_blank",
                  )
                }
                aria-label="Download GoMedGo App"
              >
                <Smartphone size={20} className="group-hover:animate-pulse" />
                <span className="text-sm font-medium">
                  GoMedGo - Home Healthcare
                </span>
                <Download
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
              <button
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.medcapsky.gomedgo.provider",
                    "_blank",
                  )
                }
                aria-label="Download GoMedGo Provider App"
              >
                <Smartphone size={20} className="group-hover:animate-pulse" />
                <span className="text-sm font-medium">GoMedGo Provider</span>
                <Download
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} GoMedGo. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-400 text-center sm:text-right">
              Empowering Healthcare at Your Doorstep
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
