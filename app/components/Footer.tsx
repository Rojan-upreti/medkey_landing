'use client';

import { Shield, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">MedKey<span className="text-[#0fb5ba]">.tech</span></h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Your complete medical history in one place. Access your records. Control your data. Share with any doctor instantly.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0fb5ba]" />
                HIPAA-Conscious
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#7cc4ff]" />
                medkey.tech
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:iam@rojanupreti.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  iam@rojanupreti.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MedKey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

