'use client';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AboutUs: React.FC = () => (
  <motion.main
    className="max-w-4xl mx-auto px-4 py-12 text-gray-800"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h1
      variants={itemVariants}
      className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-600"
    >
      About Us
    </motion.h1>

    <motion.p
      variants={itemVariants}
      className="text-lg mb-10 text-gray-600"
    >
      At <span className="font-semibold">GoMedGo</span>!, MedCapSky Private Limited, we are dedicated to transforming the healthcare industry by providing high-quality paramedical staffing solutions, professional education, and innovative technology-driven services. With a deep understanding of the healthcare sector’s challenges, we connect skilled paramedics with hospitals, clinics, and healthcare institutions, ensuring efficient workforce management and improved patient care. Our approach combines recruitment expertise, upskilling programs, and advanced digital solutions to bridge the gap between talent and opportunity in the healthcare ecosystem. With a mission to empower healthcare professionals and a vision to revolutionize paramedical workforce solutions, we are committed to delivering excellence, trust, and innovation in every aspect of our services.
    </motion.p>

    <motion.section variants={itemVariants} className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Our Mission</h2>
      <motion.p
        variants={itemVariants}
        className="text-lg mb-10  text-gray-600"
      >
        Our mission is to provide equitable, compassionate, and high-quality healthcare services directly to patients’ homes, ensuring that every individual receives the care they deserve, regardless of their background or circumstances. Simultaneously, we are dedicated to empowering underpaid nursing professionals by offering fair employment opportunities, recognizing their invaluable contributions, and ensuring they receive the respect and compensation they rightfully earn.
      </motion.p>
    </motion.section>

    <motion.section variants={itemVariants} className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Our Vision</h2>
      <motion.p
        variants={itemVariants}
        className="text-lg mb-10  text-gray-600"
      >
        <ul>
          <li>

            To transform healthcare delivery by bridging gaps in access, quality, and equity—bringing compassionate, patient-centered care directly to homes while strengthening healthcare systems worldwide.{""}
          </li>
          <li>
            In India and beyond, we envision:
          </li>
          <span className="font-semibold">
            For Patients:</span> A future where no one is denied medical attention due to location, mobility, or socioeconomic status—where hospital-level care seamlessly extends into homes.
          <li><span className="font-semibold">
            For Healthcare Institutions:</span> Reliable, skilled staffing solutions that elevate patient outcomes, reduce burnout, and optimize workforce efficiency in hospitals, clinics, and remote settings.
          </li>
          <li><span className="font-semibold">
            For Nursing Professionals:</span> A global movement that recognizes, fairly compensates, and empowers caregivers—ensuring their expertise fuels sustainable healthcare ecosystems everywhere.
          </li>
        </ul>
      </motion.p>
    </motion.section>




    <motion.section variants={itemVariants} className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Our Team</h2>
      <p className="text-gray-700">
        Our team consists of experienced healthcare professionals, technologists, and customer support
        specialists who are passionate about improving the healthcare experience.
      </p>
    </motion.section>

    <motion.section variants={itemVariants}>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Contact Us</h2>
      <p className="text-gray-700">
        Have questions or feedback? Reach out to us at{" "}
        <a
          href="mailto:info@gomedgo.com"
          className="text-blue-500 hover:underline"
        >
          info@gomedgo.com
        </a>.
      </p>
    </motion.section>
  </motion.main>
);

export default AboutUs;
