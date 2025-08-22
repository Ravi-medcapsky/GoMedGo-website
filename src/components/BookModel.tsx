"use client";
import { Dialog } from "@headlessui/react";
import AnimatedCircleBtn from "./AnimatedCircleBtn";
import { ChevronRight, X } from "lucide-react";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookModal({ isOpen, onClose }: BookModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Modal panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-2xl rounded-xl bg-[#6B0F1A] p-8 text-white shadow-xl">
          {/* ❌ Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X size={24} />
          </button>

          <Dialog.Title className="text-2xl font-semibold text-center mb-6">
            Request an Appointment
          </Dialog.Title>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="bg-transparent border-b border-gray-300 outline-none p-2"
              />
              <input
                type="email"
                placeholder="Email ID*"
                className="bg-transparent border-b border-gray-300 outline-none p-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone*"
                className="bg-transparent border-b border-gray-300 outline-none p-2"
              />
              <select className="bg-transparent text-gray-200 border-b border-gray-300 outline-none p-2">
                <option>I am interested in…*</option>
                <option>Home Care</option>
                <option>Physiotherapy</option>
                <option>Injection</option>
              </select>
            </div>

            <textarea
              placeholder="Your Message"
              rows={3}
              className="bg-transparent border-b border-gray-300 outline-none w-full p-2"
            />

            <label className="flex items-start space-x-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <span>
                *I understand that this will override the DND status and I can
                be contacted via Phone, Email, or WhatsApp.
              </span>
            </label>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="inline-flex items-center gap-2"
              >
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
