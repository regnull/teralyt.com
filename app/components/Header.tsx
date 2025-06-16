'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Teralyt
          </Link>
          <div className="flex gap-6">
            <Link 
              href="/support" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 