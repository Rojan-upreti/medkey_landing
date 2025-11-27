'use client';

'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Key,
  FileCheck,
  CheckCircle,
  Activity,
  Wifi,
} from 'lucide-react';

const rings = [
  { label: 'Data in transit', status: 'AES-256 + TLS 1.3', color: 'from-[#0f2f6b] to-[#123b88]' },
  { label: 'Data at rest', status: 'Envelope encryption', color: 'from-[#0fb5ba] to-[#12c5c9]' },
  { label: 'Consent layer', status: 'Patient-signed tokens', color: 'from-[#4f6ed2] to-[#6d8bff]' },
];

const pulses = [
  { label: 'HIPAA controls verified', icon: Shield },
  { label: 'Audit log immutable', icon: Activity },
  { label: 'MFA required for staff', icon: Key },
];

const guardrails = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Transit + rest encryption with rotating keys and tamper-proof key custody.',
  },
  {
    icon: Wifi,
    title: 'Zero-Trust Perimeter',
    description: 'Device fingerprinting, network posture checks, and scoped access tokens.',
  },
  {
    icon: Eye,
    title: 'Transparent Audit Trail',
    description: 'Every access is logged, notarized, and streamed to your dashboard in real time.',
  },
  {
    icon: FileCheck,
    title: 'Secure Authentication',
    description: 'Hardware-backed MFA, biometric sign-in, and adaptive risk scoring.',
  },
  {
    icon: CheckCircle,
    title: 'Continuous Monitoring',
    description: 'Automated trust reports, intrusion detection, and third-party pen tests.',
  },
  {
    icon: Shield,
    title: 'HIPAA-Conscious Core',
    description: 'Built alongside healthcare compliance experts with documented controls.',
  },
];

export default function Security() {
  return (
    <section id="security" className="py-24 bg-gradient-to-b from-white via-[#f6f8fb] to-[#e4ecf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Animated security radar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#0f2f6b] to-[#132c63] text-white p-10 shadow-[0_40px_80px_-40px_rgba(15,47,107,0.8)] overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundImage:
                  'conic-gradient(from 90deg, rgba(255,255,255,0.15), transparent 60%)',
              }}
            />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-200 mb-3">
                <Shield className="w-4 h-4" />
                MedKey shield stack
              </span>
              <h2 className="text-3xl font-semibold mb-2">Security & Privacy First</h2>
              <p className="text-blue-100 text-sm mb-8">
                Layered protection across encryption, consent, monitoring, and zero-trust access—
                designed specifically for sensitive medical data.
              </p>

              <div className="relative flex items-center justify-center py-6">
                {rings.map((ring, index) => (
                  <motion.div
                    key={ring.label}
                    className="absolute"
                    style={{ width: `${180 + index * 80}px`, height: `${180 + index * 80}px` }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                  >
                    <div
                      className={`w-full h-full rounded-full border border-white/20 flex flex-col items-center justify-center text-center px-6`}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">{ring.label}</p>
                      <p className="text-base font-semibold">{ring.status}</p>
                    </div>
                    <motion.div
                      className={`absolute inset-0 rounded-full opacity-20 bg-gradient-to-r ${ring.color}`}
                      animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 4 + index, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur flex flex-col items-center justify-center border border-white/20">
                  
                </div>
              </div>

              <div className="grid gap-3 mt-10">
                {pulses.map((pulse, idx) => (
                  <motion.div
                    key={pulse.label}
                    className="flex items-center justify-between bg-white/10 rounded-2xl px-4 py-3 backdrop-blur"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <pulse.icon className="w-4 h-4 text-[#0fb5ba]" />
                      {pulse.label}
                    </div>
                    <motion.span
                      className="text-xs uppercase tracking-[0.3em] text-blue-200"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    >
                      ACTIVE
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guardrail cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {guardrails.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[#dce5f6] bg-white shadow-lg shadow-[#0f2f6b]/5 p-5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#eef4ff] flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-[#0f2f6b]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-[#dce5f6] bg-white p-8 shadow-xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Your Data, Your Control
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Every access, export, or share runs through patient consent and is notarized to your audit log.
            No shadow copies, no silent exports, no data monetization—ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

