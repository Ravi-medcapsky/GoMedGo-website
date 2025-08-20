'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Example with Formspree:
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(form) });
    setSuccess(true);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-lg w-full text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-3xl font-bold mb-4"
        >
          Contact Us ✨
        </motion.h1>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center bg-black/30 text-green-200 p-2 rounded-md mb-4"
          >
            ✅ Your message has been sent!
          </motion.p>
        )}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-none outline-none bg-white/20 text-white placeholder-gray-200"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="phone"
            placeholder="Your Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-none outline-none bg-white/20 text-white placeholder-gray-200"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-none outline-none bg-white/20 text-white placeholder-gray-200"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-lg border-none outline-none bg-white/20 text-white placeholder-gray-200 resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 rounded-lg font-bold bg-gradient-to-r from-green-400 to-blue-500 text-white"
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
