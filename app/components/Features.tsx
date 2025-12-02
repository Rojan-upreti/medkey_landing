'use client';

import { motion } from 'framer-motion';
import { 
  History, 
  Share2, 
  UserCheck, 
  Network, 
  Shield, 
  Smartphone 
} from 'lucide-react';

const features = [
  {
    icon: History,
    title: 'Unified Lifetime Medical History',
    description: 'All records pulled from different systems into one clean interface.',
    color: 'from-[#0066cc] to-[#0052a3]',
  },
  {
    icon: Share2,
    title: 'Instant Sharing With Doctors',
    description: 'Just one tap + digital consent → secure provider access.',
    color: 'from-[#00a8cc] to-[#0088aa]',
  },
  {
    icon: UserCheck,
    title: 'Patient Owned Data',
    description: 'Patient controls who sees their data and for how long.',
    color: 'from-[#6366f1] to-[#818cf8]',
  },
  {
    icon: Network,
    title: 'FHIR-Based Interoperability',
    description: 'Built on the newest healthcare data standards.',
    color: 'from-[#0ea5e9] to-[#38bdf8]',
  },
  {
    icon: Shield,
    title: 'Secure & Encrypted by Design',
    description: 'HIPAA-conscious architecture with self-hosted AI.',
    color: 'from-[#0052a3] to-[#0066cc]',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Web + Mobile (iOS/Android) — simple login, simple sharing.',
    color: 'from-[#00a8cc] to-[#06b6d4]',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-[#eef4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take control of your healthcare data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#e0e7f5] hover:border-[#0F2F6B]/30">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

