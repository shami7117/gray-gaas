// app/faqs/page.tsx
'use client';

import { motion } from 'framer-motion';
import FaqList from '../../components/FaqList';
import ContactCTA from '../../components/ContactCTA';
import ScrollToTop from '../../components/ScrollToTop';
import { faqs } from '../../data/faqs';

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Everything you need to know about Gray GaaS and our innovative 
              Gas-as-a-Service solution. Can't find what you're looking for? 
              We're here to help!
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FaqList faqs={faqs} />
          <ContactCTA />
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}