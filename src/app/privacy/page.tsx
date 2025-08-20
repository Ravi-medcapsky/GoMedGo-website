"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Overview",
    content: `This Privacy Policy outlines how MedCapSky Revolution Pvt. Ltd. (“MedCapSky,” “we,” “us,” or “our”) collects, uses, stores, and protects the personal information of individuals (“Service Providers”) who register on our platform to offer staffing and support services. This policy applies to all categories of service providers including but not limited to nurses, physiotherapists, paramedical staff, IT/non-IT professionals, and daycare workers.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following types of information during registration and ongoing engagement:
- Personal Identification: Name, phone number, email, address, date of birth, government-issued ID (e.g., Aadhaar, PAN, driving license)
- Professional Details: Qualifications, certifications, licenses, past work experience, resume/CV
- Bank Details: Account number, IFSC code (for payment processing)
- Location Information: City, PIN code, GPS location (if using mobile app)
- Device Data: IP address, device type, browser, app usage logs`,
  },
  {
    title: "3. Purpose of Data Collection",
    content: `Your personal and professional data is collected and used for the following purposes:
- To verify your identity and eligibility as a service provider
- To match you with relevant jobs and assignments
- To facilitate communication and job scheduling
- To process your payments and invoices
- To maintain platform security and prevent fraud
- To comply with legal obligations and internal audit purposes`,
  },
  {
    title: "4. Data Sharing and Disclosure",
    content: `We may share your information with:
- Clients/Users: Limited information (such as your name, profile, qualifications) is shared with clients for job matching
- Third-party Services: For background checks, payment gateways, or technical support — only as required
- Legal Authorities: If required by law, or in response to a legal process, investigation, or court order

We do not sell your data to any third party.`,
  },
  {
    title: "5. Data Storage and Security",
    content: `Your data is securely stored on encrypted servers hosted in India. Access is limited to authorized personnel only.  
We follow industry-standard security protocols to protect against data loss, unauthorized access, or misuse.`,
  },
  {
    title: "6. Rights of Service Providers",
    content: `As a registered service provider, you have the following rights:
- Access: You can request access to the data we hold about you.
- Correction: You may request correction of incorrect or outdated data.
- Withdrawal: You may request to deactivate your profile and withdraw consent to use your data (which may affect your ability to receive job opportunities).
- Grievances: You can raise privacy-related concerns by writing to us at 📧 privacy@medcapsky.com or 📞 +91 9208432221`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal data for as long as necessary to:
- Provide you with jobs and services
- Comply with legal, financial, and tax-related obligations
- Maintain operational records for a minimum of 3 years from your last engagement`,
  },
  {
    title: "8. Use of Mobile App",
    content: `When you use the GoMedGo mobile application:
- We may collect device location (if permissions are enabled) to recommend jobs near you.
- Usage logs and technical data are collected to improve app performance.
- You may revoke location permissions at any time from your device settings.`,
  },
  {
    title: "9. Updates to Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Any significant changes will be notified to you via app, email, or SMS. Continued use of our platform after such updates constitutes your acceptance of the revised policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions, concerns, or requests related to this Privacy Policy, please contact:

📍 MedCapSky Revolution Pvt. Ltd.  
📧 Email: privacy@medcapsky.com  
📞 Phone: +91 9208432221  
🌐 Website: www.medcapsky.com`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Privacy Policy
      </motion.h1>

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
