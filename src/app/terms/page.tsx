"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Nature of Engagement",
    content: `MedCapSky is a staffing and deployment platform that connects service providers with clients in need of medical and non-medical personnel. The engagement is on a contract or freelance basis only. No employer-employee relationship is implied unless explicitly stated in writing by MedCapSky.`,
  },
  {
    title: "2. Registration and Platform Access",
    content: `All service providers must complete the registration process and pay a non-refundable platform access fee of INR 199, valid for one (1) year from the date of registration. This fee grants the service provider access to receive job notifications, assignments, and platform support.`,
  },
  {
    title: "3. Verification and Documentation",
    content: `Before being activated on the platform, service providers must submit verified documents, including government ID, qualification certificates, experience letters, and background checks (if applicable). MedCapSky reserves the right to reject or suspend a provider’s access if submitted information is false or incomplete.`,
  },
  {
    title: "4. Service Assignments and Selection",
    content: `MedCapSky will offer job opportunities based on provider location, availability, skill match, and client requirements. Acceptance of a job is voluntary. Once accepted, the provider must report on time and complete the assignment as per the agreed scope and duration.`,
  },
  {
    title: "5. Professional Conduct and Responsibilities",
    content: `All service providers must adhere to the highest standards of professional behavior. This includes:
- Respecting patient/client privacy and confidentiality
- Following clinical or functional protocols
- Wearing appropriate attire and ID badge
- Avoiding misconduct, absenteeism, or unauthorized leaves

MedCapSky reserves the right to terminate access or report to authorities in case of gross misconduct or violation of terms.`,
  },
  {
    title: "6. Payment Terms",
    content: `Payments will be made on a daily/weekly/monthly basis, depending on the assignment, and only through official MedCapSky channels. Service providers must not demand or accept direct payments from clients. Any such act may lead to blacklisting from the platform.`,
  },
  {
    title: "7. No Direct Engagement with Clients",
    content: `Service providers are strictly prohibited from directly soliciting or accepting work from MedCapSky clients without prior written approval. Any attempt to bypass the platform will result in immediate removal and possible legal action.`,
  },
  {
    title: "8. Prenatal Gender Testing Prohibition",
    content: `MedCapSky service providers are not authorized to perform or participate in any prenatal gender determination procedures. We strictly follow the PCPNDT Act and any involvement in gender testing will lead to immediate termination and reporting to legal authorities.`,
  },
  {
    title: "9. Medical and Legal Limitations",
    content: `Nurses, physiotherapists, and paramedical staff are authorized to provide only non-invasive, home-care support.
- They are not to perform surgeries, administer restricted medications, or offer diagnostic conclusions.
- In case of emergencies, service providers must advise immediate hospital referral.
- IT and non-medical staff must follow the scope of assigned tasks and not handle medical records unless specifically authorized.`,
  },
  {
    title: "10. Termination and Suspension",
    content: `MedCapSky reserves the right to suspend or terminate a service provider’s access to the platform at any time for reasons including but not limited to:
- Breach of conduct
- Client complaints
- Repeated absenteeism
- Misrepresentation of qualifications
- Legal violations`,
  },
  {
    title: "11. Agreement to Terms",
    content: `By registering and operating under MedCapSky, the service provider agrees to all the terms and conditions outlined herein. These terms may be updated by MedCapSky at any time. Continued engagement with the platform indicates acceptance of any revised terms.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Terms and Conditions
      </motion.h1>

      <motion.h2
        className="text-lg text-center text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Applicable to Nurses, Physiotherapists, Paramedical Staff, IT Professionals,
        Non-IT Staff, Daycare Workers, and Other Onboarded Professionals
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
