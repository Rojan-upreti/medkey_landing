'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { User, Link2, Database, Eye, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Identity Login',
    description: 'Patient logs in using identity verification (OAuth, MyChart login, email/phone verification)',
    icon: User,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 2,
    title: 'FHIR Connection',
    description: 'MedKey connects to major FHIR endpoints like Epic, Cerner, Allscripts, Azure API for FHIR, and more',
    icon: Link2,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 3,
    title: 'Fetch & Unify Records',
    description: 'Complete medical history is fetched: allergies, medications, diagnoses, lab results, imaging, and more',
    icon: Database,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 4,
    title: 'Patient Views History',
    description: 'MedKey organizes everything into a timeline, summary dashboard, and easy-to-understand categories',
    icon: Eye,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    id: 5,
    title: 'Share With Doctor',
    description: 'During a visit, patient taps "Share My Records" → signs consent → doctor instantly sees everything',
    icon: Share2,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your complete medical history in five simple steps
          </p>
        </motion.div>

        {/* Desktop Timeline Chart */}
        <div className="hidden lg:block relative">
          {/* Animated Progress Line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progress }}
              className="h-full bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 via-orange-500 to-pink-500 rounded-full"
            />
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const stepProgress = useTransform(
                scrollYProgress,
                [index * 0.15, (index + 1) * 0.15],
                [0, 1]
              );
              const scale = useTransform(stepProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
              const opacity = useTransform(stepProgress, [0, 0.3, 1], [0.5, 1, 1]);

              return (
                <motion.div
                  key={step.id}
                  style={{ scale, opacity }}
                  className="relative"
                >
                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-32 left-full w-8 h-8 flex items-center justify-center z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  )}

                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-lg">{step.id}</span>
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                          className="absolute -inset-1 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-sm"
                        />
                      </motion.div>
                    </div>

                    {/* Card */}
                    <div className={`mt-8 ${step.bgColor} rounded-2xl p-6 border-2 ${step.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}>
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md`}
                      >
                        {(() => {
                          const IconComponent = step.icon;
                          return <IconComponent className="w-10 h-10 text-white" />;
                        })()}
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm text-center">
                        {step.description}
                      </p>

                      {/* Checkmark on completion */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.5, type: 'spring' }}
                        className="absolute top-4 right-4"
                      >
                        <CheckCircle2 className={`w-6 h-6 ${
                          step.color.includes('blue') ? 'text-blue-600' :
                          step.color.includes('green') ? 'text-green-600' :
                          step.color.includes('purple') ? 'text-purple-600' :
                          step.color.includes('orange') ? 'text-orange-600' :
                          'text-pink-600'
                        }`} />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full">
            <motion.div
              style={{ height: progress }}
              className="w-full bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 via-orange-500 to-pink-500 rounded-full"
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const stepProgress = useTransform(
                scrollYProgress,
                [index * 0.15, (index + 1) * 0.15],
                [0, 1]
              );
              const scale = useTransform(stepProgress, [0, 0.5, 1], [0.8, 1.05, 1]);
              const opacity = useTransform(stepProgress, [0, 0.3, 1], [0.5, 1, 1]);

              return (
                <motion.div
                  key={step.id}
                  style={{ scale, opacity }}
                  className="relative pl-20"
                >
                  {/* Step Number Badge */}
                  <div className="absolute left-0 top-0 z-20">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                        <span className="text-white font-bold text-lg">{step.id}</span>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                        className="absolute -inset-1 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-sm"
                      />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`${step.bgColor} rounded-2xl p-6 border-2 ${step.borderColor} shadow-lg`}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                    >
                      {(() => {
                        const IconComponent = step.icon;
                        return <IconComponent className="w-8 h-8 text-white" />;
                      })()}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Checkmark */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4, type: 'spring' }}
                      className="absolute top-6 right-6"
                    >
                      <CheckCircle2 className={`w-6 h-6 ${
                        step.color.includes('blue') ? 'text-blue-600' :
                        step.color.includes('green') ? 'text-green-600' :
                        step.color.includes('purple') ? 'text-purple-600' :
                        step.color.includes('orange') ? 'text-orange-600' :
                        'text-pink-600'
                      }`} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
