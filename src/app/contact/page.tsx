'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_9eyaw62",   // 🔑 Replace with your EmailJS service ID
        "template_e7nfddq",  // 🔑 Replace with your EmailJS template ID
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        "xdiByQ8BtNYMWW4Iw"    // 🔑 Replace with your EmailJS public key
      );

      console.log("EmailJS result:", result.text);
      setSuccess(true);
      setError(null);
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("❌ Something went wrong. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center  p-6 bg-[url('/hero3.png')]">
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
            className="text-center bg-black/30 text-green-700 p-2 rounded-md mb-4"
          >
            ✅ Your message has been sent!
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center bg-black/30 text-red-200 p-2 rounded-md mb-4"
          >
            {error}
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
            className="w-full p-3 rounded-lg border-none outline-none bg-white/20 text-black placeholder-gray-600"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="phone"
            placeholder="Your Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-none outline-none bg-white/20 text-black placeholder-gray-600"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-none outline-none bg-white/20 text-black placeholder-gray-600"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-lg border-none outline-none bg-white/20 text-black placeholder-gray-600 resize-none"
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
