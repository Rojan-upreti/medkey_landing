'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, FileCheck, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard protocols.',
  },
  {
    icon: Shield,
    title: 'HIPAA-Conscious',
    description: 'Built with healthcare compliance in mind, following HIPAA guidelines and best practices.',
  },
  {
    icon: Key,
    title: 'Patient Control',
    description: 'You decide who can access your data and for how long. Full transparency and control.',
  },
  {
    icon: Eye,
    title: 'Audit Logs',
    description: 'Complete visibility into who accessed your records and when.',
  },
  {
    icon: FileCheck,
    title: 'Secure Authentication',
    description: 'Multi-factor authentication and identity verification to protect your account.',
  },
  {
    icon: CheckCircle,
    title: 'Regular Security Audits',
    description: 'Continuous monitoring and regular security assessments to ensure your data stays safe.',
  },
];

export default function Security() {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Shield className="w-10 h-10 text-[#0066cc]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Security & Privacy First
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your medical data is sensitive. We treat it that way with enterprise-grade security and complete transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#0066cc] to-[#00a8cc] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0066cc] to-[#00a8cc] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Your Data, Your Control
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            MedKey puts you in complete control of your medical information. You own your data, and you decide who sees it. Every access is logged, every share is transparent, and every decision is yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

