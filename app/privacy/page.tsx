'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="bg-white shadow rounded-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Commitment to Privacy</h2>
              
              <p className="mb-6">
                At Teralyt Software LLC, we take your privacy seriously. This Privacy Policy explains how we handle your data when you use our applications.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Collection and Usage</h3>
              <p className="mb-6">
                We collect minimal information necessary for the operation of our applications. This includes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Basic account information (email, name)</li>
                <li>Usage data to improve our services</li>
                <li>Technical information for troubleshooting</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Handling</h3>
              <p className="mb-6">
                We do not store any images you upload to our applications. Images are processed in real-time and are not retained on our servers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Sharing</h3>
              <p className="mb-6">
                We do not share your personal information with third parties. Your data is used exclusively for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Providing and improving our services</li>
                <li>Investigating and resolving technical issues</li>
                <li>Enhancing application performance and user experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
              <p className="mb-6">
                We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
              <p className="mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of data collection</li>
                <li>Request information about how your data is used</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mb-6">
                <a href="mailto:privacy@teralyt.com" className="text-blue-600 hover:text-blue-800">
                  privacy@teralyt.com
                </a>
              </p>

              <div className="mt-12 pt-6 border-t border-gray-200">
                <Link 
                  href="/"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 