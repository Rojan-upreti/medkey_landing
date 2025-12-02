'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="MedKey Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <a href="#" className="text-2xl font-bold text-[#0F2F6B]">
              MedKey
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#0F2F6B] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-[#0F2F6B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0FB5BA] transition-colors"
            >
              Join Early Access
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#0F2F6B]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-[#0F2F6B] hover:bg-gray-50 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="block bg-[#0F2F6B] text-white px-6 py-2 rounded-full text-center text-base font-medium hover:bg-[#0FB5BA] mt-4"
              >
                Join Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

