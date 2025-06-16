'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Teralyt Software</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/support" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Support
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 