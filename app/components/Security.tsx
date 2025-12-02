'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Lock, Eye, Key, FileCheck, CheckCircle, Sparkles, Zap, Layers, Activity } from 'lucide-react';
import { useState, useRef } from 'react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard protocols.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    particles: 8,
  },
  {
    icon: Shield,
    title: 'HIPAA-Conscious',
    description: 'Built with healthcare compliance in mind, following HIPAA guidelines and best practices.',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    particles: 6,
  },
  {
    icon: Key,
    title: 'Patient Control',
    description: 'You decide who can access your data and for how long. Full transparency and control.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    particles: 7,
  },
  {
    icon: Eye,
    title: 'Audit Logs',
    description: 'Complete visibility into who accessed your records and when.',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    particles: 5,
  },
  {
    icon: FileCheck,
    title: 'Secure Authentication',
    description: 'Multi-factor authentication and identity verification to protect your account.',
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
    particles: 9,
  },
  {
    icon: CheckCircle,
    title: 'Regular Security Audits',
    description: 'Continuous monitoring and regular security assessments to ensure your data stays safe.',
    gradient: 'from-violet-500 to-fuchsia-500',
    bgGradient: 'from-violet-50 to-fuchsia-50',
    particles: 6,
  },
];

function AnimatedCard({ feature, index }: { feature: typeof securityFeatures[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative h-full"
    >
      {/* Animated particles */}
      {isHovered && Array.from({ length: feature.particles }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-br ${feature.gradient} rounded-full opacity-60`}
          initial={{
            x: '50%',
            y: '50%',
            scale: 0,
          }}
          animate={{
            x: `${50 + (Math.random() - 0.5) * 100}%`,
            y: `${50 + (Math.random() - 0.5) * 100}%`,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Main card */}
      <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
          animate={isHovered ? {
            backgroundPosition: ['0% 0%', '100% 100%'],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Animated border glow */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
          animate={isHovered ? {
            scale: [1, 1.1, 1],
            opacity: [0, 0.3, 0],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
          {/* Icon with animation */}
          <motion.div
            className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={isHovered ? {
                x: ['-100%', '200%'],
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />
            <feature.icon className="w-10 h-10 text-white relative z-10" />
            
            {/* Pulsing ring */}
            {isHovered && (
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-white/50`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Text */}
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors"
            style={{ transform: 'translateZ(30px)' }}
          >
            {feature.title}
          </motion.h3>
          
          <motion.p
            className="text-gray-600 leading-relaxed text-[15px] group-hover:text-gray-700 transition-colors"
            style={{ transform: 'translateZ(20px)' }}
          >
            {feature.description}
          </motion.p>

          {/* Animated checkmark on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            className="absolute bottom-6 right-6"
          >
            <div className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center shadow-lg`}>
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Corner accent */}
        <motion.div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full`}
          animate={isHovered ? {
            scale: [1, 1.2, 1],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

export default function Security() {
  return (
    <section id="security" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-8 shadow-2xl shadow-blue-500/30 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-3xl border-2 border-white/20"
            />
            <Shield className="w-12 h-12 text-white relative z-10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Security & Privacy First
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Your medical data is sensitive. We treat it that way with enterprise-grade security and complete transparency.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {securityFeatures.map((feature, index) => (
            <AnimatedCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-12 md:p-16 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"
                animate={{
                  backgroundPosition: ['0 0', '20px 20px'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Glowing orbs */}
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </motion.div>
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Your Data, Your Control</span>
                <motion.div
                  animate={{ rotate: [360, 180, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </motion.div>
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Complete Control,<br />Complete Transparency
              </h3>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
                MedKey puts you in complete control of your medical information. You own your data, and you decide who sees it. Every access is logged, every share is transparent, and every decision is yours.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                {[
                  { icon: Lock, text: 'Encrypted' },
                  { icon: Eye, text: 'Transparent' },
                  { icon: Key, text: 'Controlled' },
                  { icon: Shield, text: 'Protected' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 cursor-pointer"
                  >
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-white text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
