'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Heart, Pill, FileText, Activity, Stethoscope, Shield, Lock, CheckCircle2 } from 'lucide-react';

const screens = [
  {
    id: 1,
    title: 'Medical History',
    icon: FileText,
    content: 'View your complete medical history in one unified timeline.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 2,
    title: 'Medications',
    icon: Pill,
    content: 'Track all your medications and dosages across providers.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    id: 3,
    title: 'Lab Results',
    icon: Activity,
    content: 'Access lab results from all your healthcare providers.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 4,
    title: 'Share Records',
    icon: Stethoscope,
    content: 'Instantly share your records with any doctor.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

const floatingBadges = [
  { icon: Shield, text: 'HIPAA Secure', delay: 0, x: -100, y: 50 },
  { icon: Lock, text: 'Encrypted', delay: 0.2, x: -80, y: -60 },
  { icon: CheckCircle2, text: 'FHIR Certified', delay: 0.4, x: 120, y: 80 },
  { icon: Heart, text: 'Patient Owned', delay: 0.6, x: 100, y: -40 },
];

export default function ProductPreview() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Your Health Story in Seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MedKey brings together your complete medical history from all providers into one simple, secure interface.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Mockup with Floating Badges */}
          <motion.div
            style={{ opacity, scale }}
            className="relative"
          >
            {/* Floating Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  opacity: { delay: badge.delay, type: 'spring' },
                  scale: { delay: badge.delay, type: 'spring' },
                  y: { duration: 3, repeat: Infinity, delay: badge.delay, ease: "easeInOut" },
                  x: { duration: 3, repeat: Infinity, delay: badge.delay, ease: "easeInOut" },
                }}
                className="absolute z-20"
                style={{
                  left: `calc(50% + ${badge.x}px)`,
                  top: `calc(50% + ${badge.y}px)`,
                }}
              >
                <div className="bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-200 flex items-center gap-2">
                  {(() => {
                    const IconComponent = badge.icon;
                    return <IconComponent className="w-4 h-4 text-[#0066cc]" />;
                  })()}
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </div>
              </motion.div>
            ))}

            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-8 bg-gradient-to-r from-[#0066cc] to-[#00a8cc] flex items-center justify-between px-6 text-white text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-3 h-1.5 bg-white rounded-sm m-0.5"></div>
                    </div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="h-[calc(100%-2rem)] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentScreen}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className={`h-full ${screens[currentScreen].color} p-6 flex flex-col`}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-white ${screens[currentScreen].iconColor}`}>
                            {(() => {
                              const IconComponent = screens[currentScreen].icon;
                              return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
                            })()}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {screens[currentScreen].title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="h-2 bg-gray-200 rounded-full mb-3"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-3"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="h-2 bg-gray-200 rounded-full mb-3"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="h-2 bg-gray-200 rounded-full mb-3"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="mt-4 flex justify-around border-t border-gray-200 pt-4">
                        {[0, 1, 2, 3].map((index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentScreen ? 'bg-[#0066cc]' : 'bg-gray-300'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature List */}
          <div className="lg:w-1/2 space-y-6">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  index === currentScreen
                    ? 'border-[#0066cc] bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    index === currentScreen ? 'bg-gradient-to-br from-[#0066cc] to-[#00a8cc]' : 'bg-gray-100'
                  }`}>
                    {(() => {
                      const IconComponent = screen.icon;
                      return IconComponent ? (
                        <IconComponent className={`w-6 h-6 ${
                          index === currentScreen ? 'text-white' : 'text-gray-600'
                        }`} />
                      ) : null;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {screen.title}
                    </h3>
                    <p className="text-gray-600">
                      {screen.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

