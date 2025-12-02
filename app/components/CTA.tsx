'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://formspree.io/f/xgvgyydg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-[#0066cc] via-[#00a8cc] to-[#6366f1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Become an Early User
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md opacity-95">
            Join MedKey and be among the first to take control of your complete medical history. Get early access to our platform and help shape the future of healthcare data.
          </p>

          <form 
            action="https://formspree.io/f/xgvgyydg"
            method="POST"
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.05 } : {}}
                whileTap={status === 'idle' ? { scale: 0.95 } : {}}
                className="bg-white text-[#0066cc] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0066cc] border-t-transparent rounded-full animate-spin"></div>
                    Joining...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Joined!
                  </>
                ) : (
                  <>
                    Join Early Access
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
            {status === 'error' && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-white bg-red-500/20 border border-red-300/30 rounded-full px-4 py-2 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                {errorMessage}
              </motion.div>
            )}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-white bg-green-500/20 border border-green-300/30 rounded-full px-4 py-2 text-sm"
              >
                <CheckCircle className="w-4 h-4" />
                Successfully joined! Check your email for confirmation.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

