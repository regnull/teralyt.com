'use client';

import { useState } from 'react';
import { FaQuestionCircle, FaEnvelope, FaMobileAlt, FaCamera, FaLock, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does HeartLens work?",
      answer: "HeartLens uses advanced AI to read blood pressure measurements directly from photos of your monitor's screen. Simply take a picture of your blood pressure monitor's display, and HeartLens will automatically extract and log the readings."
    },
    {
      question: "Do I need to connect my blood pressure monitor via Bluetooth?",
      answer: "No! That's one of the key benefits of HeartLens. You don't need any Bluetooth connection or pairing. Just take a photo of your monitor's screen, and HeartLens does the rest."
    },
    {
      question: "Which blood pressure monitors are compatible?",
      answer: "HeartLens works with virtually any blood pressure monitor that has a digital display, including popular brands like Omron, Beurer, A&D, and many others. As long as the numbers are clearly visible on the screen, HeartLens can read them."
    },
    {
      question: "Is my health data private?",
      answer: "Yes! HeartLens is designed with privacy in mind. Your health data stays on your device by default. We offer optional cloud backup, but this is completely your choice. We never share your data with third parties."
    },
    {
      question: "How accurate is the reading?",
      answer: "HeartLens uses advanced AI technology to ensure high accuracy in reading your blood pressure monitor's display. However, the accuracy ultimately depends on the quality of the photo and the clarity of your monitor's display."
    }
  ];

  const features = [
    {
      icon: <FaCamera className="text-4xl text-blue-600" />,
      title: "Snap & Analyze",
      description: "Take a photo of your BP monitor screen and get instant readings"
    },
    {
      icon: <FaLock className="text-4xl text-blue-600" />,
      title: "Private & Secure",
      description: "Your health data stays on your device by default"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Track Trends",
      description: "Visualize your health data with easy-to-read graphs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">HeartLens Support</h1>
            <p className="text-xl mb-8">
              Get help with your HeartLens blood pressure monitoring app
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <FaQuestionCircle className={`text-blue-600 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-white border border-gray-200 rounded-b-lg"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need More Help?</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-8">
              Our support team is here to help you with any questions or issues you might have.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="mailto:support@teralyt.com"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaEnvelope />
                Email Support
              </a>
              <a
                href="tel:+19177036267"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <FaMobileAlt />
                Call Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 