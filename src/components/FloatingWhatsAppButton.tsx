'use client';

import Link from 'next/link';

const phone = '918447558372';
const message = encodeURIComponent('Hi! I’d like to know more.');

export default function FloatingWhatsAppButton() {
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-[1000] button-animate">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[1000]"
      >
        <span className="block h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:scale-105 transition-transform">
          <svg
            viewBox="0 0 32 32"
            className="h-full w-full p-3"
            aria-hidden="true"
          >
            <path fill="#FFF" d="M19.11 17.19c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.19-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.42-.52.14-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.19 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.56-.35z" />
            <path fill="#FFF" d="M16 3.2c-7.04 0-12.8 5.76-12.8 12.8 0 2.26.6 4.39 1.66 6.23L3.2 28.8l6.74-1.62A12.732 12.732 0 0 0 16 28.8c7.04 0 12.8-5.76 12.8-12.8S23.04 3.2 16 3.2zm0 22.91c-2.2 0-4.23-.64-5.94-1.75l-.43-.27-4.03.97.97-3.93-.28-.45a10.566 10.566 0 0 1-1.67-5.73C4.62 8.58 9.72 3.49 16 3.49s11.38 5.09 11.38 11.38S22.28 26.11 16 26.11z" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
