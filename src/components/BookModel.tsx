"use client";
import { Dialog } from "@headlessui/react";
import AnimatedCircleBtn from "./AnimatedCircleBtn";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookModal({ isOpen, onClose }: BookModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agree: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // ✅ Fixed handleChange without "any"
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const { name } = target;

    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.agree
    ) {
      setError("All fields are mandatory and checkbox must be checked.");
      return;
    }

    try {
      const res = await emailjs.send(
        "service_9eyaw62", // EmailJS service ID
        "template_h37g2xc", // EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "xdiByQ8BtNYMWW4Iw" // EmailJS public key
      );

      if (res.status === 200) {
        setSuccess("✅ Your request has been sent!");
        setError(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          agree: false,
        });
      } else {
        setError("❌ Failed to send. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Error sending request.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-2xl rounded-xl bg-[#6B0F1A] p-8 text-white shadow-xl">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X size={24} />
          </button>

          <Dialog.Title className="text-2xl font-semibold text-center mb-6">
            Request an Appointment
          </Dialog.Title>

          {/* Error / Success */}
          {error && <p className="text-red-400 mb-2">{error}</p>}
          {success && <p className="text-green-400 mb-2">{success}</p>}

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name*"
                className="bg-transparent border-b border-gray-300 outline-none p-2"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email ID*"
                className="bg-transparent border-b border-gray-300 outline-none p-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone*"
                className="bg-transparent border-b border-gray-300 outline-none p-2"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="bg-transparent text-gray-200 border-b border-gray-300 outline-none p-2"
                required
              >
                <option value="">I am interested in…*</option>
                <option>Home Care</option>
                <option>Physiotherapy</option>
                <option>Injection</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={3}
              className="bg-transparent border-b border-gray-300 outline-none w-full p-2"
            />

            <label className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <span>
                *I understand that this will override the DND status and I can
                be contacted via Phone, Email, or WhatsApp.
              </span>
            </label>

            <div className="text-center mt-6">
              <button type="submit" className="inline-flex items-center gap-2">
                Submit
                <AnimatedCircleBtn text="" icon={ChevronRight} />
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
