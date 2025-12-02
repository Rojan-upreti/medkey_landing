'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do you access my records?',
    answer: 'MedKey uses FHIR (Fast Healthcare Interoperability Resources) to securely connect to your healthcare providers\' systems. You authorize the connection through your existing patient portal login (like MyChart) or through secure identity verification. We never store your login credentials—you maintain full control.',
  },
  {
    question: 'Is MedKey HIPAA-compliant?',
    answer: 'Yes, MedKey is built with HIPAA compliance in mind. We follow healthcare data security best practices, use encryption for all data in transit and at rest, and maintain strict access controls. We\'re committed to protecting your health information and are working toward full HIPAA certification.',
  },
  {
    question: 'Which hospitals do you support?',
    answer: 'MedKey connects to major EHR systems that support FHIR, including Epic, Cerner, Allscripts, Azure API for FHIR, Google Healthcare API, Athena, and NextGen. If your provider uses a FHIR-compatible system, we can likely connect. We\'re continuously adding support for more systems.',
  },
  {
    question: 'Can I control who sees my medical records?',
    answer: 'Absolutely. You have complete control over your data. You decide which doctors or providers can access your records, and you can set time limits for access. Every share requires your explicit consent, and you can revoke access at any time.',
  },
  {
    question: 'What happens to my data if I stop using MedKey?',
    answer: 'You can export all your data at any time in standard formats. If you choose to delete your account, all your data is permanently removed from our systems. We never retain your data after you leave.',
  },
  {
    question: 'How much does MedKey cost?',
    answer: 'MedKey offers a free basic plan that gives you access to your unified medical history. Premium features like AI-powered health insights and advanced analytics will be available with a subscription. For healthcare providers, we offer subscription plans starting at $29/month per provider.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use end-to-end encryption, secure authentication methods, and follow industry best practices for healthcare data protection. All data access is logged and audited, and we conduct regular security assessments.',
  },
  {
    question: 'Can I use MedKey on my phone?',
    answer: 'Yes! MedKey is available as a web app and native mobile apps for iOS and Android. You can access your medical history and share records with doctors from anywhere, anytime.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about MedKey
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

