// components/ContactCTA.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 mb-8"
    >
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Our team is here to help! Get in touch with us and we'll respond as quickly as possible.
        </p>
        
        <Link href="/contact">
          <motion.span
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}

