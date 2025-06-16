'use client';

import { useState } from 'react';
import { FaRobot, FaMobileAlt, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ContactForm from './components/ContactForm'
import Header from './components/Header'

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-xl mb-8">
              Teralyt Software LLC specializes in cutting-edge AI solutions and innovative app development
            </p>
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaRobot className="text-4xl text-blue-600" />}
              title="AI Solutions"
              description="Custom AI solutions tailored to your business needs, from machine learning models to natural language processing."
            />
            <ServiceCard
              icon={<FaMobileAlt className="text-4xl text-blue-600" />}
              title="App Development"
              description="Native and cross-platform mobile applications built with the latest technologies and best practices."
            />
            <ServiceCard
              icon={<FaCode className="text-4xl text-blue-600" />}
              title="Custom Software"
              description="Bespoke software solutions designed to streamline your business operations and boost productivity."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality with our expertise in AI and app development.
          </p>
          <button 
            onClick={() => setIsContactFormOpen(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
} 