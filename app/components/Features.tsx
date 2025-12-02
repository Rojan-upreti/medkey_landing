'use client';

import { motion } from 'framer-motion';
import { 
  History, 
  Share2, 
  UserCheck, 
  Network, 
  Shield, 
  Smartphone,
  CheckCircle2,
  Radio
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

const systems = [
  { name: 'Epic', status: 'Connected' },
  { name: 'Cerner', status: 'Connected' },
  { name: 'Athena', status: 'Connected' },
  { name: 'Azure FHIR', status: 'Syncing' },
  { name: 'Telehealth', status: 'Syncing' },
  { name: 'Clinics', status: 'Syncing' },
];

const shareSteps = [
  'Patient initiates share',
  'Digital consent verified',
  'Doctor dashboard unlocked',
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-[#e0fbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <span className="px-4 py-2 bg-blue-100 text-[#0066cc] rounded-full text-sm font-semibold">
            HIPAA-Ready
          </span>
          <span className="px-4 py-2 bg-cyan-100 text-[#00a8cc] rounded-full text-sm font-semibold">
            FHIR Native
          </span>
          <span className="px-4 py-2 bg-indigo-100 text-[#6366f1] rounded-full text-sm font-semibold">
            Zero Fax Future
          </span>
        </motion.div>

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
            Everything you need to take control of your healthcare data — unified, encrypted, and shareable in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 hover:border-[#0066cc]/30">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-gray-500 font-medium">Trusted channel</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-semibold">Live</span>
                    </div>
                  </div>
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

        {/* MedKey Control Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0066cc] to-[#00a8cc] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">MedKey Control Graph</h3>
              <p className="text-blue-100 text-lg">Live Interoperability Matrix</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Systems Status */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4">System Status</h4>
                <div className="space-y-3">
                  {systems.map((system, index) => (
                    <motion.div
                      key={system.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-white font-medium">{system.name}</span>
                      <div className="flex items-center gap-2">
                        {system.status === 'Connected' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-green-300" />
                            <span className="text-green-300 text-sm font-semibold">Connected</span>
                          </>
                        ) : (
                          <>
                            <Radio className="w-4 h-4 text-yellow-300 animate-pulse" />
                            <span className="text-yellow-300 text-sm font-semibold">Syncing</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-sm text-blue-100 mb-1">FHIR endpoints certified</p>
                  <p className="text-3xl font-bold">
                    280+
                    <span className="text-lg font-normal text-blue-100 ml-2">health systems online</span>
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-sm text-blue-100 mb-1">Consent uptime</p>
                  <p className="text-3xl font-bold">
                    99.98%
                    <span className="text-lg font-normal text-blue-100 ml-2">monitored reliability</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Share Pulse */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
              <h4 className="text-lg font-semibold mb-4">Share pulse</h4>
              <div className="space-y-3">
                {shareSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-400"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <span className="text-white">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-center text-blue-100 text-lg max-w-3xl mx-auto">
              MedKey orchestrates every step in real time, removing fax machines, CDs, and guesswork from modern care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
