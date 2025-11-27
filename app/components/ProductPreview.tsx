'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Heart, Pill, FileText, Activity, Stethoscope, Shield } from 'lucide-react';

const screens = [
  {
    id: 1,
    title: 'Medical History',
    icon: FileText,
    content: 'View your complete medical history in one unified timeline.',
    color: 'bg-[#f0f4ff]',
    iconColor: 'text-[#0f2f6b]',
  },
  {
    id: 2,
    title: 'Medications',
    icon: Pill,
    content: 'Track all your medications and dosages across providers.',
    color: 'bg-[#e6fbf9]',
    iconColor: 'text-[#0fb5ba]',
  },
  {
    id: 3,
    title: 'Lab Results',
    icon: Activity,
    content: 'Access lab results from all your healthcare providers.',
    color: 'bg-[#f7f0ff]',
    iconColor: 'text-[#7c55c3]',
  },
  {
    id: 4,
    title: 'Share Records',
    icon: Stethoscope,
    content: 'Instantly share your records with any doctor.',
    color: 'bg-[#fff4ec]',
    iconColor: 'text-[#f28a3f]',
  },
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
    <section className="py-20 bg-gradient-to-b from-[#f6f8fb] via-white to-[#e4ecf7]">
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
          {/* Phone Mockup */}
          <motion.div
            style={{ opacity, scale }}
            className="relative lg:pl-16"
          >
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hidden lg:flex flex-col gap-4 absolute -left-12 top-4"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white/90 border border-[#d9e4f2] rounded-2xl px-4 py-3 shadow-xl shadow-[#0f2f6b]/10 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#0f2f6b] mb-1">
                  Sync
                </p>
                <p className="text-lg font-semibold text-gray-900">Live</p>
                <p className="text-xs text-gray-500">3 new files</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="bg-[#0f2f6b] text-white rounded-2xl px-4 py-3 shadow-xl shadow-[#0f2f6b]/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200 mb-1">
                  Consent
                </p>
                <p className="text-lg font-semibold">Ready to share</p>
                <div className="flex items-center gap-2 text-xs text-blue-100 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#0fb5ba] animate-pulse" />
                  Dr. Wilson
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex flex-col gap-4 absolute -right-16 bottom-6"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="bg-white rounded-2xl px-4 py-3 border border-[#d9e4f2] shadow-lg shadow-[#0f2f6b]/10"
              >
                <p className="text-xs text-gray-500 mb-1">Vitals trend</p>
                <p className="text-2xl font-semibold text-[#0f2f6b]">98%</p>
                <p className="text-xs text-[#0fb5ba]">All records matched</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="bg-[#0fb5ba] text-[#0f2f6b] rounded-2xl px-4 py-3 shadow-xl shadow-[#0fb5ba]/30"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#0f2f6b]/70 mb-1">
                  4.3s
                </p>
                <p className="text-sm font-semibold">Average share time</p>
              </motion.div>
            </motion.div>

            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-8 bg-gradient-to-r from-[#0f2f6b] to-[#123b88] flex items-center justify-between px-6 text-white text-xs font-medium">
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
                              index === currentScreen ? 'bg-[#0f2f6b]' : 'bg-gray-300'
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
                    ? 'border-[#0f2f6b] bg-[#eef4ff] shadow-lg'
                    : 'border-[#d9e4f2] bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    index === currentScreen ? 'bg-[#0f2f6b]' : 'bg-[#ecf2ff]'
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

