'use client';

import { motion } from 'framer-motion';
import {
  History,
  Share2,
  UserCheck,
  Network,
  Shield,
  Smartphone,
} from 'lucide-react';

const features = [
  {
    icon: History,
    title: 'Unified Lifetime Medical History',
    description:
      'All records pulled from different systems into one clean interface.',
    accent: 'bg-[#0f2f6b]',
    gradient: 'from-[#0f2f6b] via-[#123b88] to-[#5d8bff]',
  },
  {
    icon: Share2,
    title: 'Instant Sharing With Doctors',
    description:
      'Just one tap + digital consent → secure provider access.',
    accent: 'bg-[#0fb5ba]',
    gradient: 'from-[#0fb5ba] via-[#12c5c9] to-[#7af5f1]',
  },
  {
    icon: UserCheck,
    title: 'Patient Owned Data',
    description:
      'Patient controls who sees their data and for how long.',
    accent: 'bg-[#4f6ed2]',
    gradient: 'from-[#4f6ed2] via-[#6d8bff] to-[#a2b3ff]',
  },
  {
    icon: Network,
    title: 'FHIR-Based Interoperability',
    description:
      'Built on the newest healthcare data standards.',
    accent: 'bg-[#1e7fbf]',
    gradient: 'from-[#1e7fbf] via-[#33a6ff] to-[#7cc4ff]',
  },
  {
    icon: Shield,
    title: 'Secure & Encrypted by Design',
    description:
      'HIPAA-conscious architecture with self-hosted AI.',
    accent: 'bg-[#2a5c99]',
    gradient: 'from-[#2a5c99] via-[#3d7bbd] to-[#6aa6e0]',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description:
      'Web + Mobile (iOS/Android) — simple login, simple sharing.',
    accent: 'bg-[#0fb5ba]',
    gradient: 'from-[#0fb5ba] via-[#7cc4ff] to-[#c4e5ff]',
  },
];

const statusBadges = [
  { label: 'HIPAA-Ready', color: 'text-[#0fb5ba]', bg: 'bg-[#e6fbf9]' },
  { label: 'FHIR Native', color: 'text-[#0f2f6b]', bg: 'bg-[#eef4ff]' },
  { label: 'Zero Fax Future', color: 'text-[#7c55c3]', bg: 'bg-[#f3edff]' },
];

const liveNodes = [
  'Epic',
  'Cerner',
  'Athena',
  'Azure FHIR',
  'Telehealth',
  'Clinics',
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white via-[#f6f8fb] to-[#eaf2ff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 border border-[#d9e4f2] shadow-[0_40px_80px_-40px_rgba(15,47,107,0.4)]">
          {/* floating glows */}
          <motion.div
            className="absolute -top-10 -left-10 w-60 h-60 bg-[#0fb5ba]/20 blur-3xl rounded-full"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-16 -right-10 w-72 h-72 bg-[#7cc4ff]/25 blur-3xl rounded-full"
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex flex-wrap justify-center gap-3 mb-5">
                {statusBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold ${badge.bg} ${badge.color} border border-white/60`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f2f6b] mb-4">
                Core Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to take control of your healthcare data —
                unified, encrypted, and shareable in seconds.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
              {/* Feature grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-[#f6f8fb] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative rounded-2xl border border-[#e0e7f5] bg-white p-6 shadow-lg shadow-[#0f2f6b]/5 hover:border-[#0f2f6b]/40 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg shadow-[#0f2f6b]/25 ${feature.accent} text-white`}
                          >
                            <feature.icon className="w-7 h-7" />
                          </div>
                          <motion.span
                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-60 blur-lg`}
                            animate={{
                              opacity: [0.4, 0.8, 0.4],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0fb5ba]" />
                          Trusted channel
                        </span>
                        <span className="uppercase tracking-wide text-[#0f2f6b] font-semibold">
                          Live
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animated chart / data column */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl bg-gradient-to-br from-[#0f2f6b] to-[#123b88] text-white p-8 shadow-2xl relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 12, repeat: Infinity }}
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, rgba(255,255,255,0.4) 10%, transparent 60%)',
                    }}
                  />
                  <div className="relative z-10">
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-3">
                      MedKey Control Graph
                    </p>
                    <h3 className="text-2xl font-semibold mb-4">
                      Live Interoperability Matrix
                    </h3>
                    <div className="space-y-3 mb-6">
                      {liveNodes.map((node, idx) => (
                        <motion.div
                          key={node}
                          className="flex items-center justify-between text-sm"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#0fb5ba] animate-pulse" />
                            {node}
                          </span>
                          <span className="text-blue-100/80">
                            {idx < 3 ? 'Connected' : 'Syncing'}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <p className="text-sm text-blue-100">FHIR endpoints certified</p>
                        <p className="text-3xl font-bold text-white">
                          280+
                          <span className="text-base font-medium text-blue-200 ml-1">
                            health systems online
                          </span>
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <p className="text-sm text-blue-100">
                          Consent uptime
                        </p>
                        <p className="text-3xl font-bold text-white">
                          99.98%
                          <span className="text-base font-medium text-blue-200 ml-1">
                            monitored reliability
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-[#dce5f6] bg-white p-6 shadow-xl"
                >
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-4">
                    Share pulse
                  </p>
                  <div className="space-y-4">
                    {['Patient initiates share', 'Digital consent verified', 'Doctor dashboard unlocked'].map(
                      (step, idx) => (
                        <div key={step} className="flex items-center gap-3">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-[#0fb5ba]"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: idx * 0.2,
                            }}
                          />
                          <span className="text-gray-700 text-sm">
                            {step}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-6 rounded-xl bg-[#eef4ff] p-4 text-sm text-gray-600">
                    MedKey orchestrates every step in <span className="font-semibold text-[#0f2f6b]">real time</span>,
                    removing fax machines, CDs, and guesswork from modern care.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

